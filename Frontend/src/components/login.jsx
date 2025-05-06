import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios';

function Login() {
  const {
    register,
    handleSubmit,  
    formState: { errors },
  } = useForm();


  const handleFormSubmit = (data) => {
    console.log("Form submitted with data:",data);
    const userInfo = {
        
        email: data.email,
        password: data.password,
        
    };
    axios
    .post("http://localhost:5002/user/login",userInfo)
    .then((response) =>{
        console.log("Login Response:",response.data);
        if(response.data){
          alert("Login successful!")
        }

        localStorage.setItem("messenger", JSON.stringify( response.data));
      })
    .catch((error) => {
      console.error("Login error:", error);
      if(error.response){
        alert("Error:" + error.response.data.message);
      }else{
        alert("An unknown error occured.");
      }
      
      });
    // console.log(userInfo);
    //  All form values will now show here correctly
  };



  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-white  to-indigo-600 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
          <h1 className="text-5xl font-bold text-center text-violet-800 mb-6">
            TalkNest
          </h1>
          <h2 className="text-xl font-sans text-center text-gray-700 mb-3">Login To Your <span className='text-blue-600 font-semibold'>Account</span></h2>
          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6 w-99">
            <div>
            <input
              type="email"
              
              placeholder="Email Address"
              
              className="w-full p-3 border border-gray-400 rounded-lg bg-white text-black autofill:bg-gray-300 autofill:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
              required
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-600 text-sm">{errors.password.message}</span>}
            </div>

            <div>
            <input
              type="password"
              
              placeholder="Password"
              
              className="w-full p-3 border border-gray-400 rounded-lg bg-white text-black autofill:bg-gray-300 autofill:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
              required
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-red-600 text-sm">{errors.password.message}</span>}
            
            </div>


            <button
              type="submit"
              className="w-full py-2 mt-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              Login
            </button>
          </form>
          <p className="text-center text-lg text-gray-600 mt-4">
            Don't  have an account?{" "} <Link to ="/signup" className="text-indigo-500 hover:underline">{" "}Sign up here</Link>
          </p>
        </div>
      </div>
    );
  }

export default Login
