import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useAuth } from '../context/AuthProvider.jsx';
import { Link } from 'react-router-dom';

function Signup() {
  const { authUser, setAuthUser } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");
  const confirmPassword = watch("confirmpassword", "");

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
      confirmpassword: data.confirmpassword,
    };

    try {
      const response = await axios.post("http://localhost:5002/user/signup", userInfo);
      if (response.data) {
        alert("Signup successful! You can now log in.");
        localStorage.setItem("messenger", JSON.stringify(response.data));
        setAuthUser(response.data);
      }
    } catch (error) {
      if (error.response) {
        alert("Error: " + error.response.data.error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-white to-indigo-600 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-5xl font-bold text-center text-violet-800 mb-6">TalkNest</h1>
        <h2 className="text-xl text-center text-gray-700 mb-3">
          Create a New <span className="text-blue-600 font-semibold">Account</span>
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-400 rounded-lg"
            {...register("fullname", { required: "Full name is required" })}
          />
          {errors.fullname && <span className="text-red-600 text-sm">{errors.fullname.message}</span>}

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-400 rounded-lg"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-400 rounded-lg"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <span className="text-red-600 text-sm">{errors.password.message}</span>}

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 border border-gray-400 rounded-lg"
            {...register("confirmpassword", {
              required: "Confirm Password is required",
              validate: (value) => value === password || "Passwords do not match"
            })}
          />
          {errors.confirmpassword && (
            <span className="text-red-600 text-sm">{errors.confirmpassword.message}</span>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-lg text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-500 hover:underline">Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
