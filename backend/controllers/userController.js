const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const requireAuth = require("../middleware/requireAuth");

const signup = async (req, res) => {
  try {
    //Get the username and password of req.body
    const { username, password, snips, lists } = req.body;
    if (!username || !password) {
      return res.status(400).json({ msg: "Please enter all the fields" });
    }
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res
        .status(400)
        .json({ msg: "User with the same username already exists" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ msg: "Password should be at least 6 characters" });
    }
    //Hash the password
    const hashedPassword = bcrypt.hashSync(password, 8);
    //Create a user with this data
    const user = await User.create({
      username,
      password: hashedPassword,
      snips,
      lists,
    });
    //Send a response
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
};

const login = async (req, res) => {
  try {
    //Get the username and body of req.body
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ msg: "Please enter all the fields" });
    }
    //Find the user with requested username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send({ msg: "This username does not exist" });
    }
    //Compare sent in password with found user password hash
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) {
      return res.status(400).send({ msg: "Wrong password" });
    }
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

const getLatestSnips = async (req, res) => {
  try {
    console.log(req.params.username);
    const latestSnips = await User.findOne({ username: req.params.username });
    res.status(200).json(latestSnips);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({_id: req.params.id});
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({user});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  signup,
  login,
  checkAuth,
  getLatestSnips,
  logout,
  getUser
};
