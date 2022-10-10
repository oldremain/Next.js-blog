const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ extended: true }));
app.use("/api/article", require("./routes/article.routes"));

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
