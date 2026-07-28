const Job = require("../models/Job");

// @desc    Create a new job
// @route   POST /api/jobs
// @access  Private - Recruiter only
const createJob = async (req, res,next) => {
  try {
    const {
      title,
      description,
      company,
      location,
      salary,
      jobType,
      requirements,
    } = req.body;

    if (!title || !description || !company || !location) {
  return res.status(400).json({
    success: false,
    message:
      "Title, description, company, and location are required.",
  });
}

    const job = await Job.create({
      title,
      description,
      company,
      location,
      salary,
      jobType,
      requirements,
      createdBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Job created successfully",
      job,
    });
  } catch (error) {
    next(error);
  }
};


// @desc    Get all jobs with search and filters
// @route   GET /api/jobs
// @access  Public
const getAllJobs = async (req, res) => {
  try {
   const {
  search,
  location,
  jobType,
  page = 1,
  limit = 10,
} = req.query;


    const pageNumber = Number(page);
    const limitNumber = Number(limit);

    const skip = (pageNumber - 1) * limitNumber;

    const filter = {};

    // Search by title, company, description, or requirements
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { company: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { requirements: { $regex: search, $options: "i" } },
      ];
    }

    // Filter by location
    if (location) {
      filter.location = {
        $regex: location,
        $options: "i",
      };
    }

    // Filter by job type
    if (jobType) {
      filter.jobType = jobType;
    }
  
    const totalJobs = await Job.countDocuments(filter);

    const totalPages = Math.ceil(totalJobs / limitNumber);

    const jobs = await Job.find(filter)
  .sort({ createdAt: -1 })
  .skip(skip)
  .limit(limitNumber);

    res.status(200).json({
  success: true,
  currentPage: pageNumber,
  totalPages,
  totalJobs,
  count: jobs.length,
  jobs,
});
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get single job
// @route   GET /api/jobs/:id
// @access  Public
const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      job,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// @desc    Update a job
// @route   PUT /api/jobs/:id
// @access  Private - Recruiter only
const updateJob = async (req, res) => {
  try {
    let job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    // Check job ownership
    if (job.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to update this job",
      });
    }
    const { title, description, company, location } = req.body;

    if (title !== undefined && title.trim() === "") {
    return res.status(400).json({
        success: false,
        message: "Title cannot be empty.",
    });
    }

    if (description !== undefined && description.trim() === "") {
    return res.status(400).json({
        success: false,
        message: "Description cannot be empty.",
    });
    }

    if (company !== undefined && company.trim() === "") {
    return res.status(400).json({
        success: false,
        message: "Company cannot be empty.",
    });
    }

    if (location !== undefined && location.trim() === "") {
    return res.status(400).json({
        success: false,
        message: "Location cannot be empty.",
    });
    }




    job = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Job updated successfully",
      job,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// @desc    Delete a job
// @route   DELETE /api/jobs/:id
// @access  Private - Recruiter only
const deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    // Check job ownership
    if (job.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to delete this job",
      });
    }

    await job.deleteOne();

    res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
};