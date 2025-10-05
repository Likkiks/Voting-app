const express = require('express');
const router = express.Router();
const personModel = require("./../Models/person");


router.post('/',async (req,res)=>{
    try{
        const newperson = new personModel(req.body);
        const savedperson = await newperson.save();
        console.log('Saved to DB:', savedperson);
        res.status(200).json(savedperson);
    }
    catch(err){
        res.status(400).json({error: err.message});
    }
 });

 router.get('/', async (req, res) => {
  const data = await personModel.find();
  res.status(200).json(data);
});

router.get('/:work', async(req,res)=>{
    try{
        const worktype = req.params.work;
        if(worktype == 'shef' || worktype == 'waiter'|| worktype=='owner'){
            const data = await personModel.find({work:worktype});
            console.log(data);
            res.status(200).json(data);
        }
        res.status(404).json({error: 'Work Type not present'});
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
});

router.put('/:id', async (req,res)=>{
    try{
        const person_id = req.params.id;
        const updatedrecord = req.body;
        
        const reponse = await personModel.findByIdAndUpdate(person_id,updatedrecord,{  
            new: true,
            runValidators: true
        }); //for delete also same change findByIdAndRemove function

        if(!reponse){
            res.status(404).json({error: 'Id not found'});
        }
        console.log('data updated');
        res.status(200).json(reponse);

    }
    catch(err){
        res.status(500).json({error: err.message});
    }
});


module.exports = router;