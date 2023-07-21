
import { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'


function UserSignup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    phoneError: "",
    passwordError: "",
  });

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^\d{10}$/;
    return phoneNumberRegex.test(phoneNumber);
  };

  const validatePassword = (password) => {
    return password.length > 6;
  };

  function handleSubmit(event) {
    event.preventDefault();
    const { name, email, phone, password, address } = formData;
    if (!validatePhoneNumber(phone)) {
      setFormData({
        ...formData,
        phoneError: "Phone number must be a 10-digit.",
      });
      return;
    } else {
      setFormData({
        ...formData,
        phoneError: "",
      });
    }
    if (!validatePassword(password)) {
      setFormData({
        ...formData,
        passwordError: "Password must be greater than 6 characters.",
      });
      return;
    } else {
      setFormData({
        ...formData,
        passwordError: "",
      });
    }
    axios
      .post("http://localhost:5000/api/user/signup", {
        name,
        email,
        phone,
        password,
        address,
      })
      .then((response) => {
        console.log(response.data);
        setFormData({
          name: "",
          email: "",
          phone: "",
          password: "",
          address: "",
          phoneError: "",
          passwordError: "",
        });
      })
      .catch((error) => {
        console.error(error.message);
        // Handle error response here
      });
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(event) =>
              setFormData({ ...formData, name: event.target.value })
            }
            className="border rounded-lg px-3 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
            className="border rounded-lg px-3 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
            Phone
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(event) =>
              setFormData({ ...formData, phone: event.target.value })
            }
            className="border rounded-lg px-3 py-2 w-full"
            required
          />
          {formData.phoneError && (
            <p className="text-red-500 text-sm">{formData.phoneError}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(event) =>
              setFormData({ ...formData, password: event.target.value })
            }
            className="border rounded-lg px-3 py-2 w-full"
            required
          />
          {formData.passwordError && (
            <p className="text-red-500 text-sm">{formData.passwordError}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-gray-700 font-bold mb-2"
          >
            Address
          </label>
          <input
            id="address"
            name="address"
            value={formData.address}
            onChange={(event) =>
              setFormData({ ...formData, address: event.target.value })
            }
            className="border rounded-lg px-3 py-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
        >
          Submit
        </button>
        <div className="ml-28">
          <span>Have an account?</span>
          <Link to="/login" className="text-blue-500 ml-2">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default UserSignup;