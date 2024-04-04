const express = require("express");
const userModel = require("../Models/userModel");
const router = express.Router();
const cryptojs = require("crypto-js");

// routes
router.post("/register", async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });

    // checking for duplicate email
    if (existingUser)
      return res.status(200).send({
        success: false,
        message: "User already exists",
      });

    // hashing password
    const hashedPassword = cryptojs.AES.encrypt(
      req.body.password,
      process.env.KEY
    ).toString();
    req.body.password = hashedPassword;

    const user = new userModel(req.body);
    await user.save();
    res.status(201).send({ success: true, message: "User Registered", user });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: error,
    });
  }
});

module.exports = router;
