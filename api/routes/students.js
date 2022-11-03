import express from "express";
import { createStudent, deleteStudent, getAllStudents, getSingleStudent, updateStudent } 
from "../controllers/studentController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { userMiddleware } from "../middlewares/userMiddleware.js";


/// init routers
const router = express.Router();


// route
router.route('/').get(authMiddleware, getAllStudents).post(authMiddleware, createStudent);
router.route('/:id').get(userMiddleware, getSingleStudent).delete(userMiddleware, deleteStudent).
put(userMiddleware, updateStudent).patch(userMiddleware, updateStudent);





// export default router
export default router;