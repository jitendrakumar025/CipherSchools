const mongoose=require("mongoose")
const { Schema } = mongoose;
const UserSchema = new Schema({
    avatar: {
        type: String,
        required: false,
        // default:
        // "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
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
    },
   password:{
        type:String,
        required:true,
        
    },
    about:{
        type:String,
        required:false,
    },
    interest:[{
        type: String
    }],
    
    education:[{question1:String, question2:String}],
    mediaLink:[{linkedin:String,github:String,twitter:String,instagram:String,website:String,facebook:String}],
   date:{
        type:Date,
        default:Date.now
    }
  });
  const User=mongoose.model('user',UserSchema);
module.exports= User