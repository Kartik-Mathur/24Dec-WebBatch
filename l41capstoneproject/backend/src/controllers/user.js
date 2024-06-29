import path from "path";
import ErrorHandler from "../utils/ErrorHandler.js";

export const postSignup = async (req, res, next) => {
    const { username, password, email, name } = req.body;
    if (!username || !password || !email) {
        throw new ErrorHandler(401, "Details missing, Provide all the details to signup!");
    }

    try {
        console.log(req.file);
        console.log();
        // let newUser = await User.create({
        //     username,
        //     password,
        //     email,
        //     name
        // })

        // return res.status(200).json(newUser);
    } catch (error) {
        throw new ErrorHandler(500, "Error while new signup");
    }
}