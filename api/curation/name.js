const dbConnect = require('../_db');
const { Curation } = require('../_models');
const { setCors } = require('../_utils');

module.exports = async (req, res) => {
  setCors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ message: 'Method Not Allowed' });

  await dbConnect();

  const curationName = req.query[0] || req.query.name || req.query.detail || req.query.curationName;
  if (!curationName) return res.status(400).json({ message: 'missing curation name' });

  const doc = await Curation.findOne({ detail: curationName });
  if (!doc) return res.status(404).json({ message: 'not found' });
  res.json(doc);
};
