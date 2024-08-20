import express from "express";
import { validate } from "../../middleware/validate.js";
import { registerUser, getAllUsers, deleteUser } from '../controllers/userController.js';
import { registerUserValidator } from "../validators/userValidator.js";

const router = express.Router();

router.get("/all", getAllUsers);
router.post("/", registerUserValidator(), validate, registerUser);
router.delete("/:userId", deleteUser);

export default router;