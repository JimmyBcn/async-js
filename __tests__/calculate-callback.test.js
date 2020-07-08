const { calculate } = require("../src/samples/calculate-callback");

jest.setTimeout(300000);

describe("calculate", () => {
  it("should return 4", (done) => {
    const callback = (result) => {
      try {
        expect(result).toBe(4);
        done();
      } catch (e) {
        done(e);
      }
    }

    calculate(callback);
  })
})