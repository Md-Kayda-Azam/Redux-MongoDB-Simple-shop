import express from "express";
import { createMansFashionProduct, getAllMansFashionProduct, getSingleMansFashionProduct, mansFashionDeleteProduct, mansFashionUpdateProduct } from "../../controllers/all_category_controlers/mansFashionControllers.js";
import multer, { diskStorage } from "multer";
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
 
     cb(null, path.join(__dirname, '/api/public/image/mansFashion/'))


    }
 
 })


 const mansFashionMulter = multer({
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
router.get('/' , getAllMansFashionProduct );
router.post('/', mansFashionMulter , createMansFashionProduct );
router.route('/:id').get(getSingleMansFashionProduct).delete(mansFashionDeleteProduct).put(mansFashionUpdateProduct)





// export default router
export default router;