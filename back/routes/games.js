const express = require('express');
const router = express.Router();
const Game = require('../models/Game')
/* GET home page. */
router.get("/",(req,res,next)=>{ //전체 그룹 가져오기
  let responseData = {};
  Game.find({},(err,rows)=>{
      if(err) throw err;
      if(rows.length) {
          responseData.result = 1;
          responseData.data = rows;
      }else{
          responseData.result = 0;
      }
      res.json(responseData.data);
    //   console.log(responseData.data);
  });
});

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
      comment : req.body.comment
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
      comment:result.comment
    });
  }catch(err){
    console.log(err)
  }
});

router.put("/",(req,res,next)=>{
  console.log("put games호출");
  console.log(req);
  let game = req.body;
  Game.findByIdAndUpdate(game._id,{$set:{game}},(err,doc)=>{
    if(err) console.log(err);
    else console.log("update:",doc);
  })
  console.log(game);
})

router.delete("/",(req,res,next)=>{
  Game.deleteOne({_id:req.query._id});
})

router.get('/some',async (req,res,next)=>{
    console.log("games/some get 호출");
    const ids = req.query.ids;
    const records = await Game.find({ '_id': { $in: ids } });
    console.log(records);
    res.json(records);
})
module.exports = router;