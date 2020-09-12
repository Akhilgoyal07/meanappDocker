var mongoClient=require("mongodb").MongoClient;

var mongodbUrl = "mongodb://db:27017/";

function checkUser(req, res)
{
    mongoClient.connect(mongodbUrl, (err, dbHost)=>{
        if(err)
        {
            res.status(200);
            console.log("not connected to the server in user controller");
            res.json({message: "Not able to connect to the server"});
        }
        else
        {
            var db=dbHost.db("slDbMean");
            db.collection("users", (err, coll)=>{
                if(err)
                {
                    res.status(201);
                    res.json({message: "Not able to connect to the collection"});
                }
                else
                {
                    var userToBeChecked = req.body;
                    coll.findOne({userName:userToBeChecked.userName, 
                        password:userToBeChecked.password}, (err, result)=>{
                            if(err)
                            {
                                res.status(202);
                                res.json({message:err});
                            }
                            else
                            {
                                if(result)
                                {
                                    res.status(200);
                                    res.json({message:true});
                                }
                                else
                                {
                                    res.status(201);
                                    res.json({message:false});
                                }
                            }
                        })
                }
            })
        }
    })
}

module.exports = {checkUser};