const express = require("express");

const Book = require("../models/book.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const book = await Book.find()
      .populate("section_id")
      .populate("author_id", "author_name")
      .lean()
      .exec();

    return res.send(book);
  } catch (e) {
    return res.send(e.message);
  }
});

router.get("/author/:id", async (req, res) => {
  try {
    const book = await Book.find({ author_id: req.params.id }, )
      .populate("section_id")
      .populate("author_id")
      .lean()
      .exec();

    return res.send(book);
  } catch (e) {
    return res.send(e.message);
  }
});

router.get("/author/:author_id/section/:section_id", async (req, res) => {
  try {
    const book = await Book.find({
      $and: [
        { author_id: req.params.author_id },
        { section_id: req.params.section_id },
      ],
    })
      .populate("section_id")
      .populate("author_id")
      .lean()
      .exec();

    return res.send(book);
  } catch (e) {
    return res.send(e.message);
  }
});




router.post("", async (req, res) => {
  try {
    const book = await Book.create(req.body);

    return res.send(book);
  } catch (e) {
    return res.send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    return res.send(book);
  } catch (e) {
    return res.send(e.message);
  }
});

module.exports = router;
