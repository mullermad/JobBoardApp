const express = require("express");

require("dotenv").config();
const cors = require("cors");
const connectToDB = require("./config/db_config");
const userRouter = require("./Router/UserRouter");
const app = express();

//for database connection
connectToDB();
//middleware
app.use(cors());
app.use(express.json());
app.use("/api/user/", userRouter);
// app.use("/api/v1/groups", equbGroupRouter);
// app.use("/api/v1/types", equbTypeRouter);
// app.use("/api/v1/payment", paymentRouter);

// routes


//server listen

app.listen(5000, () => {
  console.log(`server is running on port : 5000`);
});

module.exports = app;
