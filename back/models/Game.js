const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  KorName: {
    type:String
  },
  EngName: {
    type:String
  },
  minPlayer: {
    type:Number
  },
  maxPlayer: {
    type:Number
  },
  minTime: {
    type:Number
  },
  maxTime: {
    type:Number
  },
  gametext: {
    type:String
  }
});

module.exports = mongoose.model('Game',gameSchema);