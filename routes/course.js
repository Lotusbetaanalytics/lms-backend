const express = require("express");
const {
  createCourse,
  getCourses,
  getSingleCourse,
} = require("../controllers/course");
const Course = require("../models/Course");
const { protect, authorize } = require("../middleware/auth");
const advancedResults = require("../middleware/advancedResults");

const router = express.Router();

router
  .route("/")
  .post(protect, createCourse)
  .get(protect, advancedResults(Course), getCourses);
router.route("/:id").get(protect, getSingleCourse);

module.exports = router;
