import Product from "../models/Product.js";
import fs from 'fs';
import path, { resolve } from 'path';




const __dirname = resolve();

// product controller 
export const getAllProduct = async (req, res, next) => {

   try {
      
         // get all product 
         const product = await Product.find();

         res.status(200).json(product);

   } catch (error) {
      
       next(error)


   }



}


// create product 
 export const createProduct = async (req, res, next) => {
    
  try {
   
       let gallery = [];
     for( let i= 0; i < req.files.gallery.length; i++){
        gallery.push(req.files.gallery[i].filename)
     }
  
     const product = await Product.create({
  
        ...req.body,
        photo : req.files.photo[0].filename,
        gallery : gallery,
        
  
     });
  
   if( product ){

    res.status(200).json({

       msg : "Product created succsfull",
       product 

    })
   }else {

    next(createError(401, "Product create Fails"))
    
   }

  } catch (error) {
   next(error)
   
  }

}

// get single product
export const getSingleProduct = async (req, res, next) => {

   const { id } = req.params;

   try {
      
      const product = await Product.findOne({_id : id});
      res.status(200).json(product)


   } catch (error) {
      next(error)
   }

}

// delete product 
export const deleteProduct = async (req, res, next) => {

   const { id } = req.params;

   try {
      
      const product = await Product.findByIdAndDelete(id);

      fs.unlinkSync(path.join(__dirname, `api/public/image/product/${product.photo}`))

      product.gallery.forEach(items => {

      fs.unlinkSync(path.join(__dirname, `api/public/image/product/${items}`))
         
      });

      
      if( product ){
         res.status(200).json({
            msg : "Product delete successful"
         })
      }

   } catch (error) {
      next(createError(error))
   }

}


// update product
export const updateProduct = async (req, res, next) => {

   const { id } = req.params;

   try {
      
   const product = await Product.findByIdAndUpdate(id, req.body);

   if(product){
      res.status(200).json({
         msg : "Product update successfull"
      })
   }

   } catch (error) {
      next(createError(error))
   }

}
