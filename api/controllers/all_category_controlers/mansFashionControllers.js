import MansFashion from "../../models/all_products_category/MansFashion.js";

import fs from 'fs';
import path, { resolve } from 'path';

const __dirname = resolve();



// product controller 
export const getAllMansFashionProduct = async (req, res, next) => {

   try {
      
         // get all product 
         const mansFashion = await MansFashion.find();

         res.status(200).json(mansFashion);

   } catch (error) {
      
       next(error)


   }



}


// create product 
 export const createMansFashionProduct = async (req, res, next) => {
    
  try {
   
   let gallery = [];
   for( let i= 0; i < req.files.gallery.length; i++){
      gallery.push(req.files.gallery[i].filename)
   }

   const mansFashion = await MansFashion.create({

      ...req.body,
      photo : req.files.photo[0].filename,
      gallery : gallery,
      

   });

   if( mansFashion ){

    res.status(201).json({

       msg : "MansFashion Product created succsfull"

    })
   }else {

    next(createError(401, " MansFashion Product create Fails"))
    
   }

  } catch (error) {
   next(error)
   
  }

}

// get single product
export const getSingleMansFashionProduct = async (req, res, next) => {

   const { id } = req.params;

   try {
      
      const mansFashion = await MansFashion.findOne({_id : id});
      res.status(200).json(mansFashion)


   } catch (error) {
      next(error)
   }

}

// delete product 
export const mansFashionDeleteProduct = async (req, res, next) => {

   const { id } = req.params;

   try {
      
      const mansFashion = await MansFashion.findByIdAndDelete(id);
      
      fs.unlinkSync(path.join(__dirname, `api/public/image/mansFashion/${mansFashion.photo}`))

      mansFashion.gallery.forEach(items => {

      fs.unlinkSync(path.join(__dirname, `api/public/image/mansFashion/${items}`))

      });



      if( mansFashion ){
         res.status(200).json({
            msg : " MansFashion Product delete successful"
         })
      }

   } catch (error) {
      next(createError(error))
   }

}


// update product
export const mansFashionUpdateProduct = async (req, res, next) => {

   const { id } = req.params;

   try {
      
   const mansFashion = await MansFashion.findByIdAndUpdate(id, req.body);

   if(mansFashion){
      res.status(200).json({
         msg : "MansFashion Product update successfull"
      })
   }

   } catch (error) {
      next(createError(error))
   }

}
