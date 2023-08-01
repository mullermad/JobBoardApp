const Employer = require("../model/EmployerModel");

exports.signup = (req, res) => {
  const {
    firstName,
    lastName,
    companyName,
    companyLocation,
    phoneNumber,
    sector,
    email,
    password,
  } = req.body;

  // Check if email or phone number already exists
  Employer.findOne({ email })
    .then((existingEmailEmployer) => {
      if (existingEmailEmployer) {
        return res.status(409).json({ error: "Email already exists" });
      }

      Employer.findOne({ phoneNumber })
        .then((existingPhoneEmployer) => {
          if (existingPhoneEmployer) {
            return res
              .status(409)
              .json({ error: "Phone number already exists" });
          }

          const newEmployer = new Employer({
            firstName,
            lastName,
            companyName,
            companyLocation,
            phoneNumber,
            sector,
            email,
            password,
          });

          newEmployer
            .save()
            .then((result) => {
              res
                .status(201)
                .json({ message: "Employer created successfully", result });
            })
            .catch((err) => {
              console.error("Error creating employer:", err);
              res.status(500).json({ error: "Server error create" });
            });
        })
        .catch((err) => {
          console.error("Error finding employer by phone number:", err);
          res.status(500).json({ error: "Server error signup" });
        });
    })
    .catch((err) => {
      console.error("Error finding employer by email:", err);
      res.status(500).json({ error: "Server error signup" });
    });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  Employer.findOne({ email })
    .then((employer) => {
      if (!employer) {
        res.status(404).json({ error: "Employer not found" });
      } else {
        if (employer.password === password) {
          // You can add authentication logic here and generate a JWT token
          // For simplicity, let's assume authentication is successful
          res.status(200).json({ message: "Login successful" });
        } else {
          res.status(401).json({ error: "Invalid credentials" });
        }
      }
    })
    .catch((err) => {
      console.error("Error finding employer:", err);
      res.status(500).json({ error: "Server error login" });
    });
};

exports.logout = (req, res) => {
  res.json({ message: "Logout successful" });
};

exports.getAllEmployers = (req, res) => {
  Employer.find()
    .then((employers) => {
      res.status(200).json(employers);
    })
    .catch((err) => {
      console.error("Error fetching employers:", err);
      res.status(500).json({ error: "Server error all" });
    });
};

exports.getEmployerById = (req, res) => {
  const id = req.params.id;

  Employer.findById(id)
    .then((employer) => {
      if (!employer) {
        res.status(404).json({ error: "Employer not found" });
      } else {
        res.status(200).json(employer);
      }
    })
    .catch((err) => {
      console.error("Error finding employer:", err);
      res.status(500).json({ error: "Server error one" });
    });
};

exports.updateEmployer = (req, res) => {
  const id = req.params.id;
  const updateData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    companyName: req.body.companyName,
    companyLocation: req.body.companyLocation,
    phoneNumber: req.body.phoneNumber,
    sector: req.body.sector,
    email: req.body.email,
    password: req.body.password,
  };

  Employer.findByIdAndUpdate(id, updateData, { new: true })
    .then((employer) => {
      if (!employer) {
        res.status(404).json({ error: "Employer not found" });
      } else {
        res
          .status(200)
          .json({ message: "Employer updated successfully", employer });
      }
    })
    .catch((err) => {
      console.error("Error updating employer:", err);
      res.status(500).json({ error: "Server error update" });
    });
};

exports.deleteEmployer = (req, res) => {
  const id = req.params.id;

  Employer.findByIdAndRemove(id)
    .then((employer) => {
      if (!employer) {
        res.status(404).json({ error: "Employer not found" });
      } else {
        res
          .status(200)
          .json({ message: "Employer deleted successfully", employer });
      }
    })
    .catch((err) => {
      console.error("Error deleting employer:", err);
      res.status(500).json({ error: "Server error delete" });
    });
};
