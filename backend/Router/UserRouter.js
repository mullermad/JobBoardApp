const express = require("express");
const {
  createUser, loginController,
  
} = require("../controller/UserController");
const userRouter = express.Router();


userRouter.post("/signup", createUser);

userRouter.post("/login", loginController);

module.exports = userRouter;
