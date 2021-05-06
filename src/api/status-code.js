function handler(_req, res) {
  res.status(233).send({ message: `hello` })
}

module.exports = handler
