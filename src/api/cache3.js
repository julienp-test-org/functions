export default (req, res) => {
  const time = new Date().getTime()
  if (time % 2 === 0) {
    res.set(`Cache-Control`, `public, s-maxage=120`)
    res.status(500).send({
      time: new Date().getTime(),
    })
  } else {
    res.status(200).send({
      time: new Date().getTime(),
    })
  }
}
