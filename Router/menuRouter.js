const express = require("express");
const router = express.Router();

const menuItem = require("../models/menuItem");


// Post method menuItem
router.post("/", async (req, res) => {
    try {
      const data = req.body;
      const Menu = new menuItem(data);
      const result = await Menu.save();
      console.log("Data Saved");
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // Get method menuItem
  router.get("/", async (req, res) => {
    try {
      const data = await menuItem.find();
      console.log("data fetch");
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  router.get ('/:menuType', async (req , res)=>{
    try{
   const menuType = req.params.menuType
   if(menuType == 'burger' || menuType == 'pizza' || menuType == 'roll'){
    const response = await menuItem.find({name: menuType})
    console.log("Data fetched");
     res.status(200).json(response);
   }else{
    res.status(404).json({error: "Menu type not found"})
   }
   }catch(error){
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
}})



router.put('/:id', async (req,res)=>{
    try{
     const personId = req.params.id;
     const updatePersonData =req.body;
     const result = await menuItem.findByIdAndUpdate(personId,updatePersonData,
        {new:true,
         runValidators: true   
        })
         if(!result){
          return  res.status(404).json({error: "Menu item not found"})
         }
         console.log ("Data updated");
         res.status(200).json(result);

    }catch(error){
        console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
    }
})


router.delete('/:id', async (req, res) =>{
    try{
        const personId = req.params.id;
        const result = await menuItem.findByIdAndDelete(personId);
        if(!result){
            return res.status(404).json({error: " not found"})
        }
        console.log ("Data delete");
         res.status(200).json({message:'menu deleted successfully'});

    }catch(error){
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

  module.exports = router;