module.exports = (req, res) => {
  const env = JSON.stringify(process.env)
  const env2 = JSON.stringify(process[`env`])
  console.log({ env })
  console.log({ env2 })
  console.log(`Hello there`)
  res.status(200).send({
    hostname: req.hostname,
    ip: req.ip,
    ips: req.ips,
    params: req.params,
    path: req.path,
    protocol: req.protocol,
    query: req.query,
    headers: req.headers,
    body: req.body,
    cookies: req.cookies,
    env,
    env2,
  })
}
