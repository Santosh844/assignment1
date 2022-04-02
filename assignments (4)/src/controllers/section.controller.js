const express = require("express");

const Section = require("../models/section.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const section = await Section.find({}, { _id: 1 }).lean().exec();
    let x = "";
    section.forEach((e) => {
      x += e._id + ",";
    });

    return res.send(x);
  } catch (e) {
    res.send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const section = await Section.findById(req.params.id);

    return res.send(section);
  } catch (e) {
    res.send(e.message);
  }
});

router.post("", async (req, res) => {
  try {
    const section = await Section.create(req.body);

    return res.send(section);
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = router;
