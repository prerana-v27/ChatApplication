import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createTokenAndSaveCookie from "../jwt/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password, confirmpassword} = req.body;
        if(password !== confirmpassword){
            return res.status(400).json({message: "Password do not match"});
        }
        const existinguser = await User.findOne({email})
        if(existinguser){
            return res.status(400).json({message: "User with this email already exists."})
        }


    //Hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            fullname,
            email,
            password:hashedPassword,
            confirmpassword : hashedPassword,
        });
        await newUser.save();
        if(newUser){
            createTokenAndSaveCookie(newUser._id,res);
            return res.status(201).json({message: "User Registered Successfully !", newUser})
        }
         
            
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Server error"});    
    }
};




export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: "Invalid email or password" });
        }

        // Compare entered password with stored hash
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Custom function to generate token and set cookie
        createTokenAndSaveCookie(user._id, res);

        return res.status(200).json({
            message: "User Logged in Successfully!",
            user: {
                _id: user._id,
                name: user.fullname, // assuming your schema uses fullname
                email: user.email,
            },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};


export const logout = async(req,res)=>{
    try {
        res.clearCookie('jwt');
        res.status(500).json({message:"User logged out successfully"});
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
        
    }
}


