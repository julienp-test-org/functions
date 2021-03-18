const fruits = ["Banana", "Apple", "Kiwi Fruit"]

export default (req, res) => {
  const fruit = fruits[Math.floor(Math.random() * fruits.length)]
  res.status(200).send({
    fruit,
  })
}
