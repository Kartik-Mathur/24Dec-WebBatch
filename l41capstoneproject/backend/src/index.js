import mongoose from "mongoose";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import loginRouter from './routers/login.js';
import restaurantRouter from "./routers/admin.js";
import { verifyJWT } from "./utils/verifyJWT.js";
import userRouter from "./routers/user.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors({
    origin: process.env.CORS_ORIGINS,
    credentials: true
}))
app.use(bodyParser.json({ limit: "4kb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "4kb" }));
app.use(express.static('public')); // To store the information that front end might provide

app.use(cookieParser());


app.use('/', loginRouter);
app.use('/restaurant', verifyJWT, restaurantRouter);
app.use('/app', verifyJWT, userRouter);


mongoose.connect(`${process.env.DB_PATH}/${process.env.DB_NAME}`)
    .then(() => {
        app.listen(PORT, () => {
            console.log("http://localhost:" + PORT);
        })
    })
    .catch(err => {
        console.log(err);
    })