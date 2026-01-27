const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  korname: { type: String },
  engname: { type: String },
  minplayer: { type: Number },
  maxplayer: { type: Number },
  mintime: { type: Number },
  maxtime: { type: Number },
  gametext: { type: String },
  state: { type: String },
  genre: [{ type: String }],
  difficulty: { type: String },
  comment: { type: String },
  click: { type: Number },
  tag: { type: String },
  hasThumbnail: { type: String },
});

const curationSchema = new mongoose.Schema({
  detail: { type: String },
  games: [{ type: String }],
});

const Game = mongoose.models.Game || mongoose.model('Game', gameSchema);
const Curation = mongoose.models.Curation || mongoose.model('Curation', curationSchema);

module.exports = { Game, Curation };
