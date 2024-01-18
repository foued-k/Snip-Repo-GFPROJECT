const jwt = require("jsonwebtoken");
const User = require("../models/user");
const cookieParser = require("cookie-parser");

async function requireAuth(req, res, next) {
  try {
    //Read token off cookies
    const token = req.cookies.Authorization;
    //Decode the token
    const decoded = jwt.verify(token, process.env.SECRET);
    //Check expiration
    if (Date.now() > decoded.exp) {
      return res.sendStatus(401);
    }
    //Find user using the decoded sub
    const user = await User.findById(decoded.sub);
    if (!user) return res.sendStatus(401);
    //Attach user to req
    req.user = user;
    //Continue one
    next();
  } catch (err) {
    console.log(err);
    return res.sendStatus(401);
  }
}

module.exports = requireAuth;
