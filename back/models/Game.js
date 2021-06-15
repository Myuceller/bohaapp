const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  korname: {
    type:String
  },
  engname: {
    type:String
  },
  minplayer: {
    type:Number
  },
  maxplayer: {
    type:Number
  },
  mintime: {
    type:Number
  },
  maxtime: {
    type:Number
  },
  gametext: {
    type:String
  },
  state:{
    type:String
  },
  genre:[{
    type:String
  }],
  difficulty:{
    type:String
  },
  comment:{
    type:String
  }
});

module.exports = mongoose.model('Game',gameSchema);