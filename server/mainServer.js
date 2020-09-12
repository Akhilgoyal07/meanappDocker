var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var cors = require("cors");

var userRoute = require("./routes/userRoute");
var questionRoute = require("./routes/questionRoute");

const PORT = 3000;

var app=express();
var empArr = [{empId:101,empName:"Asha",salary:1001,deptId:"D1"},{empId:102,empName:"Gaurav",salary:2000,deptId:"D1"},{empId:103,empName:"Karan",salary:2000,deptId:"D2"},
{empId:104,empName:"Kishan",salary:3000,deptId:"D1"},
{empId:105,empName:"Keshav",salary:3500,deptId:"D2"},
{empId:106,empName:"Pran",salary:4000,deptId:"D3"},
{empId:107,empName:"Saurav",salary:3800,deptId:"D3"}];

app.use(express.static(path.join(__dirname,"public","dist", "onlineTest")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

app.use("/api/login", userRoute);

app.use("/api/questions",questionRoute);

app.use("/api/empkoyes", (req, res)=>{
    res.json(empArr);
})

app.listen(PORT, (err)=>{
    if(!err)
    {
        console.log(`Server is running at PORT ${PORT}`);
    }
})