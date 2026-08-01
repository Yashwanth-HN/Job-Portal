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
// @desc    Jobseeker Dashboard Stats
// @route   GET /api/applications/dashboard-stats
// @access  Private - Jobseeker

const getDashboardStats = async (req, res) => {
  try {
    const applications = await Application.find({
  applicant: req.user.id,
}).populate("job");

// Ignore applications whose job has been deleted
const validApplications = applications.filter(
  (app) => app.job !== null
);;

    const totalApplied = validApplications.length;

    const accepted = validApplications.filter(
      (app) => app.status === "accepted"
    ).length;

    const pending = validApplications.filter(
      (app) => app.status === "pending"
    ).length;

    const rejected = validApplications.filter(
      (app) => app.status === "rejected"
    ).length;

    res.json({
      success: true,
      totalApplied,
      accepted,
      pending,
      rejected,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
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


const updateApplicationStatus = async (req, res) => {
  try {
    const { applicationId } = req.params;
    const { status } = req.body;

    // Check whether the status is valid
    const allowedStatuses = ["pending", "accepted", "rejected"];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        message: "Invalid application status",
      });
    }

    // Find the application
    const application = await Application.findById(applicationId);

    if (!application) {
      return res.status(404).json({
        message: "Application not found",
      });
    }

    // Find the job associated with this application
    const job = await Job.findById(application.job);

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    // Check whether the logged-in recruiter owns the job
    if (job.createdBy.toString() !== req.user.id.toString()) {
      return res.status(403).json({
        message: "You are not authorized to update this application",
      });
    }

    // Update application status
    application.status = status;

    await application.save();

    res.status(200).json({
      success: true,
      message: "Application status updated successfully",
      application,
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
  updateApplicationStatus,
  getDashboardStats,
};