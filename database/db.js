const mongoose  =  require("mongoose");



const Connection = async (USERNAME,PASSWORD) => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.jarq8po.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await  mongoose.connect(URL,{useNewUrlParser : true});
        console.log("Database connected successfully");
    }catch(error){
        console.log({status : "Error while connecting to the database", error : error});
    }
}


module.exports = Connection;