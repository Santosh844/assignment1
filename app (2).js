const express = require('express');

const app = express();

app.use(logger);

app.get("/user", (req, res) => {
    return res.send("Hello")
});

// app.get("/books", (req, res) => {
//   return res.send("All books");
// });



app.get("/books", logger1, (req, res) => {
    return res.send(`${req.bookname}`);
})

function logger1(req, res, next) {
    req.bookname = "GameOfThrones";
    next();
}

function logger(req, res, next) {
  console.log("Fetching all books");

  next();
}

app.listen(1234, () => {
    console.log("listening on port 1234");
    
})