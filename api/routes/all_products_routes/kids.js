import express from "express";
import { createKidProduct, getAllKidProduct, getSingleKidProduct, kidDeleteProduct, kidUpdateProduct } from "../../controllers/all_category_controlers/kidsControllers.js";
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
 
     cb(null, path.join(__dirname, '/api/public/image/kids/'))


    }
 
 })


 const kidsMulter = multer({
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
router.get('/' , getAllKidProduct );
router.post('/', kidsMulter , createKidProduct );
router.route('/:id').get(getSingleKidProduct).delete(kidDeleteProduct).put(kidUpdateProduct)





// export default router
export default router;