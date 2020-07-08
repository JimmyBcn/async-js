const { add } = require("../operations/operation-promise") 

// This is an example of promise-chain
const calculate = () => {
  return add(0, 1) // each step of the chain must return a promise
  .then(result => { return add(result, 1) })
  .then(result => { return add(result, 1) })
  .then(result => { return add(result, 1) }) // the function returns the promise *of the last step in the chain*, that will be converted to a value when resolved
}

exports.calculate = calculate