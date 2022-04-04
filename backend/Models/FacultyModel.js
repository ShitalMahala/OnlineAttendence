const mongoose =require('mongoose')
const bcrypt = require('bcryptjs')

const facultySchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

facultySchema.pre("save", async function(next)  {
    if(!this.isModified('password')){
      next();
    }
    this.password = await bcrypt.hash(this.password,10)
})


module.exports = mongoose.model('Faculty',facultySchema)