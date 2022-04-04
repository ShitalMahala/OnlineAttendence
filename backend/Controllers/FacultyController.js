const Faculty = require('../Models/FacultyModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'kacvljavwcyavcjavc'
const JWT_EXPIRE = '5d'
const COOKIE_EXPIRE = 5
const ErrorHandler  = require('../utils/ErrorHandler')

exports.register  =  async(req,res) => {

    const {name,password,branch} = req.body

    const faculty = await Faculty.create({
        name,
        branch,
        password
    })

    const token = jwt.sign(
        {id:faculty.id},
        JWT_SECRET,
        {expiresIn:JWT_EXPIRE}
    )

    const options = {
        expires : new Date(Date.now() + COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly : true
    }

    res.status(201).cookie('token',token,options).json({
        success:true,
        faculty
    })

}




exports.login = async(req,res,next)=> {

    const {name,password} = req.body    
    
    if(!name || !password) {
        return next(new ErrorHandler("Please Enter name and Password",400))
    }
    
    const faculty = await Faculty.findOne({name})

    if(!faculty) {
        return next(new ErrorHandler("invalid email or password",400))
    }


    const isMatch = await bcrypt.compare(password,faculty.password)

    if(!isMatch) {
        return next(new ErrorHandler("invalid email or ppassword",400))
    }


    const token = jwt.sign(
        {id:faculty.id},
        JWT_SECRET,
        {expiresIn:JWT_EXPIRE}
    )
    const options = {
        expires : new Date(Date.now() + COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly : true
    }
    res.status(201).cookie('token',token,options).json({
        success:true,
        faculty
    })

  

}   


exports.logout = async(req,res) => {
    res.cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })
        res.status(200).json({
        success:true,
        message: "logged out is successfull"
    })
}


exports.all = async(req,res) => {
    const faculties = await Faculty.find()
    res.status(201).json({success:true,faculties})
}