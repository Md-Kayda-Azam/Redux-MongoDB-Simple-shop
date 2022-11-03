import express from "express";
import multer, { diskStorage } from "multer";
import { createHealthProduct, getAllHealthProduct, getSingleHealthProduct, healthDeleteProduct, healthUpdateProduct } from "../../controllers/all_category_controlers/healthControllers.js";
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
 
     cb(null, path.join(__dirname, '/api/public/image/healths/'))


    }
 
 })


 const healthProductMulter = multer({
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
router.get('/' , getAllHealthProduct );
router.post('/', healthProductMulter, createHealthProduct );
router.route('/:id').get(getSingleHealthProduct).delete(healthDeleteProduct).put(healthUpdateProduct)





// export default router
export default router;