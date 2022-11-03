import Beauty from "../../models/all_products_category/Beauty.js";
import fs from 'fs';
import path, { resolve } from 'path';

const __dirname = resolve();



// product controller 
export const getAllBeautyProduct = async (req, res, next) => {

   try {
      
         // get all product 
         const beauty = await Beauty.find();

         res.status(200).json(beauty);

   } catch (error) {
      
       next(error)


   }



}


// create product 
 export const createBeautyProduct = async (req, res, next) => {
    
  try {
   
         let gallery = [];
         for( let i= 0; i < req.files.gallery.length; i++){
            gallery.push(req.files.gallery[i].filename)
         }

         const beauty = await Beauty.create({

            ...req.body,
            photo : req.files.photo[0].filename,
            gallery : gallery,
            

         });

         if( beauty ){

         res.status(201).json({

            msg : "Beauty Product created succsfull"

         })
         }else {

         next(createError(401, " Beauty Product create Fails"))
         
         }

  } catch (error) {
   next(error)
   
  }

}

// get single product
export const getSingleBeautyProduct = async (req, res, next) => {

   const { id } = req.params;

   try {
      
      const beauty = await Beauty.findOne({_id : id});
      res.status(200).json(beauty)


   } catch (error) {
      next(error)
   }

}

// delete product 
export const beautyDeleteProduct = async (req, res, next) => {

   const { id } = req.params;

   try {
      
      const beauty = await Beauty.findByIdAndDelete(id);

      fs.unlinkSync(path.join(__dirname, `api/public/image/beauties/${beauty.photo}`))

      beauty.gallery.forEach(items => {

      fs.unlinkSync(path.join(__dirname, `api/public/image/beauties/${items}`))
         
      });
      if( beauty ){
         res.status(200).json({
            msg : " Health Product delete successful"
         })
      }

   } catch (error) {
      next(createError(error))
   }

}


// update product
export const beautyUpdateProduct = async (req, res, next) => {

   const { id } = req.params;

   try {
      
   const beauty = await Beauty.findByIdAndUpdate(id, req.body);

   if(beauty){
      res.status(200).json({
         msg : "Health Product update successfull"
      })
   }

   } catch (error) {
      next(createError(error))
   }

}
