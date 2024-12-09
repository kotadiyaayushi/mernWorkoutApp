const express = require('express');

const router = express.Router();

const workOut = require('../models/workout');

const {getAllWorkouts,getSingleWorkout,postWorkout} = require('../controllers/worloutcontroller');
const { default: mongoose } = require('mongoose');


router.route("/").get(getAllWorkouts)
router.route("/:id").get(getSingleWorkout)


router.route("/").post(postWorkout)


router.route("/:id").delete(async (req,res)=>{

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:"id does not exist"})
    }

    try {
        const deleteWorkout = await workOut.findOneAndDelete({_id:id})

        if(!deleteWorkout)
        {
                return res.status(404).json({error:"there is not workout exist"});
        }
        

        
    } catch (error) {
        res.status(404).json(error);
        
    }

    console.log("router called");
    res.json({msg:"delete workouts"});

})
router.route("/:id").patch(async (req,res)=>{

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:"id does not exist"})
    }

    try {

        
        const a = await workOut.findOneAndUpdate({_id:id},{...req.body})
        

        
    } catch (error) {
        res.status(404).json(error);
        
    }


    console.log("router called");
    res.json({msg:"update workout"});

})

module.exports = router;