function handler(_req, res) {
  // eslint-disable-next-line
  this_is_undefined.invalid_access
  res.status(200).send({ message: `hello` })
}

module.exports = handler
