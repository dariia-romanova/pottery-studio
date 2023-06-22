import express from "express";
import { createCourse, deleteCourse, getAllCourses, getCourseById, updateCourse } from "../controllers/courses";
import { verifyAdmin } from "../utils/verifyToken";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createCourse);

//UPDATE
router.put("/:id", verifyAdmin, updateCourse);

//DELETE
router.delete("/:id", verifyAdmin, deleteCourse);

//GET BY ID
router.get("/:id", getCourseById);

//GET ALL
router.get("/", getAllCourses);

export default router;