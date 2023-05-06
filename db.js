const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://mynk:mynk9163@cluster0.vgewlgq.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongoose");
    })
};

module.exports = connectToMongo;