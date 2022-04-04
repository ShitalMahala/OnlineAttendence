const Student = require('../Models/StudentModel')
const catchAsyncError = require('../utils/catchAsyncErrors')


exports.createStudent = async(req,res) => {
    const student = await Student.create(req.body)
    res.status(201).json({success:true,student})
}

exports.allstudents = async(erq,res)=>{
    const students = await Student.find()
    res.status(201).json({success:true,students})
}
