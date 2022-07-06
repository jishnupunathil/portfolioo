const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://jishnu:uesHTxFngUxdbieB@cluster0.myxbs.mongodb.net/testmonial_db?retryWrites=true&w=majority')
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