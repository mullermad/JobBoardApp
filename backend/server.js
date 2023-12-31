const express = require("express");

require("dotenv").config();
const cors = require("cors");
const connectToDB = require("./config/db_config");
const userRouter = require("./Router/UserRouter");
const employerRouter = require("./Router/EmployerRouter");
const app = express();

//for database connection
connectToDB();
//middleware
app.use(cors());
app.use(express.json());
app.use("/api/user/", userRouter);
app.use("/api/employer/", employerRouter);
// routes

//server listen

app.listen(5000, () => {
  console.log(`server is running on port : 5000`);
});

module.exports = app;
