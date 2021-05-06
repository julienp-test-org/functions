function handler(_req, res) {
  res.status(200).send({ message: `hello` })
}

module.exports = handler
