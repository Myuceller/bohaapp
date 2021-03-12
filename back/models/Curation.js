const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const curationSchema = new Schema({
  detail: {
    type:String
  },
  games: [{
    type:String
  }]
});

module.exports = mongoose.model('Curation',curationSchema);