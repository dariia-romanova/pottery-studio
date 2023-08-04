import express from "express";
import { getAllUsers } from "../controllers/user";
import { verifyAdmin } from "../utils/verifyToken";

const router = express.Router();

//GET ALL
router.get("/", verifyAdmin, getAllUsers);

export default router;