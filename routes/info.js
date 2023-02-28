const express=require("express");
const router=express.Router();

const about_controller=require("../controllers/info_controller");
router.get('/about',about_controller.about);

module.exports=router;