import express from "express";
import multer, { diskStorage } from "multer";
import { createWomensFashionProduct, getAllwomensFashionProduct, getSingleWomensFashionProduct, womensFashionDeleteProduct, womensFashionUpdateProduct } from "../../controllers/all_category_controlers/womensFashion.js";
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
 
     cb(null, path.join(__dirname, '/api/public/image/womensFashion/'))


    }
 
 })


 const productMulter = multer({
   storage
 }).fields([

  {
    name : 'photo',
    maxCount : 1
  },

  {
    name : 'gallery',
    maxCount : 10
  }

 ])



// product route
router.get('/' , getAllwomensFashionProduct );
router.post('/', productMulter , createWomensFashionProduct );
router.route('/:id').get(getSingleWomensFashionProduct).delete(womensFashionDeleteProduct).put(womensFashionUpdateProduct)





// export default router
export default router;