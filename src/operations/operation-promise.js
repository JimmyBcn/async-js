const add = (initialValue, value) => { // when using promises we return a promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if(isNaN(initialValue) || isNaN(value)) {
          throw new TypeError("Argument is not a number")
        }
        const result = initialValue + value
        resolve(result);
      } catch (e) {
        reject(e);
      }
    }, 1000);
  });
}

exports.add = add;
