import path from "path";
import ErrorHandler from "../utils/ErrorHandler.js";
import DatauriParser from "datauri/parser.js";
import uploadOnCloudinary from "../utils/uploadOnCloudinary.js";
import User from "../models/user.js";

export const postSignup = async (req, res, next) => {
    const { username, password, email, name } = req.body;
    if (!username || !password || !email || !name) {
        throw new ErrorHandler(401, "Details missing, Provide all the details to signup!");
    }

    try {
        console.log(req.file);
        // const parser = new DatauriParser();
        // const data = parser.format(path.extname(req.file.originalname), req.file.buffer);
        // console.log(data)
        const response = await uploadOnCloudinary(req.file.path);
        // console.log(response);
        let newUser = await User.create({
            username: username.toLowerCase(),
            password,
            email: email.toLowerCase(),
            name: name.toLowerCase(),
            image: response.url
        })
        console.log(newUser);
        return res.status(200).json(newUser);
    } catch (error) {
        throw new ErrorHandler(500, "Error while new signup");
    }
}