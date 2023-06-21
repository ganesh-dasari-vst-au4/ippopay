const mongoose = require("mongoose");

const mongo_url =
  "mongodb+srv://root:partypanda@cluster0-vmkir.mongodb.net/ippopay";

mongoose.connect(
  mongo_url,
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "database connection error: "));
db.once("open", function () {
  console.log("Database connected successfully");
});

module.exports = mongoose;