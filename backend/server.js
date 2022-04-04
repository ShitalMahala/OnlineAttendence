const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser  = require('cookie-parser')

mongoose.connect("mongodb+srv://Shital2:ShitalMahala01@cluster0.wpsmx.mongodb.net/OnlineAttendence?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(data => {
    console.log('MongoDB Connected')
})


app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))

const Student = require('./Routes/StudentRoutes')
const faculty = require('./Routes/FacultyRoutes')
const attendence = require('./Routes/AttendenceRoutes')

app.use('/attendence',attendence)
app.use('/faculty',faculty)
app.use('/student',Student)


app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(12345, ()=>{
    console.log('listening to the port 12345')
})


//Shital
// Shital@maala01