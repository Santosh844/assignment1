const mongoose = require("mongoose");


const connect = () => {
  return mongoose.connect(
    "mongodb+srv://nikhil:nikhil_123@cluster0.vpgxl.mongodb.net/day5?retryWrites=true&w=majority"
  );
};

module.exports = connect;
