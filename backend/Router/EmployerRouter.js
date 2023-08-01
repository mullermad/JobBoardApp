const express = require("express");
const employerRouter = express.Router();
const employerController = require("../controller/EmployerController");

employerRouter.post("/signup", employerController.signup);

employerRouter.post("/login", employerController.login);

employerRouter.post("/logout", employerController.logout);

employerRouter.get("/", employerController.getAllEmployers);

employerRouter.get("/:id", employerController.getEmployerById);

employerRouter.put("/:id", employerController.updateEmployer);

employerRouter.delete("/:id", employerController.deleteEmployer);

module.exports = employerRouter;
