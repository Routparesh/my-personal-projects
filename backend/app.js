
const mongoose = require('mongoose') ;



const connectToDB = async() =>{
        try{
            const dbInstance= await mongoose.connect(process.env.MONGO_URI);
            console.log(`Connecting to database || DB host : ${dbInstance.connection.host}`)
        }catch(err){
            console.log('Error connecting');
        }
}

module.exports = connectToDB;