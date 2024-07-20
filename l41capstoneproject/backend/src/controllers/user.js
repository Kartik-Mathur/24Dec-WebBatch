import ErrorHandler from "../utils/ErrorHandler.js";
import uploadOnCloudinary from "../utils/uploadOnCloudinary.js";
import User from "../models/user.js";
import { responseHandler } from "../utils/responseHandler.js";
import bcrypt from "bcrypt";

const generateAccessTokenAndRefereshToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = await user.generateAccessToken();
        const refreshToken = await user.generateRefreshToken();
        user.refreshToken = refreshToken;
        // user.accessToken = accessToken;

        await user.save();

        return { accessToken, refreshToken };

    } catch (err) {
        throw new ApiError(500, "Something went wrong while generating refresh and access token");
    }
}

export const postSignup = responseHandler(async (req, res, next) => {
    const requiredFields = ["username", "password", "email", "name"];
    const bodyFields = Object.keys(req.body);
    const missingFields = requiredFields.filter((field) => !bodyFields.includes(field));

    const { username, password, email, name } = req.body;
    if (missingFields.length > 0) {
        throw new ErrorHandler(401, `Details missing, provide ${missingFields.join(',')} to signup!`);
    }

    // Check if the user is already present or not
    const existingUser = await User.findOne({
        $or: [
            { username },
            { email }
        ]
    });
    console.log(existingUser)
    if (existingUser) {
        throw new ErrorHandler(401, "User already exists, try with another username or email!");
    }

    // If user isn't present create the user now
    try {
        console.log(req.file);
        // const parser = new DatauriParser();
        // const data = parser.format(path.extname(req.file.originalname), req.file.buffer);
        // console.log(data)
        const response = await uploadOnCloudinary(req.file.path);

        let newUser = await User.create({
            username: username.toLowerCase(),
            password,
            email: email.toLowerCase(),
            name: name.toLowerCase(),
            image: response.url
        })

        return res.status(200).json(newUser);
    } catch (error) {
        console.log(error)
        throw new ErrorHandler(500, "Error while new signup");
    }
})



export const postLogin = responseHandler(async (req, res, next) => {
    const { username, password, email } = req.body;
    try {
        let existingUser = await User.findOne({
            $or: [
                { username },
                { email }
            ]
        });

        if (!existingUser) {
            throw new ErrorHandler(400, "Please provide correct username or email");
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);

        if (!isMatch) {
            throw new ErrorHandler(400, "Incorrect password");
        }

        const { accessToken, refreshToken } = await generateAccessTokenAndRefereshToken(existingUser._id);
        // console.log(refreshToken);
        // console.log(accessToken);
        const options = {
            httpOnly: true
        }

        let user = await User.findOne({
            _id: existingUser._id
        }).select("-refreshToken -password")

        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, options)
            .json({
                user,
                message: "Successfully Logged In"
            })

    } catch (error) {
        throw new ErrorHandler(500, "Not able to login right now!");
    }
})


