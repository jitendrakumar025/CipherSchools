const mongoose=require("mongoose");
// const mongoURI="mongodb://localhost:27017/chipherschools"
const mongoURI="mongodb+srv://root:root022@clustercipher.o1wz3kb.mongodb.net/user"
// const mongoURI="mongodb+srv://root:root022@cluster0.rq55vdi.mongodb.net/inotebook"
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