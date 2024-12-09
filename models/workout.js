const mongoose = require('mongoose');

const schema = mongoose.Schema;

const workoutSchema = new schema({
    title:{
        type:String,
        require:true
    },
    reps:{
        type:Number,
        require:true
    },
    load:{
        type:Number,
        require:true
    }
},{timestamps:true})

const workOut = mongoose.model("workout",workoutSchema);

module.exports = workOut;