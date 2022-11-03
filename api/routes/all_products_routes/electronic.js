import express from "express";
import { createElectronicProduct, electronicDeleteProduct, electronicUpdateProduct, getAllElectronicProduct, getSingleElectronicProduct } from "../../controllers/all_category_controlers/electronicControllers.js";
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
 
     cb(null, path.join(__dirname, '/api/public/image/electronic/'))


    }
 
 })


 const electronicMulter = multer({
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
router.get('/' , getAllElectronicProduct );
router.post('/', electronicMulter , createElectronicProduct );
router.route('/:id').get(getSingleElectronicProduct).delete(electronicDeleteProduct).put(electronicUpdateProduct)





// export default router
export default router;