const { calculate } = require("../src/samples/calculate-async-await");

jest.setTimeout(300000);

describe("calculate", () => {
  it("should return 4", async () => {
    const result = await calculate();
    expect(result).toBe(4);
  });
});