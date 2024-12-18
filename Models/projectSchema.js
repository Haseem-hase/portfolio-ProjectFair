const mongoose = require('mongoose')

//schema Creation
const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    github:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    },
    overview:{
        type:String,
        required:true
    },
    projectImg:{
        type:String,
        required:true,
    },
    userId:{
            type:String,
    }
    
})


//model creation name of the model must be the name of collections in database mongodb atlas
const projects = mongoose.model('projects',projectSchema)
module.exports=projects