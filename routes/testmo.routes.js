const express = require('express')
const router = express.Router();
const testmonial= require('../src/model/testmonial')
const mongoose=require('mongoose')



router.post('/api/',async(req,res)=>{
    console.log('body',req.body);
    try{

        const testmo=new testmonial({

            person:req.body.person,
            role:req.body.role,
            message:req.body.message,
            image:req.body.image
        })

        await testmo.save()

        res.json({

            success:1,
            message:'testmonial successfuly saved'

        })

    }
    catch(err){
        res.json({
            success:1,
            message:'error occuured while saving'+err
        })

    }
})


router.get('/api/',async(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE")
    try{
        let allTest=await testmonial.find();
        res.json({
            success:1,
            message:'testimonial listed succesfuly',
            item:allTest
        })
    }
    catch(err){
        res.json({
        success:0,
        message:'error occured while testing'+err
        })
    }
})


router.get('/api/:id',async(req,res)=>{
    let id=req.params.id
    console.log({id})
    let validId=mongoose.Types.ObjectId.isValid(id)
    if(validId){
        try{
            let singleTesti=await testmonial.findById({_id:id})
            res.json({
                            success:1,
                            message:'single testimonial listed',
                            item:singleTesti
                        })

        }
        catch(err){
            res.json({
                            success:0,
                            message:'error occured while listing single testimonial'+err
                    })
        }

    }else{
        res.json({
                    success:0,
                    message:'invalid id'
                })

    }
})

router.put('/api/:id',async (req,res)=>{
    let id=req.params.id

    let validId=mongoose.Types.ObjectId.isValid(id)
    if(validId){
        try{
                await testmonial.findByIdAndUpdate({_id:id},{
                    $set:{
                        person:req.body.person,
                        role:req.body.role,
                        message:req.body.message,
                        image:req.body.image
                    }
                })
                res.json({
                    success:1,
                    message:'testimonial updated successfuly'
                })
        }
        catch(err){
            res.json({
                success:0,
                message:'error occured while updating'+err
            })


        }
    }

})


router.delete('/api/:id',async (req,res)=>{
    let id=req.params.id

    let validId=mongoose.Types.ObjectId.isValid(id)
    if (validId){
        try{
            await testmonial.deleteOne({_id:id})
            res.json({
                success:1,
                message:'testimonial deleted sccesssfully'
            })
        }
        catch(err){

            res.json({
                success:0,
                message:'error occured while deleting'+err
            })

        }
    }
})

module.exports=router