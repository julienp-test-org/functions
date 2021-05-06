const _doesntExist = require(`module-doesnt-exist`)

function handler(_req, res) {
  res.status(200).send({ message: `hello` })
}

module.exports = handler
