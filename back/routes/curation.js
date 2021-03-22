const express = require('express');
const router = express.Router();
const Curation = require('../models/curation');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("curation get 호출");
  let responseData = {};
  Curation.find({ },(err,rows)=>{
      if(err) throw err;
      if(rows.length) {
          responseData.result = 1;
          responseData.data = rows;
      }else{
          responseData.result = 0;
      }
      res.json(responseData);
      console.log(responseData);
  });
});

router.post('/',(req,res,next)=>{
  console.log(req.body);
  const curation = new Curation({
    detail : req.body.detail,
    games : req.body.games
  })
  console.log("curation 객체 확인",curation);
  const result = curation.save();
  res.status(201).json({
    message:"curation add",
    detail:result.detail,
    games:result.games
  })
})

module.exports = router;
