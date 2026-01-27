const dbConnect = require('../_db');
const { Game } = require('../_models');
const { setCors } = require('../_utils');

module.exports = async (req, res) => {
  setCors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ message: 'Method Not Allowed' });

  await dbConnect();
  const page = parseInt(req.query.page || '0', 10);
  const games = await Game.find({}).limit(10).skip(page * 10).sort({ korname: 1 });
  res.status(200).json(games);
};
