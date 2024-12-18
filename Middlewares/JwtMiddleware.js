const jwt = require('jsonwebtoken')

const jwtMiddlewares = (req,res,next)=>{
    console.log("inside the jwtMiddlewares");
    try{
        const token = req.headers['authorization'].slice(7)
        console.log(token);
       
        //token verify ?
        jwtTokenVerification = jwt.verify(token,process.env.jwtKey)
        console.log(jwtTokenVerification);
        req.payload = jwtTokenVerification.userId 
        next()
        
        

    }catch(error){
        res.status(401).json('please login')
        console.log(error);
        
        
    }
    
}

module.exports=jwtMiddlewares
