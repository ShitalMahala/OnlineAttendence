const mongoose = require('mongoose')

const attendenceSchema = mongoose.Schema({
    Date:{
        type:String,
        required:true
    },
    attend:[ {
        rollno:{
            type:String,
            required:true
        },
        status:{
            type:Boolean,
            required:true
        }
    } ]
})

module.exports = mongoose.model('Attendence',attendenceSchema)