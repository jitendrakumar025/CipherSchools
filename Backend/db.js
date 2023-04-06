const mongoose=require("mongoose");
const mongoURI=process.env.REACT_APP_MONGO_URI
// const mongoURI="mongodb+srv://root:root022@cluster0.rq55vdi.mongodb.net/inotebook"
const connectToMongo=()=>{
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(mongoURI, { useNewUrlParser: true },()=>{
            console.log("Connected To Mongo Successfully")})
        
    } catch (error) {
        console.log(error)
    }
}



module.exports=connectToMongo; 