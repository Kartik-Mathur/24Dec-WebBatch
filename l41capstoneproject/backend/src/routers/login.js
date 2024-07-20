import express from "express";
import { postSignup, postLogin } from "../controllers/user.js";
// import multer from "multer";
import upload from "../middlewares/multer.js";
// import datauri from "datauri";

// const upload = multer({});

const router = express.Router();
router.post('/signup', upload.single('image'), postSignup);
router.post('/login', postLogin);



export default router;