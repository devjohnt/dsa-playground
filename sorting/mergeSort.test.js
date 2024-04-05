const mergeSort = require("./mergeSort");

describe("mergeSort", () => {
  test("sorts an array of numbers in ascending order", () => {
    expect(mergeSort([5, 3, 8, 4, 2], 0, 4)).toEqual([2, 3, 4, 5, 8]);
  });

  test("sorts an already sorted array", () => {
    expect(mergeSort([1, 2, 3, 4, 5], 0, 4)).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts an array with negative numbers", () => {
    expect(mergeSort([-3, -1, -2, -4, -5], 0, 4)).toEqual([-5, -4, -3, -2, -1]);
  });

  test("sorts an empty array", () => {
    expect(mergeSort([])).toEqual([]);
  });
});
