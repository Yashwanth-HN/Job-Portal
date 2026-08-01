const express = require("express");

const router = express.Router();

const { createJob, getAllJobs,
  getJobById,getMyJobs,updateJob,getDashboardStats,
  deleteJob, } = require("../controllers/jobController");
const { protect } = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");


router.get("/", getAllJobs);

router.get(
  "/my-jobs",
  protect,
  authorize("recruiter"),
  getMyJobs
);

router.get(
  "/dashboard-stats",
  protect,
  authorize("recruiter"),
  getDashboardStats
);

router.get("/:id", getJobById);

router.post(
  "/",
  protect,
  authorize("recruiter"),
  createJob
);

router.put(
  "/:id",
  protect,
  authorize("recruiter"),
  updateJob
);

router.delete(
  "/:id",
  protect,
  authorize("recruiter"),
  deleteJob
);

module.exports = router;