const dbConnect = require('./_db');
const { Curation } = require('./_models');
const { parseBody, setCors } = require('./_utils');

module.exports = async (req, res) => {
  setCors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  await dbConnect();

  if (req.method === 'GET') {
    const rows = await Curation.find({});
    if (rows.length) {
      return res.json({ result: 1, data: rows });
    }
    return res.json({ result: 0 });
  }

  if (req.method === 'POST') {
    const body = parseBody(req);
    const curation = new Curation({
      detail: body.detail,
      games: body.games,
    });
    const result = await curation.save();
    return res.status(201).json({
      message: 'curation add',
      detail: result.detail,
      games: result.games,
    });
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
};
