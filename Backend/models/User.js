const mongoose=require("mongoose")
const { Schema } = mongoose;
const UserSchema = new Schema({
    avatar: {
        type: String,
        required: false
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
   email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:false,
        unique:true
    },
   password:{
        type:String,
        required:true
    },
   date:{
        type:Date,
        default:Date.now
    }
  });
  const User=mongoose.model('user',UserSchema);
module.exports= User