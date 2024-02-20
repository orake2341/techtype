import express from "express";
import { userMod } from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { SECRET } from "../config.js";
const router = express.Router();

//CREATING TOKEN
//=========================================
const createToken = (_id) => {
  return jwt.sign({ _id }, SECRET, { expiresIn: "3d" });
};

// LOGIN METHOD
//=========================================
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userMod.login(email, password); // Call the signup method on the model class

    //CREATE A TOKEN
    const token = createToken(user._id);
    res.status(201).json({ email, token });

    //
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// SIGNUP METHOD
//=========================================
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userMod.signup(email, password); // Call the signup method on the model class

    //CREATE A TOKEN
    const token = createToken(user._id);
    res.status(201).json({ email, token });

    //
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
