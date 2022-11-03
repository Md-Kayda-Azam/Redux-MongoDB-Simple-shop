import Brand from "../models/Brand.js";
import fs from 'fs';
import path, { resolve } from 'path';




const __dirname = resolve();



// product controller 
export const getAllBrands = async (req, res, next) => {

   try {
      
         // get all product 
         const brands = await Brand.find();

         res.status(200).json(brands);

   } catch (error) {
      
       next(error)


   }



}


// create product 
export const createBrand = async (req, res, next) => {
    
    try {
  
     const brand = await Brand.create({
  
        ...req.body,
        photo : req.file.filename
        
  
     });
  
     if( brand ){
  
      res.status(201).json({
  
         msg : "Brand Product created succsfull"
  
      })

     }else {
  
      next(createError(401, " Brand Product create Fails"))
      
     }
  
    } catch (error) {
     next(error)
     
    }
  
  }

// get single product
export const getSingleBrand = async (req, res, next) => {

   const { id } = req.params;

   try {
      
      const brand = await Brand.findOne({_id : id});
      res.status(200).json(brand)


   } catch (error) {
      next(error)
   }

}

// delete product 
export const deleteBrand = async (req, res, next) => {

   const { id } = req.params;

   try {
      
      const brand = await Brand.findByIdAndDelete(id);

      fs.unlinkSync(path.join(__dirname, `/api/public/image/brand/${brand.photo}`))

      
      if( brand ){
         res.status(200).json({
            msg : "Brand delete successful"
         })
      }

   } catch (error) {
      next(createError(error))
   }

}


// update product
export const updateBrand = async (req, res, next) => {

   const { id } = req.params;

   try {
      
   const brand = await Brand.findByIdAndUpdate(id, req.body);

   if(brand){
      res.status(200).json({
         msg : "Brand update successfull"
      })
   }

   } catch (error) {
      next(createError(error))
   }

}
