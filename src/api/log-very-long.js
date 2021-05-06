function handler(_req, res) {
  const log = new Array(5000).fill(`x`).join(``)
  console.log(log)
  res.sendStatus(200)
}

module.exports = handler
