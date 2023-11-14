import express  from "express";
import { addBook,deleteBook,showBook } from "../controllers/bookController.js";

const router=express.Router();


router.post("/add",addBook)

router.get("/show",showBook)
router.delete("/delete/:_id",deleteBook)




export default router;