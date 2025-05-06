import jwt from "jsonwebtoken"

const createTokenAndSaveCookie = (userId, res) =>{
    const token = jwt.sign({userId},process.env.JWT_TOKEN,{
        expiresIn: "10d",
    });
    res.cookie("jwt", token,{
        httpOnly: true, //xss (safe from) 
        secure: true,
        sameSite: "strict", //csrf (safe from)
    });

};

export default createTokenAndSaveCookie;