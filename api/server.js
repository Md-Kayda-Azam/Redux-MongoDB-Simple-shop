// import express from "express";
import express from "express"
import colors from "colors";
import dotenv from "dotenv";
import studentRoute from './routes/students.js';
import userRoute from './routes/users.js';
import categoryRoute from './routes/category.js';
import tagRoute from './routes/tag.js';
import brandRoute from './routes/brand.js';
import productRoute from './routes/product.js';
import womensFashionRoute from './routes/all_products_routes/womensFashion.js';
import mansFashionRoute from './routes/all_products_routes/mansFashion.js';
import healthRoute from './routes/all_products_routes/health.js';
import beautyRoute from './routes/all_products_routes/beauty.js';
import electronicRoute from './routes/all_products_routes/electronic.js';
import kidsRoute from './routes/all_products_routes/kids.js';
import mongoDBcunnect from './config/db.js'
import errorHandler from "./middlewares/errorHandler.js";
import cookieParser from "cookie-parser";
import cors from 'cors';


// init express
const app = express();
dotenv.config();



// middleware
app.use(express.json());
app.use(express.urlencoded(  {extended : false} ));
app.use(cookieParser());
// app.use(cors());

// init env variables
const PORT = process.env.SERVER_PORT || 5000;

// static
app.use( express.static('api/public'))



// routes
app.use('/api/v1/product', productRoute);
app.use('/api/v1/womensFashionProduct', womensFashionRoute);
app.use('/api/v1/mansFashionProduct', mansFashionRoute);
app.use('/api/v1/healthProduct', healthRoute);
app.use('/api/v1/beautyProduct', beautyRoute);
app.use('/api/v1/electronicProduct', electronicRoute);
app.use('/api/v1/kidsProduct', kidsRoute);
app.use('/api/v1/category', categoryRoute);
app.use('/api/v1/tags', tagRoute);
app.use('/api/v1/brands', brandRoute);
app.use('/api/student', studentRoute);
app.use('/api/user', userRoute);




// express error handler
app.use( errorHandler );

// listen server
app.listen(PORT, () => {
mongoDBcunnect();
  console.log(`server running port ${PORT}`.bgGreen.black);
})