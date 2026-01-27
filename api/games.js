const dbConnect = require('./_db');
const { Game } = require('./_models');
const { parseBody, setCors } = require('./_utils');

module.exports = async (req, res) => {
  setCors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  await dbConnect();

  const { key, value, _id } = req.query;

  if (req.method === 'GET') {
    if (key === 'difficulty') {
      const games = await Game.find({ difficulty: value });
      return res.status(200).json({ massage: 'difficulty find', games });
    }
    if (key === 'player') {
      const v = Number(value);
      const games = await Game.find({ maxplayer: { $gte: v }, minplayer: { $lte: v } });
      return res.status(200).json({ message: 'player find', games });
    }
    if (key === 'genre') {
      const games = await Game.find({ genre: value });
      return res.status(200).json({ message: 'genre find', games });
    }
    const games = await Game.find({});
    return res.status(200).json(games);
  }

  if (req.method === 'POST') {
    const body = parseBody(req);
    const game = new Game({
      korname: body.korname,
      engname: body.engname,
      minplayer: body.minplayer,
      maxplayer: body.maxplayer,
      mintime: body.mintime,
      maxtime: body.maxtime,
      gametext: body.gametext,
      genre: body.genre,
      difficulty: body.difficulty,
      comment: body.comment,
      state: body.state,
      click: 0,
    });
    const result = await game.save();
    return res.status(201).json({
      message: 'game add',
      korname: result.korname,
      engname: result.engname,
      maxplayer: result.maxplayer,
      minplayer: result.minplayer,
      mintime: result.mintime,
      maxtime: result.maxtime,
      gametext: result.gametext,
      genre: result.genre,
      difficulty: result.difficulty,
      comment: result.comment,
      state: result.state,
    });
  }

  if (req.method === 'PUT') {
    const body = parseBody(req);
    if (!body._id) return res.status(400).json({ message: 'missing _id' });
    const result = await Game.updateOne({ _id: body._id }, { $set: body });
    return res.status(200).json({ doc: result });
  }

  if (req.method === 'DELETE') {
    const id = _id || req.query.id;
    if (!id) return res.status(400).json({ message: 'missing _id' });
    const result = await Game.deleteOne({ _id: id });
    return res.status(200).json({ doc: result });
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
};
