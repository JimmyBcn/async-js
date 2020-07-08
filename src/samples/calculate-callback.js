const { add } = require("../operations/operation-callback") 

// This is an example of callback-hell/pyramid-of-doom
const calculate = (callback) => {
  add(0, 1, null, result => {
    add(result, 1, null, result => { 
      add(result, 1, null, result => { 
        add(result, 1, null, result => { 
          callback(result);
        })
      })
    })
  })
}

exports.calculate = calculate