import express from "express";
import { createCourse, deleteCourse, getCourseBySlug, updateCourse } from "../controllers/course";
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

export default router;