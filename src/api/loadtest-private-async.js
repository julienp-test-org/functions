export default async function handler(req, res) {
  // Simulate API call that takes between 100 and 300 ms
  const delay = Math.random() * (300 - 100) + 100
  await new Promise(resolve => setTimeout(() => resolve(undefined), delay))
  res.set(`Cache-Control`, `private`)
  res.json({ hello: "world" })
}
