import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname:{
        type:String, 
        required: true, 
    },
    email:{
        type:String, 
        required: true, 
        unique:true,
        lowercase:true,
    },
    password:{
        type:String, 
        required: true,
    },
    confirmpassword:{
        type:String, 
        required: true,
    },
},
  {
    timestamps: true, //created at & updated at
  }
);

const User = mongoose.model("User",userSchema);

export default User;