// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import userRoute from "./route/user.route.js";


// const app = express();
// dotenv.config();

// app.use(express.json());

// const PORT = process.env.PORT || 5001;
// const URI = process.env.MONGODB_URI;


// try {
//     mongoose.connect(URI);
//     console.log("MongoDB Connected");
// } catch (error) {
//     console.error("MongoDB Connection erroe",error.message);     
// }

// app.use("/user",userRoute);

// app.listen(PORT, () => {
//   console.log(`Server is Running on port ${PORT}`)
// });


import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./route/user.route.js";

const app = express();
dotenv.config();

// Middleware to parse JSON
app.use(express.json());

const PORT = process.env.PORT || 5001;
const URI = process.env.MONGODB_URI;

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(URI);  // Clean connection without deprecated options
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1); // Exit process if MongoDB connection fails
  }
};

connectDB();

// Routes
app.use("/user", userRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
