const express = require("express");

const router = express.Router();

const {
  applyJob,
  getMyApplications,
  getJobApplicants,
  updateApplicationStatus,
  getDashboardStats,
} = require("../controllers/applicationController");

const { protect } = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

router.get(
  "/dashboard-stats",
  protect,
  authorize("jobseeker"),
  getDashboardStats
);
router.get(
  "/my",
  protect,
  authorize("jobseeker"),
  getMyApplications
);

router.patch(
  "/:applicationId/status",
  protect,
  authorize("recruiter"),
  updateApplicationStatus
);

router.get(
  "/job/:jobId",
  protect,
  authorize("recruiter"),
  getJobApplicants
);


router.post(
  "/:jobId",
  protect,
  authorize("jobseeker"),
  applyJob
);

module.exports = router;