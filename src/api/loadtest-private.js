export default function handler(req, res) {
  let primes = getPrimes(10000)
  res.set(`Cache-Control`, `private`)
  res.json(primes)
}

function getPrimes(max) {
  var sieve = [],
    i,
    j,
    primes = []

  for (i = 2; i <= max; ++i) {
    if (!sieve[i]) {
      // i has not been marked -- it is prime
      primes.push(i)

      for (j = i << 1; j <= max; j += i) {
        sieve[j] = true
      }
    }
  }

  return primes
}
