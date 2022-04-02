const express = require("express");

const Author = require("../models/author.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const author = await Author.find({}, { _id:1}).lean().exec();
    let x = "";
    author.forEach((e) => {
      x += e._id + ",";
    })


    return res.send(x);
  } catch (e) {
    return res.status(501).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    

    return res.send(author);
  } catch (e) {
    return res.status(501).send(e.message);
  }
});

router.post("", async (req, res) => {
  try {
    const author = await Author.create(req.body);

    return res.send(author);
  } catch (e) {
    return res.status(501).send(e.message);
  }
});

module.exports = router;


