import express from "express";
import { deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/user";

const router = express.Router();

//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", deleteUser);

//GET BY ID
router.get("/:id", getUserById);

//GET ALL
router.get("/", getAllUsers);

export default router;