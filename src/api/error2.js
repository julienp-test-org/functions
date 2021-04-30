// eslint-disable-next-line
this_is_undefined.invalid_access

function handler(_req, res) {
  res.status(200).send({ message: `hello` })
}

module.exports = handler
