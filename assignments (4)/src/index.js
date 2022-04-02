const express = require("express");

const connect = require("./configs/db");

const authorController = require("./controllers/author.controller");
const bookController = require("./controllers/book.controller");
const sectionController = require("./controllers/section.controller");

const app = express();

app.use(express.json());

app.use("/books", bookController);
app.use("/author", authorController);
app.use("/sections", sectionController);

// app.post("/books", async (req, res) => {
//   try {
//     const books = await Book.create(req.body);

//     return res.send(books);
//   } catch (e) {
//     return res.send(e.message);
//   }
// });

// app.get("/books/:id", async (req, res) => {
//   try {
//     const books = await Book.find().lean().exec();

//     return res.send(books);
//   } catch (e) {
//     return res.send(e.message);
//   }
// });

// app.post("/author", async (req, res) => {
//   try {
//     const author = await Author.create(req.body);

//     return res.send(author);
//   } catch (e) {
//     return res.send(e.message);
//   }
// });

// app.get("/author/:author_id", async (req, res) => {
//   try {
//     const author = await Author.find({ author_id: req.params.author_id })
//       .lean()
//       .exec();

//     return res.send(author);
//   } catch (e) {
//     res.send(e.message);
//   }
// });

// app.get("/author", async (req, res) => {
//   try {
//     const author = await Author.find().lean().exec();

//     return res.send(author);
//   } catch (e) {
//     res.send(e.message);
//   }
// });

app.listen(1345, async function () {
  try {
    await connect();
    console.log("listening to port 1345");
  } catch (e) {
    console.log(e.message);
  }
});
