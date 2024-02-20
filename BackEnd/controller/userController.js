import { userMod } from "../models/userModel";

// login user
const login = async (req, res) => {
  res.json({ message: "Hello World" });
};

// signup user
const signup = async (req, res) => {
  res.json({ message: "Hello World" });
};

module.exports = { login, signup };
