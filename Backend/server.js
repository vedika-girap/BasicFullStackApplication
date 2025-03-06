// const epress = require('express');
import express from "express";
import dotenv from "dotenv";
import { connectDb } from './config/db.js';
import productRoutes from "./routes/product.route.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT||5000


app.use(express.json());//allows us to accept json data in req.body (this function is called middleware fun)

app.use("/api/products",productRoutes)
//for testing this without frontend app we can use postman api for testing
// console.log(process.env.MONGO_URI);

app.listen(PORT,()=>{
    connectDb();
    console.log("Server started at http://localhost:"+PORT);
});


// OZ9Rb7xBAKT42bA8