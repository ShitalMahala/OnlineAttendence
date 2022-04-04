const Attendence = require('../Models/AttendenceModel')
const ErrorHandler  = require('../utils/ErrorHandler')

exports.create = async(req,res)=>{
    const {Date} = req.body
    const attendence = await Attendence.create({
        Date,
        attend:[]
    })
    res.status(200).json({success:true,attendence})
}

exports.addAttendence = async(req,res)=>{
    const {Date,rollno, status}  = req.body
    Attendence.findOne({Date}).then(attendence => {
        const toAdd = {
            rollno:rollno,
            status:status
        }
        attendence.attend.unshift(toAdd)
        attendence.save().then(attendence => res.json(attendence))
    })
}

exports.getallattendence = async(req,res)=>{
    const attendences = await Attendence.find()
    res.status(201).json({success:true,attendences})
}
