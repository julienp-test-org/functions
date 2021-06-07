export default (req, res) => {
  res.set(`Cache-Control`, `public, max-age=60`)
  res.status(200).send({
    time: new Date().getTime(),
  })
}
