import Electronic from "../../models/all_products_category/Electronic.js";
import fs from 'fs';
import path, { resolve } from 'path';

const __dirname = resolve();





// product controller 
export const getAllElectronicProduct = async (req, res, next) => {

   try {
      
         // get all product 
         const electronic = await Electronic.find();

         res.status(200).json(electronic);

   } catch (error) {
      
       next(error)


   }



}


// create product 
 export const createElectronicProduct = async (req, res, next) => {
    
  try {
   
   let gallery = [];
   for( let i= 0; i < req.files.gallery.length; i++){
      gallery.push(req.files.gallery[i].filename)
   }

   const electronic = await Electronic.create({

      ...req.body,
      photo : req.files.photo[0].filename,
      gallery : gallery,
      

   });

   if( electronic ){

    res.status(201).json({

       msg : "Electronic Product created succsfull"

    })
   }else {

    next(createError(401, " Electronic Product create Fails"))
    
   }

  } catch (error) {
   next(error)
   
  }

}

// get single product
export const getSingleElectronicProduct = async (req, res, next) => {

   const { id } = req.params;

   try {
      
      const electronic = await Electronic.findOne({_id : id});
      res.status(200).json(electronic)


   } catch (error) {
      next(error)
   }

}

// delete product 
export const electronicDeleteProduct = async (req, res, next) => {

   const { id } = req.params;

   try {
      
      const electronic = await Electronic.findByIdAndDelete(id);
      
      fs.unlinkSync(path.join(__dirname, `api/public/image/electronic/${electronic.photo}`))

      electronic.gallery.forEach(items => {

      fs.unlinkSync(path.join(__dirname, `api/public/image/electronic/${items}`))

      });

      if( electronic ){
         res.status(200).json({
            msg : " Electronic Product delete successful"
         })
      }

   } catch (error) {
      next(createError(error))
   }

}


// update product
export const electronicUpdateProduct = async (req, res, next) => {

   const { id } = req.params;

   try {
      
   const electronic = await Electronic.findByIdAndUpdate(id, req.body);

   if(electronic){
      res.status(200).json({
         msg : "Electronic Product update successfull"
      })
   }

   } catch (error) {
      next(createError(error))
   }

}
