import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userID, res) => {
    const token = jwt.sign({userID}, process.env.JWT_SECRET, {
        expiresIn:"15d",
    });

    res.cookie("jwt",token, {
        maxAge:  15 * 24 * 60 * 60 * 1000,//it should be in millisecond format
        httpOnly: true, //It prevent XSS attacks cross-site scripting attacks
        sameSite:"strict", //CSRF attacks cross site request forgecy attacks
        secure: process.env.NODE_ENV !== "development",
    });
};

export default generateTokenAndSetCookie;