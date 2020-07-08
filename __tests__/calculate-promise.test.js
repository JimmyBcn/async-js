const { calculate } = require("../src/samples/calculate-promise");

jest.setTimeout(300000);

describe("calculate", () => {
  it("should return 4", (done) => { // we will make jest wait until the done callback is executed
    calculate().then(result => {
      expect(result).toBe(4);
      done();
    });
  });
});