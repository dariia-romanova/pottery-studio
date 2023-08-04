import express from "express";
import { deleteUser, getUserById, updateUser } from "../controllers/user";
import { verifyUser } from "../utils/verifyToken";

const router = express.Router();

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET BY ID
router.get("/:id", verifyUser, getUserById);

export default router;