const express = require('express');
const router = express.Router();
const Student = require('./StudentSchema');


//POST method
router.post('/',async(req,res) => {
    try{
        const postStudent =await new Student({
            Name : req.body.Name,
            Age : req.body.Age
        });
        const saveStudent =await postStudent.save();
        res.status(200).json(saveStudent);
    }catch(err){
        res.json({"err": err});
    } 
});

//GET  method
router.get('/',async(req,res) => {
    try{
      const getAll =await Student.find();
        res.status(200).json(getAll);
    }catch(err){
        res.json({"err": err});
    } 
});

//BY id
router.get('/:id',async(req,res) => {
    try{
      const getbyID =await Student.findById(req.params.id);
        res.status(200).json(getbyID);
    }catch(err){
        res.json({"err": err});
    } 
});

//UPDATE method
router.put('/update',async(req,res) => {
    try{
        const updStu =await Student.update({_id:req.body._id},{$set:{
            Name:req.body.Name,
            Age: req.body.Age}});
        res.status(200).json(updStu);
    }catch(err){
        res.json({"err": err});
    } 
     
});
//DELETE methodrouter.put('/:id',async(req,res) => {
router.delete('/delete/:id',async(req,res) => {
    try{
        const delStu =await Student.remove({_id:req.params.id});
        res.status(200).json(delStu);
    }catch(err){
        res.json({"err": err});
    } 
});
module.exports = router;