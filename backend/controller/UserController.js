const User = require("../model/user");
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs");

// Create user
const createUser = async (req, res) => {
   console.log('am inside controller');
  const { name, email, phone, password, address } = req.body;
  console.log('req.body is :',req.body)

  try {
    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });
    console.log('email,',email)
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
const hashedPassword = await bcrypt.hash(password, 10);
    // Create new user
    const newUser = new User({
      name,
      email,
      phone,
      password: hashedPassword,
      address,
    });

    // Save user to the database
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
   console.log("saved to database")
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const loginController = async function (req, res) {
  const { email, password } = req.body;

  try {
    // Find the user based on the phone number
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare the password with the hashed password
    const isPasswordValid = await comparePasswords(password, user.password);

    // Check if the password is correct
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Generate a JWT token
    
    const token = jwt.sign({ userId: user._id, email }, "jobboard", {
      expiresIn: "1m",
    });

    // Send the token in the response
    res.status(200).json({ user_id: user._id, token });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while logging in" });
  }
};

const comparePasswords = async (password, hashedPassword) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    throw error;
  }
};
module.exports = {
  createUser,
  loginController,
};
