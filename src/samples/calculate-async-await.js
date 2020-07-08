const { add } = require("../operations/operation-promise") 

// This is an example of async-await pattern
const calculate = async () => {
  let result;
  result = await add(0, 1);
  result = await add(result, 1);
  result = await add(result, 1);
  result = await add(result, 1);
  return result;
}

exports.calculate = calculate