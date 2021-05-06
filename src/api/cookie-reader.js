function handler(req, res) {
  res.status(200).send({ cookies: req.cookies })
}

module.exports = handler
