function handler(_req, res) {
  for (let i = 0; i < 1200; i++) {
    console.log(`This is log ${i}`)
  }
  res.sendStatus(200)
}

module.exports = handler
