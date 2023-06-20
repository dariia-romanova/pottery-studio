import express from "express";
import Course from "../models/Course";

const router = express.Router();

//CREATE
router.post("/", async (req, res, next) => {
  const newCourse = new Course(req.body);

  try {
    const savedCouese = await newCourse.save();
    res.status(200).json(savedCouese);
  } catch (e) {
    next(e);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedCouese = await Course.findByIdAndUpdate(
      req.params.id, 
      { $set: req.body, },
      { new: true, }
    );

    res.status(200).json(updatedCouese);
  } catch (e) {
    res.status(500).json(e);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Course.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json('Course has been delated');
  } catch (e) {
    res.status(500).json(e);
  }
});

//GET BY ID
router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(
      req.params.id
    );

    res.status(200).json(course);
  } catch (e) {
    res.status(500).json(e);
  }
});

//GET ALL
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json(courses);
  } catch (e) {
    res.status(500).json(e);
  }
});

export default router;