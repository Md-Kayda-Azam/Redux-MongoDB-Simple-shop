import express from "express";
import { createTag, deleteTag, getAllTags, getSingleTag, updateTag } from "../controllers/tagController.js";






/// init routers
const router = express.Router();



// route
router.route('/').get( getAllTags).post( createTag);
router.route('/:id').get( getSingleTag).delete( deleteTag).put( updateTag);





// export default router
export default router;