const express=require("express");
const router=express.Router();

const userController=require("../controllers/user_controller");

router.get("/profile",userController.profile);
router.get("/sign_in",userController.signIn);
router.get("/sign_up",userController.signUp);

module.exports=router;