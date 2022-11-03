import Kid from "../../models/all_products_category/Kid.js";
import fs from 'fs';
import path, { resolve } from 'path';

const __dirname = resolve();







// product controller 
export const getAllKidProduct = async (req, res, next) => {

   try {
      
         // get all product 
         const kid = await Kid.find();

         res.status(200).json(kid);

   } catch (error) {
      
       next(error)


   }



}


// create product 
 export const createKidProduct = async (req, res, next) => {
    
  try {
   
   let gallery = [];
   for( let i= 0; i < req.files.gallery.length; i++){
      gallery.push(req.files.gallery[i].filename)
   }

   const kid = await Kid.create({

      ...req.body,
      photo : req.files.photo[0].filename,
      gallery : gallery,
      

   });


   if( kid ){

    res.status(201).json({

       msg : "Kids Product created succsfull"

    })
   }else {

    next(createError(401, " Kids Product create Fails"))
    
   }

  } catch (error) {
   next(error)
   
  }

}

// get single product
export const getSingleKidProduct = async (req, res, next) => {

   const { id } = req.params;

   try {
      
      const kid = await Kid.findOne({_id : id});
      res.status(200).json(kid)


   } catch (error) {
      next(error)
   }

}

// delete product 
export const kidDeleteProduct = async (req, res, next) => {

   const { id } = req.params;

   try {
      
      const kid = await Kid.findByIdAndDelete(id);
      
      fs.unlinkSync(path.join(__dirname, `api/public/image/kids/${kid.photo}`))

      kid.gallery.forEach(items => {

      fs.unlinkSync(path.join(__dirname, `api/public/image/kids/${items}`))

      });

      if( kid ){
         res.status(200).json({
            msg : " Kids Product delete successful"
         })
      }

   } catch (error) {
      next(createError(error))
   }

}


// update product
export const kidUpdateProduct = async (req, res, next) => {

   const { id } = req.params;

   try {
      
   const kid = await Kid.findByIdAndUpdate(id, req.body);

   if(kid){
      res.status(200).json({
         msg : "Kids Product update successfull"
      })
   }

   } catch (error) {
      next(createError(error))
   }

}
