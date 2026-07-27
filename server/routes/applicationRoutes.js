const express = require("express");

const router = express.Router();

const {
  applyJob,
  getMyApplications,
  getJobApplicants,
} = require("../controllers/applicationController");

const { protect } = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");


router.get(
  "/my",
  protect,
  authorize("jobseeker"),
  getMyApplications
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