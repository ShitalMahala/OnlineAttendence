const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({

    enrollmentNumber:{
        type:Number,
        required:true
    },

    name:{
        type:String,
        required:true
    },

    Course: {
        type:String,
        required:true
    },

    Semester:{
        type:Number,
        required:true
    }

})

module.exports = mongoose.model('Student',studentSchema)

