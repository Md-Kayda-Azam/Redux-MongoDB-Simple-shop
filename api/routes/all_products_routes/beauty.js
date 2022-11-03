import express from "express";
import { beautyDeleteProduct, beautyUpdateProduct, createBeautyProduct, getAllBeautyProduct, getSingleBeautyProduct } from "../../controllers/all_category_controlers/beautyControllers.js";
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
 
     cb(null, path.join(__dirname, '/api/public/image/beauties/'))


    }
 
 })


 const beautyProductMulter = multer({
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
router.get('/' , getAllBeautyProduct );
router.post('/', beautyProductMulter , createBeautyProduct );
router.route('/:id').get(getSingleBeautyProduct).delete(beautyDeleteProduct).put(beautyUpdateProduct)





// export default router
export default router;