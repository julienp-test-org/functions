function handler(_req, res) {
  setTimeout(() => {
    res.status(200).send({ message: `hello` })
  }, 3 * 60 * 1000)
}

module.exports = handler
