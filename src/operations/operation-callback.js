const add = (initialValue, value, errorCallback, successCallback) => { // when using callbacks we do not return anything
  setTimeout(() => {
    try {
      if(isNaN(initialValue) || isNaN(value)) {
        throw new TypeError("Argument is not a number")
      }
      const result = initialValue + value
      successCallback(result);
    } catch (e) {
      if (errorCallback) {
        errorCallback(e);
      }
    }
  }, 1000);
}

exports.add = add;
