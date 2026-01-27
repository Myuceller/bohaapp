const dbConnect = require('../_db');
const { Game } = require('../_models');
const { setCors } = require('../_utils');

module.exports = async (req, res) => {
  setCors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ message: 'Method Not Allowed' });

  await dbConnect();
  const games = await Game.find({}, { korname: 1 });
  res.status(200).json(games);
};
