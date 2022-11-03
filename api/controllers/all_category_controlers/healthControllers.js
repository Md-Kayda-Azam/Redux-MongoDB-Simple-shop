import Health from "../../models/all_products_category/Health.js";
import fs from 'fs';
import path, { resolve } from 'path';




const __dirname = resolve();


// product controller 
export const getAllHealthProduct = async (req, res, next) => {

   try {
      
         // get all product 
         const health = await Health.find();

         res.status(200).json(health);

   } catch (error) {
      
       next(error)


   }



}


// create product 
 export const createHealthProduct = async (req, res, next) => {
    
  try {
   
   let gallery = [];
   for( let i= 0; i < req.files.gallery.length; i++){
      gallery.push(req.files.gallery[i].filename)
   }

   const health = await Health.create({

      ...req.body,
      photo : req.files.photo[0].filename,
      gallery : gallery,
      

   });


   if( health ){

    res.status(201).json({

       msg : "Health Product created succsfull"

    })
   }else {

    next(createError(401, " Health Product create Fails"))
    
   }

  } catch (error) {
   next(error)
   
  }

}

// get single product
export const getSingleHealthProduct = async (req, res, next) => {

   const { id } = req.params;

   try {
      
      const health = await Health.findOne({_id : id});
      res.status(200).json(health)


   } catch (error) {
      next(error)
   }

}

// delete product 
export const healthDeleteProduct = async (req, res, next) => {

   const { id } = req.params;

   try {
      
      const health = await Health.findByIdAndDelete(id);
      
      fs.unlinkSync(path.join(__dirname, `api/public/image/healths/${health.photo}`))

      health.gallery.forEach(items => {

          fs.unlinkSync(path.join(__dirname, `api/public/image/healths/${items}`))
         
      });

      if( health ){
         res.status(200).json({
            msg : " Health Product delete successful"
         })
      }

   } catch (error) {
      next(createError(error))
   }

}


// update product
export const healthUpdateProduct = async (req, res, next) => {

   const { id } = req.params;

   try {
      
   const health = await Health.findByIdAndUpdate(id, req.body);

   if(health){
      res.status(200).json({
         msg : "Health Product update successfull"
      })
   }

   } catch (error) {
      next(createError(error))
   }

}
