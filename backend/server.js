const express = require("express");
const connectToDb = require("./config/connectToDb");
require("dotenv").config();
const userController = require("./controllers/userController");
const cookieParser = require("cookie-parser");
const requireAuth = require("./middleware/requireAuth");
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));

connectToDb();

app.get("/", (req, res) => {
  console.log("Hello World!");
});

app.post("/signup", userController.signup);

app.post("/login", userController.login);

app.get("/checkAuth", requireAuth, userController.checkAuth);

app.get("/logout", userController.logout);

app.listen(process.env.PORT);
