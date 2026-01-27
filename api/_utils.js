function parseBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  try {
    return JSON.parse(req.body || '{}');
  } catch (err) {
    return {};
  }
}

function normalizeIds(ids) {
  if (!ids) return [];
  if (Array.isArray(ids)) return ids;
  if (typeof ids === 'string') {
    if (ids.includes(',')) return ids.split(',').map((v) => v.trim()).filter(Boolean);
    return [ids];
  }
  return [];
}

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

module.exports = { parseBody, normalizeIds, setCors };
