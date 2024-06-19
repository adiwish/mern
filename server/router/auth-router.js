const express=require("express");
const router=express.Router();

const {home,register}=require("../controllers/auth-controller");
router.route("/").get(home);
router.route("/register").get(register);

// router.route("/register").get((req,res)=>{
//     res.send("inside routeri");
// });

module.exports=router;