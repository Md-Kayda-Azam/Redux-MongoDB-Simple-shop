import express from "express";
import multer, { diskStorage } from "multer";
import { createCategory, deleteCategory, getAllCategoris, getSingleCategory, updateCategory } from "../controllers/categoryControllers.js";
import path, { resolve } from 'path';




/// init routers
const router = express.Router();
const __dirname = resolve();

// product photo upload
const storage = diskStorage({

    filename : (req, file, cb) => {
 
     cb(null, Date.now() +"_"+ file.originalname)
 
    },
    destination : (req, file, cb) => {
 
     cb(null, path.join(__dirname, '/api/public/image/category'))


    }
 
 })


 const categoryMulter = multer({
   storage
 }).single('photo');


// route
router.route('/').get( getAllCategoris).post(categoryMulter, createCategory);
router.route('/:id').get( getSingleCategory).delete( deleteCategory).
put( updateCategory);





// export default router
export default router;