const User = require("../models/User");
const {validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET=`${process.env.REACT_APP_JWT_SECRET}`;
const fs = require('fs');
const DIR = './';

module.exports = class UserController {
    static register = async (req, res) => {
        let success=false;
    //displaying error here...
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }
    //check whether the user with the same email exits or not 
    try{
     let user=await User.findOne({email: req.body.email})
     console.log(user)
     if(user){
        success=false
        return res.status(400).json({success:success,error:"This id already exit,Please use different email"})
     }else {

     
     const salt = bcrypt.genSaltSync(10);
     const hashpass =bcrypt.hashSync(req.body.password, salt);
     //creating new user
    user=await User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        password: hashpass,
        email: req.body.email
      })
    //   .then(user => res.json(user)).catch(err=>{console.log(err),
    //   res.json({error:"Please enter a unique value for email" ,message:err.message})}
    //   );
    const Data={
      user:{
        id:user.id
      }
    }
    var token = jwt.sign(Data, JWT_SECRET);
    // console.log(token)
    success=true;
    res.json({success:success,token:token});
  }
}
    //displaying other code or syntax error  with  using catch
     catch(error){
    console.log(error.message)
    res.status(500).send("Some error occured")
    }
}



  static login = async (req, res) => {
    let success=false;
  //displaying error here...
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }
  const {email,password}=req.body;
  try {
    let user=await User.findOne({email})
    if(!user){
      return res.status(400).json({error:"Please try to login with correct user credentials"})
    }
    const passCompare=await bcrypt.compare(password,user.password)
    if(!passCompare){
      success=false;
      return res.status(400).json({success:success, error:"Please try to login with correct user credentials"})

    }
    const payload={
      user:{
        id:user.id
      }
    }
    var token = jwt.sign(payload, JWT_SECRET);
    // console.log(token)
    success=true;
    res.json({success:success,token:token,userData:user});
  } catch(error){
    console.log(error.message)
    res.status(500).send("Internal server error occured")
    }
return success;
  }
  
  static getuser = async (req, res) => {
    try {
      // request.user is getting fetched from Middleware after token authentication
      // const user = await User.findById(req.user.id);
      const user = await User.find();
      res.json(user);
    } catch (e) {
      res.send({ message: "Error in Fetching user" });
    }
  };



  static updateuser = async (req, res) => {
    try {
      // request.user is getting fetched from Middleware after token authentication
      let {firstname,lastname,phone,avatar}=req.body;
      const newUser={};
      if(firstname){newUser.firstname=firstname;}
      if(lastname){newUser.lastname=lastname;}
      if(phone){newUser.phone=phone;}
      // let reqBody = req.body;
      //If File have then push file into reqBody then process update
      var imgUrl = '';
      if(req.file) var imgUrl = `storage/images/${req.file.filename}`;
       avatar = imgUrl;
       newUser.avatar = avatar;
      let user = await User.findById(req.user.id);
      if(!user){
        return res.status(400).json({error:"user not found"})
      }
      const memberPhotoInfo = user.avatar;
        if(memberPhotoInfo){
          fs.unlinkSync(DIR + memberPhotoInfo);
        }
      user=await User.findByIdAndUpdate(req.user.id,{$set:newUser},{new:true})
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: "Internal server error" });
      console.log(error.message)

    }
  };

static update_password = async (req, res) => {
  try {
    // request.user is getting fetched from Middleware after token authentication
    const {password}=req.body;
    const salt = bcrypt.genSaltSync(10);
    
    let user = await User.findById(req.user.id);
    const hashpass =bcrypt.hashSync(password, salt);
    if(!user){
      return res.status(400).json({error:"user not found"})
    }
    user=await User.findByIdAndUpdate(req.user.id,{$set:{password:hashpass}})
    res.json({user,message:"password updated successfully"});
  } catch (error) {
    res.send({ message: "Internal Server error" });
    console.log(error.message)

  }
};
   static update_about = async (req, res) => {
    try {
      const {about}=req.body;
      let user = await User.findById(req.user.id);
       if(!user){
         return res.status(400).json({error:"user not found"})
       }
       user=await User.findByIdAndUpdate(req.user.id,{$set:{about:about}},{new:true} )
    res.json({user,message:"About updated successfully"});
  } catch (error) {
    res.send({ message: "Internal Server error" });
    console.log(error.message)
    } 
   }

   static update_interest = async (req, res) => {
    try {
      const {interest}=req.body;
      let user = await User.findById(req.user.id);
       if(!user){
         return res.status(400).json({error:"user not found"})
       }
       user=await User.findByIdAndUpdate(req.user.id,{$set:{interest:interest}},{new:true},)
    res.json({user,message:"interest updated successfully"});
  } catch (error) {
    res.send({ message: "Internal Server error" });
    console.log(error.message)
    } 
   }

   static update_education = async (req, res) => {
    try {
      const {education}=req.body;

      let user = await User.findById(req.user.id);
       if(!user){
         return res.status(400).json({error:"user not found"})
       }
       user=await User.findByIdAndUpdate(req.user.id,{$set:{education:education}},{new:true})
    res.json({user,message:"education updated successfully"});
  } catch (error) {
    res.send({ message: "Internal Server error" });
    console.log(error.message)
    } 
   }
   static update_media= async (req, res) => {
    try {
      const {mediaLink}=req.body;
      let user = await User.findById(req.user.id);
       if(!user){
         return res.status(400).json({error:"user not found"})
       }
       user=await User.findByIdAndUpdate(req.user.id,{$set:{mediaLink:mediaLink}},{new:true})
    res.json({user,message:"media-link updated successfully"});
  } catch (error) {
    res.send({ message: "Internal Server error" });
    console.log(error.message)
    } 
   }


  }