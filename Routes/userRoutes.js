const { getAllusers } = require("../Controllers/usersController");

const router=require("express").Router();
router.get('/allusers/:id',getAllusers)
module.exports=router;