const { parentPort } = require('worker_threads');

function calculateFibonacci(num) {
  if(num === 0 || num === 1) return num;

  return calculateFibonacci(num - 1) + calculateFibonacci(num - 2);
}

parentPort.on('message', (number) => {
  const result = calculateFibonacci(number);
  parentPort.postMessage(result);
});