const mongoose = require('mongoose')
const uri = process.env.MONGODB_URI;

mongoose.connect(uri)
.then((res)=>{
    console.log('database connected successfuly');
}).catch((err)=>{
    console.log('an error occured'+err);
})

const testmoSchema = new mongoose.Schema({

    person:String,
    role:String,
    message:String,
    image:String
})

const testModel =mongoose.model('test',testmoSchema)

module.exports=testModel
