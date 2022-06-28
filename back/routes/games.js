const express = require('express');
const router = express.Router();
const Game = require('../models/Game');
const multer = require('multer');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');

// const s3 = new aws.S3({
//   accessKeyId:"AKIA3TXCYHZJ4OEN2H5U",
//   secretAccessKey:"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",
//   region: 'ap-northeast-2'
// })

/* GET home page. */
router.get("/",(req,res,next)=>{ 
  // 
  //req.query => 'normal'
  console.log(' get /games 호출');
  const value = req.query.value;
  const key = req.query.key;
  console.log('req.query = > ', req.query);
  console.log('value =' , value);
  console.log('key = ' , key);
  if(key == 'difficulty'){
    Game.find({difficulty : value},{},(err,docs)=>{
      if(err) console.log(err);
      res.status(200).json({
        massage:'difficulty find',
        games:docs
      })
    })
  }
  if(key == 'player'){  //플레이어 들어옴 minp <= value && maxp >= value
    Game.find({maxplayer:{$gte:value},minplayer:{$lte:value}},{},(err,docs)=>{
      if(err) console.log(err);
      res.status(200).json({
        message:'player find',
        games:docs
      })
    })
  }
  if(key == 'genre'){
    Game.find({genre:value},{},(err,docs)=>{
      if(err) console.log(doc);
      res.status(200).json({
        message:'genre find',
        games:docs
      })
    })
  }
});

router.get('/all',(req,res,next)=>{
  // let responseData = {};
  // Game.find({},(err,rows)=>{
  Game.find({},{korname:1},(err,rows)=>{
      if(err) throw err;
      // if(rows.length) {
      //     responseData.result = 1;
      //     responseData.data = rows;}
      else{
        res.json(rows);
        console.log(rows)
      }
    //   console.log(responseData.data);
  });
})
router.post("/",async (req,res,next)=>{
  console.log(req);
  //데이터 추가;
  try {
    const games = new Game({
      korname : req.body.korname,
      engname : req.body.engname,
      minplayer : req.body.minplayer,
      maxplayer : req.body.maxplayer,
      mintime : req.body.mintime,
      maxtime : req.body.maxtime,
      gametext : req.body.gametext,
      genre : req.body.genre,
      difficulty : req.body.difficulty,
      comment : req.body.comment,
      state: req.body.state,
      click: 0
    })
    console.log("game객체 확인",games);
    const result = await games.save();
    res.status(201).json({
      message:"game add",
      korname:result.korname,
      engname:result.engname,
      maxplayer:result.maxplayer,
      minplayer:result.minplayer,
      mintime:result.mintime,
      maxtime:result.maxtime,
      gametext:result.gametext,
      genre:result.genre,
      difficulty:result.difficulty,
      comment:result.comment,
      state:result.state
    });
  }catch(err){
    console.log(err)
  }
});

router.put("/",(req,res,next)=>{
  console.log("put games호출");
  console.log('req.body:',req.body);
  let updateData = req.body;
  Game.updateOne({_id:updateData._id},{$set:updateData},(err,doc)=>{
    if(err) console.log(err);
    else {
      console.log("update:",doc);
      res.json({doc:doc})
      }
  })
  
  // console.log(game);
  // const game = req.body;
  // Game.updateOne({_id:game._id},{engname:'agricola'},(err,doc)=>{
  //   if(err) console.log(err);
  //   else console.log("doc:",doc);
  // })
})

router.delete("/",(req,res,next)=>{
  console.log(req);
  Game.deleteOne({_id:req.query._id},(err,doc)=>{
    if(err) console.log(err);
    else
      console.log(doc);
  });
})

router.get('/some',async (req,res,next)=>{
  console.log("games/some get 호출");
  const ids = req.query.ids;
  const records = await Game.find({ '_id': { $in: ids }});
  console.log(records);
  res.json(records);
})
router.get('/page',async (req,res,next)=>{
  console.log(req);
  let page = parseInt(req.query.page);
  console.log("page is",page*10,typeof(page));
  Game.find({},(err,rows)=>{
    if(err) throw err;
    // if(rows.length) {
    //     responseData.result = 1;
    //     responseData.data = rows;}
    else{
      res.json(rows);
      console.log(rows)
    }
  //   console.log(responseData.data);
  }).limit(10).skip(page*10).sort({"korname":1});
})
router.get('/one',async (req,res,next)=>{ //_id값을 통해 게임 하나 찾기
  console.log("games/one get 호출");
  const id = req.query.ids;
  const record = await Game.findOne({ '_id': id },(err,doc)=>{
    if(err) console.log(err);
    else{
      doc.click += 1;
      doc.save(( err => console.log(err)))
    }
  })
  console.log("asdfasdfasdf",record);
  res.json(record);
})

module.exports = router;