const express = require("express");
const connectToDb = require("./config/connectToDb");
require("dotenv").config();
const userController = require("./controllers/userController");
const snipsController = require("./controllers/snipsController");
const cookieParser = require("cookie-parser");
const requireAuth = require("./middleware/requireAuth");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));

connectToDb();

app.get("/", (req, res) => {
  console.log("Hello World!");
});

//user authentication paths
app.post("/signup", userController.signup);
app.post("/login", userController.login);
app.get("/checkAuth", requireAuth, userController.checkAuth);
app.get("/logout", userController.logout);

//creating snips paths
app.get("/snips", requireAuth, snipsController.getSnips);
app.get("/snips/:id", requireAuth, snipsController.getOneSnip);
app.post("/snips", requireAuth, snipsController.createSnip);
app.put("/snips/:id", requireAuth, snipsController.updateSnip);
app.delete("/snips/:id", requireAuth, snipsController.deleteSnip);

app.listen(process.env.PORT);
