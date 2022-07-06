const express = require ('express')
const app= express()
const mongoose = require('mongoose')
const bodyParser=require('body-parser')
const path = require('path')



const testmoRouter= require('./routes/testmo.routes')

app.use(bodyParser.json())
app.use('/testmo',testmoRouter)
app.use(express.static('./dist/portfolio'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/portfolio/index.html'))
   });


























app.listen(5000,(res)=>{
    console.log('listening to port 5000');
})