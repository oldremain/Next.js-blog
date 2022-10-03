const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

const CONNECTION_STR =
  "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.pimymjy.mongodb.net/articles?retryWrites=true&w=majority";

async function start() {
  try {
    await mongoose.connect(CONNECTION_STR, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true,
      //useFindAndModify: true,
    });

    app.listen(PORT, function () {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

start();
