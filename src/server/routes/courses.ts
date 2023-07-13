import express from "express";
import { createCourse, deleteCourse, getAllCourses, getCourseBySlug, updateCourse } from "../controllers/courses";
import { verifyAdmin } from "../utils/verifyToken";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createCourse);

//UPDATE
router.put("/:id", verifyAdmin, updateCourse);

//DELETE
router.delete("/:id", verifyAdmin, deleteCourse);

//GET BY SLUG
router.get("/:slug", getCourseBySlug);

//GET ALL
router.get("/", getAllCourses);

export default router;