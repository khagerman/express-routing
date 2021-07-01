const { mean, median, mode, makeArrayOfNums } = require("./math");
describe("should find the mean of an array of numbers", function () {
  test("find the mean of an array of numbers", function () {
    expect(mean([1, 2, 3, 3, 3])).toEqual(2.4);
  });
});

describe("should find the median of an array of numbers", function () {
  test("should find the median of an even set of numbers", function () {
    expect(median([1, 2, 3, 4])).toEqual(2.5);
  });
  it("should find the median of an odd set of numbers", function () {
    expect(median([1, 2, 3])).toEqual(2);
  });
});

describe("should find the mode of an array of numbers", function () {
  it("should find the mode (most common number)", function () {
    expect(mode([1, 2, 2, 3, 3, 2])).toEqual(2);
  });
});
