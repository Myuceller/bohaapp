const dbConnect = require('../_db');
const { Game } = require('../_models');
const { setCors } = require('../_utils');

module.exports = async (req, res) => {
  setCors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ message: 'Method Not Allowed' });

  await dbConnect();
  const id = req.query.ids || req.query.id || req.query._id;
  if (!id) return res.status(400).json({ message: 'missing id' });

  const record = await Game.findOne({ _id: id });
  if (record) {
    record.click = (record.click || 0) + 1;
    await record.save();
  }
  res.status(200).json(record);
};
