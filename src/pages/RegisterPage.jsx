import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "password") {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (password) => {
    if (password.length < 6) {
      setPasswordStrength("Weak");
    } else if (/[A-Z]/.test(password) && /\d/.test(password)) {
      setPasswordStrength("Strong");
    } else {
      setPasswordStrength("Moderate");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required!";
    if (!formData.email) newErrors.email = "Email is required!";
    if (!formData.password) newErrors.password = "Password is required!";
    if (!formData.mobile) newErrors.mobile = "Mobile Number is required!";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await fetch("http://localhost:8080/api/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        let data = {};
        try {
          data = await response.json();
        } catch {
          data.message = "Unexpected error occurred.";
        }
        if (response.ok) {
          setServerMessage(data.message || "User registered successfully!");
          setTimeout(() => navigate("/login"), 2000);
        } else {
          setServerMessage(data.message || "Registration failed. Please try again.");
        }
      } catch (error) {
        console.error("Error during registration:", error);
        setServerMessage("Server not reachable. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />
        {formData.password && (
          <p
            className={`text-sm mt-1 ${
              passwordStrength === "Strong"
                ? "text-green-600"
                : passwordStrength === "Moderate"
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            Password Strength: {passwordStrength}
          </p>
        )}
        <InputField
          label="Mobile Number"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          error={errors.mobile}
        />

        <button
          type="submit"
          className={`w-full py-3 mt-4 rounded-md ${
            isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          } text-white`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>

      {serverMessage && (
        <p className="text-center mt-4 text-sm text-blue-700 font-medium">{serverMessage}</p>
      )}

      <p className="text-center mt-4">
        Already have an account?{" "}
        <a href="/login" className="text-blue-600 hover:text-blue-700">
          Login here
        </a>
      </p>
    </div>
  );
}

function InputField({ label, name, value, onChange, error, type = "text" }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-3 border border-gray-300 rounded-md"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
