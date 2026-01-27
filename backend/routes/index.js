const express = require('express');
const router = express.Router();
const filepath = '/thumbnail/azul.jpeg'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(path.join(__dirname + '/public/index.html'));
});

// router.get('/img',(req,res,next)=>{
//   res.sendFile(filepath);
//   console.log(req);
//   console.log(res);
// })
module.exports = router;
