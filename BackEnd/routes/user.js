import express from "express";
import { userMod } from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

// LOGIN METHOD
//=========================================
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userMod.login(email, password);

    generateToken(res, user._id);

    //
    res.status(200).json({ _id: user._id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// SIGNUP METHOD
//=========================================
router.post("/signup", async (req, res) => {
  try {
    const {
      email,
      firstname,
      lastname,
      username,
      password2,
      number,
      password,
    } = req.body;
    const user = await userMod.signup(
      email,
      firstname,
      lastname,
      username,
      password2,
      number,
      password
    );
    generateToken(res, user._id);
    res.status(200).json({ _id: user._id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// LOGOUT METHOD
//=========================================
router.post("/logout", async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "LOGGED OUT" });
});

// TODO: GET USER FIRSTNAME AND JO
// TODO: WHERE JO STATUS = PENDING
//=========================================
router.get("/getUser", async (req, res) => {
  try {
    // Fetch all users with their associated job orders
    const usersWithJobOrders = await userMod.find();
    res.json(usersWithJobOrders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
