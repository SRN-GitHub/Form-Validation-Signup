const mongoose = require('mongoose')


let connectToMongoDb = (url)=>{
    mongoose.connect(url)
}

module.exports= connectToMongoDb;
