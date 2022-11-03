import express from "express";
import { createUser, deleteUser, getAllUsers, getSingleUser, updateUser, userLogin, userRegister }
 from "../controllers/userController.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { userMiddleware } from "../middlewares/userMiddleware.js";



/// init routers
const router = express.Router();


// route
router.route('/').get(adminMiddleware, getAllUsers).post(authMiddleware, createUser);
router.route('/:id').get(userMiddleware, getSingleUser).delete(userMiddleware, deleteUser).
put(userMiddleware, updateUser).patch(userMiddleware, updateUser);

// User Auth 
router.route('/login').post(userLogin)
router.route('/register').post(userRegister)



// export default router
export default router;