import express from "express";
import { createCourse, deleteCourse, getAllCourses, getCourseById, updateCourse } from "../controllers/courses";

const router = express.Router();

//CREATE
router.post("/", createCourse);

//UPDATE
router.put("/:id", updateCourse);

//DELETE
router.delete("/:id", deleteCourse);

//GET BY ID
router.get("/:id", getCourseById);

//GET ALL
router.get("/", getAllCourses);

export default router;