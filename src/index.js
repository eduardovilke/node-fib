const express = require('express')
const { Worker } = require('worker_threads')
const app = express()
const port = 3000

function calculateFibonacciAsync(number, callback) {
  const worker = new Worker('./src/fibonacciWorker.js');

  worker.on('message', result => {
    callback(result);
    worker.terminate();
  });

  worker.postMessage(number);
}

app.get('/hello/:name', (req, res) => {
  res.send(`<h1>Hello ${req.params.name}</h1>`)
})

app.get('/fibonacci/:number', (req, res) => {
  const { number } = req.params;

  calculateFibonacciAsync(+number, result => {
    res.json({ result });
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})