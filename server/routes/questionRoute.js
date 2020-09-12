var express = require("express");
var router = express.Router();

var questionController=require("../controllers/questionController");

router.get("/", questionController.getAllQuestions);

module.exports=router;