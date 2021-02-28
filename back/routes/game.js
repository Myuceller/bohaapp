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
      console.log(responseData.data);
  });
});


module.exports = router;
