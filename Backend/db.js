const mongoose=require("mongoose");
const mongoURI=`${process.env.REACT_APP_MONGO_URI}`;
const connectToMongo= ()=>{
    try {
         mongoose.set('strictQuery', false);
         mongoose.connect(mongoURI,()=>{
            console.log("Connected To Mongo Successfully")})
    } catch (error) {
        console.log(error)
    }
}



module.exports=connectToMongo; 