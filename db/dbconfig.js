// const mongoose = require("mongoose");
// const MONGODB_URI = process.env.MONGODB_URI;
// mongoose.connect(
//   MONGODB_URI,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Mongo DB connected successfully!");
//     }
//   }
// );

import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.MONGODB_URI) 
        console.log('Mongo connected')
    } catch(error) {
        console.log(error)
        process.exit()
    }
}

export default connectDB;