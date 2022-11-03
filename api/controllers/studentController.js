import Student from "../models/Student.js";
import bcrypt from "bcryptjs"
import createError from "./errorController.js";

/**
 * @access public
 * @route /api/student
 * @method GET
 */
 export const getAllStudents = async (req, res, next) => {
      
      try{

        const students = await Student.find();
        res.status(200).json(students)

      }catch(error){ 

        next(error);

      }
    }

/**
 * @access public
 * @route /api/student
 * @method POST
 */
 export const createStudent = async (req, res) => {
  
  // make hash pass
  const salt = await bcrypt.genSalt(10);
  const hash_pass = await bcrypt.hash(req.body.password, salt);

      try{
        const students = await Student.create({ ...req.body, password : hash_pass});
        res.status(200).json(students)
      }catch(error){
        console.log(error);
      }
    }
/**
 * @access public
 * @route /api/student/:id
 * @method GET
 */
 export const getSingleStudent = async (req, res, next) => {

  const { id } = req.params;

      try{

        const stu = await Student.findById(id);
        if(!stu){
          return next(createError(404, "Single user not found"))
        }
        if(stu){
          res.status(200).json(stu)
        }
        
      }catch(error){
        next(error);
      }
    }
/**
 * @access public
 * @route /api/student/:id
 * @method PUT/PATCH
 */
 export const updateStudent = async (req, res) => {
   
  const { id } = req.params;
    try{
      const students = await Student.findByIdAndUpdate(id, req.body, { new  : true });
      res.status(200).json(students)
    }catch(error){
      console.log(error);
    }
   }

/**
 * @access public
 * @route /api/student/:id
 * @method DELETE
 */
 export const deleteStudent = async (req, res) => {

  const { id } = req.params;
      try{
        const students = await Student.findByIdAndDelete(id, req.body);
        res.status(200).json(students)
      }catch(error){
        console.log(error);
      }
    }
