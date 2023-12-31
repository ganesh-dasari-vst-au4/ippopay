const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    }
  },
  { collection: "users" }
);

const Users = mongoose.model("Users", userSchema);

module.exports = Users;