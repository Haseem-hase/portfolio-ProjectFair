const projects = require('../Models/projectSchema')

exports.addProjectAPI = async(req,res)=>{
    console.log("Inside the AddProjectAPI");

    const{title,language,github,website,overview}=req.body
    const projectImg = req.file.filename //from mutlter middleware
    const userId = req.payload //from jwt middleware

    try{
        const project = await projects.findOne({github})
        if(project){
            res.status(401).json("Project already existing")
        }else{
            const newProject = new projects({title,language,github,website,overview,projectImg,userId})
            await newProject.save()
            res.status(200).json(newProject)
        }
    }catch(error){
        res.status(406).json(error)
    }
    
}

exports.getHomeProjectAPI = async(req,res)=>{
    try{
        const allProjects= await projects.find().limit(3)
        res.status(200).json(allProjects)
    }catch(err){
        res.status(406).json(err)
    }


}

exports.getAllUserProjectsAPI= async(req,res)=>{
    const searchKey =  req.query.search
    console.log(searchKey);

    const query = {
        title:{
            $regex:searchKey,
            $options:"i"
        }
    }
    

    try{
        const allProjects= await projects.find(query)
        res.status(200).json(allProjects)
    }catch(err){
        res.status(406).json(err)
    }

}

exports.getUserProjectsAPI= async(req,res)=>{

    const userId = req.payload

    try{
        const userProjects = await projects.find({userId})
        res.status(200).json(userProjects)

    }catch(err){
        res.status(404).json(err)
    }
}

exports.editProjectAPI = async(req,res)=>{
    console.log("Inside the EditProjectAPI");

    const{title,language,github,website,overview,projectImg}=req.body
    const updateImg = req.file? req.file.filename : projectImg //from mutlter middleware
    const userId = req.payload //from jwt middleware
    const {projectId}= req.params
    console.log(projectImg);
    

    try{
  console.log("Inside Try");

  const project = await projects.findByIdAndUpdate(
    {_id:projectId},
    {
        title:title,
        language:language,
        github:github,
        website:website,
        overview:overview,
        projectImg:projectImg
    }
  )
  await project.save()
  res.status(200).json(project)
  
    }catch(error){
        res.status(406).json(error)
    }
    
}


exports.deleteProjectAPI=async(req,res)=>{
    console.log("Inside Delete API");
    const{projectId}=req.params
    console.log(projectId);

    try{
        const project = await projects.findByIdAndDelete({_id:projectId})
        res.status(200).json(project)

    }catch(err){
        res.status(406).json(err)

    }
    
    
}