const quickSort = require("./quickSort");

describe("quickSort", () => {
  test("sorts an array of numbers in ascending order", () => {
    expect(quickSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
  });

  test("sorts an already sorted array", () => {
    expect(quickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts an array with negative numbers", () => {
    expect(quickSort([-3, -1, -2, -4, -5])).toEqual([-5, -4, -3, -2, -1]);
  });

  test("sorts an empty array", () => {
    expect(quickSort([])).toEqual([]);
  });
});
