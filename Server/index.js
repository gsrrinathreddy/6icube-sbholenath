import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import authRouter from "./routes/auth.js";

const app = express();
app.use(express.json())
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.get('/',(req,res)=>{
    res.send("Get API")
})

app.use('/v1/api/auth',authRouter)

dotenv.config();
mongoose
    .connect(process.env.MONGO_URI, {

    })
    .then(() => {
        console.log("connected to DB")
    })
    .catch((error) => console.log(`${error} didn't connect`));

app.listen(5000,()=>{
    console.log("Connected to Server")
})
