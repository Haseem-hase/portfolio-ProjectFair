const ApplicationMiddlewares = (req,res,next)=>{
    console.log("inside the ApplicationMiddlewares");
    next()
    
}

module.exports=ApplicationMiddlewares