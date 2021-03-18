export default (req, res) => {
  res.status(200).send({
    host: req.host,
    hostname: req.hostname,
    ip: req.ip,
    ips: req.ips,
    params: req.params,
    path: req.path,
    protocol: req.protocol,
    query: req.query,
  })
}
