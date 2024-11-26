const express = require("express");
const router = express.Router();

const Person = require('../models/Person'); 


router.post("/", async (req, res) => {
    try {
      const data = req.body; // get data from req.body
      const person = new Person(data);
      const result = await person.save();
      console.log("Data saved");
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  // Get method person
  router.get("/", async (req, res) => {
    try {
      const data = await Person.find();
      console.log("Data fetched");
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  router.get('/:workType', async (req, res) => {
    try {
      const workType = req.params.workType;
     if(workType == 'chef' || workType == 'manager'){
     const response = await Person.find({work: workType});
     console.log("Data fetched");
     res.status(200).json(response);
    }else{
      res.status(404).json({error: "Not found"})
    }
  }catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.put('/:id', async (req , res)=>{
    try{
      const peopleId = req.params.id;
      const updatePeople = req.body;
      const response = await Person.findByIdAndUpdate(peopleId, updatePeople,
         {new: true,
          runValidators:true});
          if(!response){
            return res.status(404).json({error: "Not found"})
          }
          console.log ("Data updated");
          res.status(200).json(response);
    }catch(error){
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.delete('/:id', async (req,res)=>{
    try{
      const peopleId = req.params.id;
      const responseId = await Person.findByIdAndDelete(peopleId);
      if(!responseId){
        return res.status(404).json({error: " not found"});
      }
      console.log("Data deleted");
      res.status(200).json({message:'deleted successfully'});
    }catch(error){
      console.log(error);
      res.status(500).json ({ error: 'Internal Server Error' });
    }
  })
  
  module.exports = router;