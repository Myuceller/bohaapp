const dbConnect = require('../_db');
const { Game } = require('../_models');
const { normalizeIds, setCors } = require('../_utils');

module.exports = async (req, res) => {
  setCors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ message: 'Method Not Allowed' });

  await dbConnect();
  const ids = normalizeIds(req.query.ids);
  const records = await Game.find({ _id: { $in: ids } });
  res.status(200).json(records);
};
