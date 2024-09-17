import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./route/userRoute.js";


const app = express();
app.use(bodyParser.json());
dotenv.config();
app.use(cors());

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGO_URL ;


mongoose.connect(URL).then(() => {
    console.log("Databse connted sucessfully");
    app.listen(PORT, ()=> {
        console.log(`Server is running on port : ${PORT}`);
        
    })
    
}).catch((error) => console.log(error)
)


app.use("/api", route)