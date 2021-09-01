const Array = require("../Array");

describe("Array class tests", () => {
  let array;

  beforeEach(() => {
    array = new Array();
  });

  test("it creates an object when Array class is instantiated", () => {
    expect(array).toBeDefined();
  });

  test("it returns the size of an array in integer if size() method is called", () => {
    array = new Array("one", "two", "three");
    expect(array.size()).toEqual(3);
    array = new Array();
    expect(array.size()).toEqual(0);
  });

  test("push method adds new elements to the end of an array, and returns the new length", () => {
    array.push("one");
    expect(array.data).toEqual(["one"]);
    expect(array.length).toEqual(1);

    array.push("two");
    expect(array.data).toEqual(["one", "two"]);
    expect(array.length).toEqual(2);
  });

  test("pop method removes the last element of an array, and returns that element", () => {
    array = new Array("one", "two", "three");
    let item = array.pop();
    expect(array.data).toEqual(["one", "two"]);
    expect(item).toEqual("three");
    expect(array.length).toEqual(2);

    item = array.pop();
    expect(array.data).toEqual(["one"]);
    expect(item).toEqual("two");
    expect(array.length).toEqual(1);

    item = array.pop();
    expect(array.data).toEqual([]);
    expect(item).toEqual("one");
    expect(array.length).toEqual(0);
  });

  test("insert method inserts an item based on its given index and returns the array", () => {
    array = new Array("one", "three");
    array.insert("two", 1);
    expect(array.data).toEqual(["one", "two", "three"]);
    expect(array.length).toEqual(3);

    array.insert("four", 3);
    expect(array.data).toEqual(["one", "two", "three", "four"]);
    expect(array.length).toEqual(4);
    expect(() => {
      array.insert("ten", 9);
    }).toThrowError("Insertion Exception: index out of bounds");
  });

  test("deleteAt method deletes an item based on its given index and returns the array", () => {
    array = new Array("one", "two", "five", "three");
    array.deleteAt(2);
    expect(array.data).toEqual(["one", "two", "three"]);
    expect(array.length).toEqual(3);

    array.deleteAt(2);
    expect(array.data).toEqual(["one", "two"]);
    expect(array.length).toEqual(2);

    expect(() => {
      array.deleteAt(9);
    }).toThrowError("Deletion Exception: index out of bounds");

    array.deleteAt(0);
    expect(array.data).toEqual(["two"]);
    expect(array.length).toEqual(1);

    array.deleteAt(0);
    expect(array.data).toEqual([]);
    expect(array.length).toEqual(0);
  });
});
