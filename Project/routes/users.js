const express = require('express') 
const router=express.Router()

// import controller
const controller = require("../Controllers/users");

//Routes
//get
router.get('/users',controller.list)

//post
router.post('/users',controller.add)

//delete
router.delete("/users/:id", controller.delete);

module.exports=router