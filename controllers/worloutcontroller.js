const workOut = require('../models/workout');


const getAllWorkouts = async (req,res)=>{

    try {
        const workOuts = await workOut.find({}).sort({createdAt:-1});
        return res.status(200).json(workOuts);
    } catch (error) {
        res.status(400).json(err);
    }

    console.log("router called");
    res.json({msg:"get all workouts called"});

}

const getSingleWorkout = async (req,res)=>{

    const {id} = req.params

    try {
        const singleWorkout = await workOut.findById(id);
        return res.status(200).json(singleWorkout);


    } catch (error) {
        return res.status(400).json(err);
    }

    console.log("router called");
    res.json({msg:"get a single workout called"});

}

const postWorkout = async (req,res)=>{

    const {title , reps , load} = req.body;

    try{

        // const wo = await workOut.create({title , reps , load});
        // res.status(200).json(wo);

        const userExist = await workOut.findOne({title : title});

        if(userExist)
        {
            return res.status(200).json({"message" : "user alredy exist"});
        }

        await workOut.create({title , reps , load});

        return res.status(200).json(req.body);


    }catch(err){
        return res.status(400).json(err);
    }


    // console.log("post router called");
    // res.json({msg:"post a workout"});

}


module.exports = {getAllWorkouts,getSingleWorkout,postWorkout}
