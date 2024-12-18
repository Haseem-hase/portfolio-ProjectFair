//import the models in this folder controller
const users = require('../Models/userSchema')
const jwt = require('jsonwebtoken')


//register logic
exports.registerAPI=async(req,res)=>{
    console.log('Inside the Register API');
    const {username,email,password}=req.body
    const exixtingUser = await users.findOne({email})
    if(exixtingUser){
        res.status(402).json({message:"User already existing..."})
    }else{
        const newUser= new users({
            username:username,
            email:email,
            password:password,
            github:"",
            linkedIn:"",
            profilePic:""
        })
        await newUser.save()
        res.status(200).json('Resgistration susseffull.....')
    }
    
}


//login logic
exports.loginAPI = async(req,res)=>{
    console.log("Inside the Login API");
    const{email,password}=req.body
    const exixtingUser1 = await users.findOne({email,password})
    try{
        if(exixtingUser1){
            const token = jwt.sign({userId:exixtingUser1._id},process.env.jwtKey)
            console.log(token);
            
            res.status(200).json({currentUser:exixtingUser1,token})
        }
        else{
            res.status(404).json("Incorrect Email or Password")
        }
    }catch(error){
        res.status(401).json(error)
    }
    
}


