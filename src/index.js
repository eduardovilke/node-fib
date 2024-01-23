const express = require('express')
const app = express()
const port = 3000

function calculateFibonacci(num) {
  if(num === 0 || num === 1) return num;

  return calculateFibonacci(num - 1) + calculateFibonacci(num - 2);
}

app.get('/hello/:name', (req, res) => {
  res.send(`<h1>Hello ${req.params.name}</h1>`)
})

app.get('/fibonacci/:number', (req, res) => {
  const { number } = req.params;
  const result = calculateFibonacci(+number);

  res.json({ result })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})