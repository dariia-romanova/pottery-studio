import express from "express";
import { deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/user";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken";

const router = express.Router();

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET BY ID
router.get("/:id", verifyUser, getUserById);

//GET ALL
router.get("/", verifyAdmin, getAllUsers);

export default router;