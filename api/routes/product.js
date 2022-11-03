import express from "express";
import multer, { diskStorage } from "multer";
import { getAllProduct, createProduct, getSingleProduct, deleteProduct, updateProduct  } from "../controllers/productController.js";
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
 
     cb(null, path.join(__dirname, '/api/public/image/product'))


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
router.get('/' , getAllProduct );
router.post('/', productMulter, createProduct );
router.route('/:id').get( getSingleProduct ).delete( deleteProduct).put(updateProduct);



// export default router
export default router;