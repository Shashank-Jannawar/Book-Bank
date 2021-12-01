const mongoose = require("mongoose")

let studentData = new mongoose.Schema({
    first_name:{type:String,default:null},
    last_name :{type:String,default:null},
    student_id:{type:String, default:null},
    branch_name: {type: String, default:null},
    phone: {type: String, default:null},
    email:{type:String,default:null},
    password:{type:String,default:null},
    role:{type:String,default:null}
})

module.exports = mongoose.model('studentData',studentData);