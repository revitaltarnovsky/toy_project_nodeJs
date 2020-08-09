const express = require('express');
const router = express.Router();
const {toysModel,validToy} = require("../models/toys_model")

/* GET users listing. */
router.get('/', (req, res, next) => {
    let pageNum = req.query.page || 0;
    let perPage = Number(req.query.perPage) || 5;
    toysModel.find({})
    .limit(perPage)
    .skip(pageNum * perPage)
    .then(data => {
      res.json(data)
    })
});

router.get("/cat/:catId",(req,res) => {
  let catId = req.params.catId;
  let pageNum = req.query.page || 0;
  let perPage = Number(req.query.perPage) || 5;
  toysModel.find({category:catId})
  .limit(perPage)
  .skip(pageNum * perPage)
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.status(400).json(err)
  })
})

router.get("/search/",(req,res) => {
  const mySearch = new RegExp(`${req.query.s}`);
  toysModel.find({$or:[{name:mySearch},{category:mySearch}]})
  .then(data => {
    res.json(data)
  })
})

router.post("/add",async(req,res)=>{
  let dataBody = req.body;
  let toy = await validToy(dataBody);
  if(toy.error){
    res.status(400).json(toy.error.details[0])
  }
  else{
    try{
      let saveData = await toysModel.insertMany([req.body]);
      res.json(saveData[0])
      
    }
    catch{
      res.status(400).json({ message: "error insert new toy, already in data" })
    }
  }
})

router.post("/edit",async(req,res)=>{
  let dataBody = req.body;
  let toy = await validToy(dataBody);
  if(toy.error){
    res.status(400).json(toy.error.details[0])
  }
  else{
    try{
      let editData = await toysModel.updateOne({_id:req.body._id},req.body);
      res.json(editData)
      
    }
    catch{
      res.status(400).json({ message: "error can't find id" })
    }
  }
})

router.post("/del",(req,res) => {
  let delId = req.body.del
  toysModel.deleteOne({_id:delId})
  .then(data => {
    if(data.deletedCount > 0 ){
      res.json({message:"deleted",del:"ok"});
    }
    else{
      res.status(400).json({error:"error id not found"});
    }
  })
})

router.get("/prices",(req,res) => {
  let pageNum = req.query.page || 0;
  let perPage = Number(req.query.perPage) || 5;
  toysModel.find({price:{$gte:req.query.min,$lt:req.query.max}})
  .limit(perPage)
  .skip(pageNum * perPage)
  .then(data => {
    res.json(data);
  })
})


module.exports = router;
