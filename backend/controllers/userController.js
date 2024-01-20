const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const requireAuth = require("../middleware/requireAuth");

const signup = async (req, res) => {
  try {
    //Get the username and password of req.body
    const { username, password, snips, lists } = req.body;
    //Hash the password
    const hashedPassword = bcrypt.hashSync(password, 8);
    //Create a user with this data
    const user = await User.create({ username, password: hashedPassword, snips, lists });
    //Send a response
    res.json({user});
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const login = async (req, res) => {
  try {
    //Get the username and body of req.body
    const { username, password } = req.body;
    //Find the user with requested username
    const user = await User.findOne({ username });
    console.log(user);
    if (!user) return res.sendStatus(403);
    //Compare sent in password with found user password hash
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) return res.sendStatus(401);
    //create jwt
    const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
    const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET);
    //save it in a cookie
    res.cookie("Authorization", token, {
      expires: new Date(exp),
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
    //send it
    res.json({ token });
  } catch (err) {
    console.log(err);
  }
};

const checkAuth = async (req, res) => {
  console.log(req.user);
  res.sendStatus(200);
};

const logout = async (req, res) => {
  try {
    //Delete cookie
    res.clearCookie("Authorization");
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(401);
  }
};

module.exports = {
  signup,
  login,
  checkAuth,
  logout,
};
