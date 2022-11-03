import Category from "../models/Category.js";
import fs from 'fs';
import path, { resolve } from 'path';




const __dirname = resolve();



// product controller 
export const getAllCategoris = async (req, res, next) => {

   try {
      
         // get all product 
         const categories = await Category.find();

         res.status(200).json(categories);

   } catch (error) {
      
       next(error)


   }



}


// create product 
export const createCategory = async (req, res, next) => {
    
    try {
  
     const category = await Category.create({
  
        ...req.body,
        photo : req.file.filename
        
  
     });
  
     if( category ){
  
      res.status(201).json({
  
         msg : "Category Product created succsfull"
  
      })

     }else {
  
      next(createError(401, " Category Product create Fails"))
      
     }
  
    } catch (error) {
     next(error)
     
    }
  
  }

// get single product
export const getSingleCategory = async (req, res, next) => {

   const { id } = req.params;

   try {
      
      const category = await Category.findOne({_id : id});
      res.status(200).json(category)


   } catch (error) {
      next(error)
   }

}

// delete product 
export const deleteCategory = async (req, res, next) => {

   const { id } = req.params;

   try {
      
      const category = await Category.findByIdAndDelete(id);

      fs.unlinkSync(path.join(__dirname, `/api/public/image/category/${category.photo}`))

      
      if( category ){
         res.status(200).json({
            msg : "Category delete successful"
         })
      }

   } catch (error) {
      next(createError(error))
   }

}


// update product
export const updateCategory = async (req, res, next) => {

   const { id } = req.params;

   try {
      
   const category = await Category.findByIdAndUpdate(id, req.body);

   if(category){
      res.status(200).json({
         msg : "Category update successfull"
      })
   }

   } catch (error) {
      next(createError(error))
   }

}
