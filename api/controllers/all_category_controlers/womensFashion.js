import WomensFashion from "../../models/all_products_category/WomensFashion.js";
import fs from 'fs';
import path, { resolve } from 'path';

const __dirname = resolve();

// product controller 
export const getAllwomensFashionProduct = async (req, res, next) => {

   try {
      
         // get all product 
         const womensFashion = await WomensFashion.find();

         res.status(200).json(womensFashion);

   } catch (error) {
      
       next(error)


   }



}


// create product 
 export const createWomensFashionProduct = async (req, res, next) => {
    
  try {
   
   let gallery = [];
   
   for( let i= 0; i < req.files.gallery.length; i++){
      gallery.push(req.files.gallery[i].filename)
   }

   const womensFashion = await WomensFashion.create({

      ...req.body,
      photo : req.files.photo[0].filename,
      gallery : gallery,
      

   });

   if( womensFashion ){

    res.status(201).json({

       msg : "Womens Fashion Product created succsfull"

    })
   }else {

    next(createError(401, " Womens Fashion Product create Fails"))
    
   }

  } catch (error) {
   next(error)
   
  }

}

// get single product
export const getSingleWomensFashionProduct = async (req, res, next) => {

   const { id } = req.params;

   try {
      
      const womensFashion = await WomensFashion.findOne({_id : id});
      res.status(200).json(womensFashion)


   } catch (error) {
      next(error)
   }

}

// delete product 
export const womensFashionDeleteProduct = async (req, res, next) => {

   const { id } = req.params;

   try {
      
      const womensFashion = await WomensFashion.findByIdAndDelete(id);

      fs.unlinkSync(path.join(__dirname, `/api/public/image/womensFashion/${womensFashion.photo}`))

      womensFashion.gallery.forEach(items => {

      fs.unlinkSync(path.join(__dirname, `/api/public/image/womensFashion/${items}`))

      });
      
      if( womensFashion ){
         res.status(200).json({
            msg : "Product delete successful"
         })
      }

   } catch (error) {
      next(createError(error))
   }

}


// update product
export const womensFashionUpdateProduct = async (req, res, next) => {

   const { id } = req.params;

   try {
      
   const womensFashion = await WomensFashion.findByIdAndUpdate(id, req.body);

   if(womensFashion){
      res.status(200).json({
         msg : "Product update successfull"
      })
   }

   } catch (error) {
      next(createError(error))
   }

}
