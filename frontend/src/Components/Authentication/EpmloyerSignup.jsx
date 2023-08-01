import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
const EpmloyerSignup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    companyLocation: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    confirmEmail: "",
  });

  const [selectedSector, setSelectedSector] = useState("");
  const [errors, setErrors] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSectorChange = (e) => {
    setSelectedSector(e.target.value);
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }

    if (!formData.companyName.trim()) {
      errors.companyName = "Company name is required";
    }

    if (!formData.companyLocation.trim()) {
      errors.companyLocation = "Company location is required";
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone number must be exactly 10 digits";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (!selectedSector) {
      errors.sector = "Please select a sector";
    }

    // Validate confirm email
    if (formData.confirmEmail.trim() !== formData.email.trim()) {
      errors.confirmEmail = "Email addresses do not match";
    }

    // Validate confirm password
    if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);

    // Return true if there are no errors, false otherwise
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Phone number must be exactly 10 digits.",
      }));
      return; // Stop form submission if phone number is invalid
    }

    if (validateForm()) {
      try {
        const completeFormData = { ...formData, sector: selectedSector };
        const response = await axios.post(
          "http://localhost:5000/api/employer/signup",
          completeFormData
        );
        navigate("/");
      } catch (error) {
        console.error("Error signing up employer:", error);
        // Handle errors, display error messages, etc.
      }
    }
  };
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex justify-center min-h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-2/5"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')",
          }}
        ></div>

        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
              Get your free account now.
            </h1>

            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Let’s get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
            >
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                    errors.firstName ? "border-red-500" : "border-gray-200"
                  } rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                />
                {errors.firstName && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Snow"
                  className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                    errors.lastName ? "border-red-500" : "border-gray-200"
                  } rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                />
                {errors.lastName && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.lastName}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="companyName"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >
                  Company Name
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                    errors.companyName ? "border-red-500" : "border-gray-200"
                  } rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                />
                {errors.companyName && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.companyName}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="companyLocation"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >
                  Company Location
                </label>
                <input
                  id="companyLocation"
                  name="companyLocation"
                  type="text"
                  value={formData.companyLocation}
                  onChange={handleChange}
                  placeholder="Company Location"
                  className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                    errors.companyLocation
                      ? "border-red-500"
                      : "border-gray-200"
                  } rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                />
                {errors.companyLocation && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.companyLocation}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >
                  Phone number
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="XXX-XX-XXXX-XXX"
                  className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                    errors.phoneNumber ? "border-red-500" : "border-gray-200"
                  } rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                />
                {errors.phoneNumber && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.phoneNumber}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="sector"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >
                  Sector
                </label>
                <select
                  name="sector"
                  value={selectedSector}
                  onChange={handleSectorChange}
                  className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                    errors.sector ? "border-red-500" : "border-gray-200"
                  } rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                >
                  <option value="" disabled>
                    Select a sector
                  </option>
                  <option value="agriculture">Agriculture</option>
                  <option value="health">Health</option>
                  <option value="it">IT</option>
                  <option value="education">Education</option>
                  <option value="government">Government</option>
                  <option value="legal">Legal</option>
                </select>
                {errors.sector && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.sector}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johnsnow@example.com"
                  className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                    errors.email ? "border-red-500" : "border-gray-200"
                  } rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                />
                {errors.email && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="confirmEmail"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >
                  Confirm Email address
                </label>
                <input
                  id="confirmEmail"
                  name="confirmEmail"
                  type="email"
                  value={formData.confirmEmail}
                  onChange={handleChange}
                  placeholder="johnsnow@example.com"
                  className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                    errors.confirmEmail ? "border-red-500" : "border-gray-200"
                  } rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                />
                {errors.confirmEmail && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.confirmEmail}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                    errors.password ? "border-red-500" : "border-gray-200"
                  } rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                />
                {errors.password && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.password}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >
                  Confirm password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-200"
                  } rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                />
                {errors.confirmPassword && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                <span>Sign Up </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 rtl:-scale-x-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EpmloyerSignup;
