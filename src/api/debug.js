module.exports = (req, res) => {
  const env = process.env
  const env2 = process[`env`]
  console.log({ env })
  console.log({ env2 })
  console.log(`Hello there`)
  const SOME_VAR = process.env.SOME_VAR
  const GATSBY_SOME_VAR = process.env.GATSBY_SOME_VAR
  console.log({ SOME_VAR, GATSBY_SOME_VAR })
  res.status(200).send({
    hostname: req.hostname,
    ip: req.ip,
    ips: req.ips,
    params: req.params,
    path: req.path,
    protocol: req.protocol,
    query: req.query,
    headers: req.headers,
    rawHeaders: req.rawHeaders,
    body: req.body,
    cookies: req.cookies,
    env,
    env2,
    SOME_VAR,
    GATSBY_SOME_VAR,
  })
}
