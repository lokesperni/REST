var mongoose = require("mongoose")

async function connectToDatabase(){
    try{
        await mongoose.connect(process.env.url)
        console.log("connected to the database");
        
    }catch(error){
        console.log("error",error);
        
    }
}
module.exports = connectToDatabase 