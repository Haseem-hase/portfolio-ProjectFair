const express = require('express')

const userController = require('../Controllers/userController')
const projectController=require('../Controllers/projectController')
const jwtMiddlewares = require('../Middlewares/JwtMiddleware')
const multerMiddleware = require('../Middlewares/MulterMiddleware')

const router = express.Router()

router.post('/api/register',userController.registerAPI)


router.post('/api/login',userController.loginAPI)

router.post('/api/addproject',jwtMiddlewares,multerMiddleware.single('projectImg'),projectController.addProjectAPI)

router.get('/api/alluserprojects',jwtMiddlewares,projectController.getAllUserProjectsAPI)

router.get('/api/homeprojects',projectController.getHomeProjectAPI)

router.get('/api/userprojects',jwtMiddlewares,projectController.getUserProjectsAPI)

router.put('/api/editproject/:projectId',jwtMiddlewares,multerMiddleware.single('projectImg'),projectController.editProjectAPI)

router.delete('/api/deleteproject/:projectId',jwtMiddlewares,projectController.deleteProjectAPI)

module.exports=router