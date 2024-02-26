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
  try {
    const user = await userMod.signup(req.body); // Call the signup method on the model class
    const email = req.body.email;
    //CREATE A TOKEN
    const token = createToken(user._id);
    res.status(201).json({ email, token });

    //
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// TODO: GET USER FIRSTNAME AND JO
// TODO: WHERE JO STATUS = PENDING
//=========================================
router.get("/getUser", async (req, res) => {
  try {
    // Fetch all users with their associated job orders
    const usersWithJobOrders = await userMod.find().populate("JobOrder");
    res.json(usersWithJobOrders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
