import express from "express";
import { getAllCourses } from "../controllers/courses";

const router = express.Router();

//GET ALL
router.get("/", getAllCourses);

export default router;