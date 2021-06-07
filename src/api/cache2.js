export default (req, res) => {
  res.set(`Cache-Control`, `public, s-maxage=120`)
  res.status(200).send({
    time: new Date().getTime(),
  })
}
