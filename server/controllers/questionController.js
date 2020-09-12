var mongoClient=require("mongodb").MongoClient;

var mongodbUrl = "mongodb://db:27017/";

function getAllQuestions(req, res)
{
    mongoClient.connect(mongodbUrl, {useUnifiedTopology:true}, (err, dbHost)=>{
        if(err)
        {
            res.status(500);
            res.json({message:"Error connecting to the mongodb server"});
        }
        else
        {
            var db=dbHost.db("slDbMean");
            db.collection("questions",(err, coll)=>{
                if(err)
                {
                    res.status(500);
                    res.json({message:"Error connecting to the mongodb server"});
                }
                else
                {
                    coll.find({}).toArray((err, data)=>{
                        if(err)
                        {
                            res.status(500);
                            res.json({message:"Error connecting to the mongodb server"});
                        }
                        else
                        {
                            console.log("Result of find all questions : ",data);
                            res.json(data);
                        }
                     })
                }
            })
        }
    })
}

module.exports={getAllQuestions}