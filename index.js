import express from "express";
import cors from "cors";              // cors is to set rules of communication between the frontend and the backend
// import mongoose from 'mongoose';
import connectDB from "./db/dbconfig.js";
import dotenv from 'dotenv';
dotenv.config();

import { userRouter } from './src/routes/users.js';
import { recipesRouter } from './src/routes/recipes.js';


const app = express();

const port = process.env.PORT || 5000;

connectDB();

app.use(cors({
  orgin:"https://aesthetic-baklava-656fc5.netlify.app"
}))


app.use(express.json());


app.get("/",function(req,res){
  res.send("Hello Guys Please Welcome 💐🎉🎊")
})

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);





app.listen(port, () => console.log(`Server running at port ${port}`));