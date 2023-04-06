const express= require("express");
const UserController = require("../controllers/UserController");
const router=express.Router();
const fetchuser=require("../middleware/UserAuth")
const fileUpload = require('../middleware/Uploader');

router.get("/",(req,res)=>{
    res.send("Hello from auth")
})
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/getuser',fetchuser, UserController.getuser);
router.put('/updateuser/:id',fetchuser,fileUpload("./storage/images"), UserController.updateuser);
router.put('/update_password/:id',fetchuser,UserController.update_password);



module.exports=router;
