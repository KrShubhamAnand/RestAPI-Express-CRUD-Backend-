const express = require('express');
const router = new express.Router();
const TeamRank = require('../models/teamRank');

//to post the data :-
router.post('/rank',async(req,res) => {
    try{
       const addTeamData = new TeamRank(req.body);
       console.log(req.body);
       const insertData = await addTeamData.save();
       res.status(201).send(insertData);
    }catch(err){
       res.status(400).send(err);
    }
})

//to get the data :-
router.get('/rank',async(req,res) => {
    try{
       const getData = await TeamRank.find().sort({"rank":1});
       res.status(201).send(getData);
    }catch(err){
       res.status(400).send(err);
    }
})

//to get data individually :-
router.get('/rank/:id',async(req,res) => {
    try{
        const _id = req.params.id;
       const getDataIndv = await TeamRank.findById(_id);
       res.status(201).send(getDataIndv);
    }catch(err){
       res.status(400).send(err);
    }
})

//to patch data :-
router.patch('/rank/:id',async(req,res) => {
    try{
        const _id = req.params.id;
       const patchData = await TeamRank.findByIdAndUpdate(_id,req.body,{new:true});
       res.send(patchData);
    }catch(err){
       res.status(400).send(err);
    }
})

//to delete data:- 
router.delete('/rank/:id',async(req,res) => {
    try{
        const _id = req.params.id;
       const deleteData = await TeamRank.findByIdAndDelete(_id);
       res.send(deleteDataData);
    }catch(err){
       res.status(400).send(err);
    }
})

module.exports = router;