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
router.get('/getuser', UserController.getuser);
router.put('/updateuser/:id',fetchuser,fileUpload("./storage/images"), UserController.updateuser);
router.put('/update_password/:id',fetchuser,UserController.update_password);
router.put('/update_about/:id',fetchuser,UserController.update_about);
router.put('/update_interest/:id',fetchuser,UserController.update_interest);
router.put('/update_education/:id',fetchuser,UserController.update_education);
router.put('/update_media/:id',fetchuser,UserController.update_media);



module.exports=router;
