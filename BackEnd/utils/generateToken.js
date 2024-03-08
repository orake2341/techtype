import jwt from "jsonwebtoken";
import { SECRET } from "../config.js";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, SECRET, {
    expiresIn: "1d",
  });
  res.cookie("jwt", token, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 1 * 24 * 60 * 60 * 1000,
  });
};

export default generateToken;
