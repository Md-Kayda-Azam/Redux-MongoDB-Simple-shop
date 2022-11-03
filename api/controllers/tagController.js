import Tag from "../models/Tag.js";


// product controller 
export const getAllTags = async (req, res, next) => {

   try {
      
         // get all product 
         const tags = await Tag.find();

         res.status(200).json(tags);

   } catch (error) {
      
       next(error)


   }

}


// create product 
 export const createTag = async (req, res, next) => {
    
  try {
  
     const tag = await Tag.create(req.body);
  
   if( tag ){

    res.status(200).json({

       msg : "Tag created succsfull",

    })
   }else {

    next(createError(401, "Tag create Fails"))
    
   }

  } catch (error) {
   next(error)
   
  }

}

// get single product
export const getSingleTag = async (req, res, next) => {

   const { id } = req.params;

   try {
      
      const tags = await Tag.findOne({_id : id});
      res.status(200).json(tags)


   } catch (error) {
      next(error)
   }

}

// delete product 
export const deleteTag = async (req, res, next) => {

   const { id } = req.params;

   try {
      
      const tag = await Tag.findByIdAndDelete(id);

      
      if( tag ){
         res.status(200).json({
            msg : "Product delete successful"
         })
      }

   } catch (error) {
      next(createError(error))
   }

}


// update product
export const updateTag = async (req, res, next) => {

   const { id } = req.params;

   try {
      
   const tag = await Tag.findByIdAndUpdate(id, req.body);

   if(tag){
      res.status(200).json({
         msg : "Product update successfull"
      })
   }

   } catch (error) {
      next(createError(error))
   }

}
