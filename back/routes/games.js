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

router.get('/some',async (req,res,next)=>{
    console.log("games/some get 호출");
    const ids = req.query.ids;
    const records = await Game.find({ '_id': { $in: ids } });
    console.log(records);
    res.json(records);
})
module.exports = router;