async function handler(req, res) {
  const files = req.files
  res.json({ files })
}

export default handler
