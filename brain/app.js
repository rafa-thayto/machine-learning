const brain = require('brain.js')

const network = new brain.NeuralNetwork()

network.train([
  { input: {height: 60, weigth: 150}, output: { adult: 1 } }
])

const result = network.run({ height: 70, weigth: 200 })

console.log(result)