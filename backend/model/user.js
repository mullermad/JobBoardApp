
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
   
    phone_number: {
      type: String,
    },
    address: {
      type: String,
    },
    password: {
      type: String,
    },
    
    email: {
      type: String,
      unique: true,
    },
    
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

module.exports = User;
