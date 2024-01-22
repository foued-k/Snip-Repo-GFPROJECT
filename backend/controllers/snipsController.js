const Snip = require("../models/snip");
const cookieParser = require("cookie-parser");

const createSnip = async (req, res) => {
  try {
    const { title, description, body, language, labels } = req.body;
    const snip = await Snip.create({
      title,
      description,
      body,
      language,
      labels,
      user: req.user._id,
    });
    res.status(200).send({ msg: "Snip created successfully" });
  } catch (err) {
    console.log(err);
    res.sendStatus(401);
  }
};

const getSnips = async (req, res) => {
  try {
    const snips = await Snip.find({ user: req.user._id });
    res.json({ snips });
  } catch (err) {
    console.log(err);
    res.sendStatus(401);
  }
};

const getOneSnip = async (req, res) => {
  try {
    const snip = await Snip.findOne({
      _id: req.params.id,
      user: req.user._id,
    });
    res.json({ snip });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const searchSnips = async (req, res) => {
  try {
    const searchQuery = req.query.term;
    let query = { user: req.user._id };
    if (searchQuery) {
      query.$or = [
        { title: { $exists: true, $regex: new RegExp(searchQuery, "i") } },
        {
          description: { $exists: true, $regex: new RegExp(searchQuery, "i") },
        },
        {
          language: { $exists: true, $regex: new RegExp(searchQuery, "i") },
        },
        { body: { $exists: true, $regex: new RegExp(searchQuery, "i") } },
      ];
    }
    
    const snips = await Snip.find(query);
    res.json({ snips });
  } catch (err) {
    console.log(err);
    res.sendStatus(401);
  }
};

const updateSnip = async (req, res) => {
  const { title, description, body, language, labels } = req.body;
  const snip = await Snip.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id },
    { title, description, body, language, labels },
    { new: true }
  );
  res.json({ snip });
};

const deleteSnip = async (req, res) => {
  try {
    await Snip.deleteOne({ _id: req.params.id, user: req.user._id });
    res.json({ msg: "Deleted successfully" });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

module.exports = {
  createSnip,
  getSnips,
  getOneSnip,
  searchSnips,
  updateSnip,
  deleteSnip,
};
