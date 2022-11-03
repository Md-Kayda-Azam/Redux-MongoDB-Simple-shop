import express from "express";
import multer, { diskStorage } from "multer";
import path, { resolve } from 'path';
import { createBrand, deleteBrand, getAllBrands, getSingleBrand, updateBrand } from "../controllers/brandController.js";




/// init routers
const router = express.Router();
const __dirname = resolve();

// product photo upload
const storage = diskStorage({

    filename : (req, file, cb) => {
 
     cb(null, Date.now() +"_"+ file.originalname)
 
    },
    destination : (req, file, cb) => {
 
     cb(null, path.join(__dirname, '/api/public/image/brand'))


    }
 
 })


 const brandMulter = multer({
   storage
 }).single('photo');


// route
router.route('/').get( getAllBrands).post(brandMulter, createBrand);
router.route('/:id').get( getSingleBrand).delete( deleteBrand).
put( updateBrand);





// export default router
export default router;