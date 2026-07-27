const Application = require("../models/Application");
const Job = require("../models/Job");

const applyJob = async (req, res) => {
  try {
    const { jobId } = req.params;

    // Check whether the job exists
    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    // Check whether the jobseeker has already applied
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: req.user.id,
    });

    if (existingApplication) {
      return res.status(400).json({
        message: "You have already applied for this job",
      });
    }

    // Create the application
    const application = await Application.create({
      job: jobId,
      applicant: req.user.id,
    });

    res.status(201).json({
      message: "Job application submitted successfully",
      application,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

const getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      applicant: req.user.id,
    }).populate("job");

    res.status(200).json({
      success: true,
      count: applications.length,
      applications,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
const getJobApplicants = async (req, res) => {
  try {
    const { jobId } = req.params;

    // Check whether the job exists
    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    // Check whether logged-in recruiter owns this job
    if (job.createdBy.toString() !== req.user.id.toString()) {
      return res.status(403).json({
        message: "You are not authorized to view applicants for this job",
      });
    }

    // Find all applications for this job
    const applications = await Application.find({
      job: jobId,
    }).populate("applicant", "name email");

    res.status(200).json({
      success: true,
      count: applications.length,
      applications,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = {
  applyJob,
  getMyApplications,
  getJobApplicants,
};