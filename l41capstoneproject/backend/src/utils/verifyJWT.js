import jwt from "jsonwebtoken";
import ErrorHandler from "./ErrorHandler.js";
import { responseHandler } from "./responseHandler.js";
import User from "../models/user.js";

export const verifyJWT = responseHandler(async function (req, res, next) {
    const incomingAccessToken = req.cookies.accessToken;
    const incomingRefreshToken = req.cookies.refreshToken;
    
    if (!incomingAccessToken && !incomingRefreshToken) {
        throw new ErrorHandler(401, "You are not logged in");
    }

    try {
        const decoded = jwt.verify(incomingAccessToken, process.env.ACCESS_TOKEN_KEY);
        req.user = decoded;
        let user = await User.findOne({
            _id: decoded.userId,
        });
        if (!user || incomingRefreshToken !== user.refreshToken) {
            throw new ErrorHandler(401, "User not found, invalid token!");
        }

        next();
    } catch (error) {
        throw new ErrorHandler(401, "Invalid token");
    }
})