const mongoose = require('mongoose')

//schema Creation
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    github:{
        type:String
    },
    linkedIn:{
        type:String
    },
    profilePic:{
        type:String
    }
})


//model creation name of the model must be the name of collections in database mongodb atlas
const users = mongoose.model('users',userSchema)
module.exports=users