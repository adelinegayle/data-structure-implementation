class Array {
  constructor(...args) {
    this.data = [];
    this.length = 0;

    if (args) {
      for (let i = 0; i < args.length; i++) {
        this.data[i] = args[i];
        this.length++;
      }
    }
  }

  size() {
    return this.length;
  }

  push(item) {
    const index = this.length;
    this.data[index] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const index = this.length - 1;
    const item = this.data[index];
    this.data = this.deleteAndFilter(index);
    this.length--;
    return item;
  }

  insert(item, index) {
    if (index <= this.length) {
      this.shiftItemsToRight(index);
      this.data[index] = item;
      this.length++;
      return this.data;
    } else {
      throw new Error("Insertion Exception: index out of bounds");
    }
  }

  deleteAt(index) {
    if (index <= this.length) {
      this.shiftItemsToLeft(index);
      this.data = this.deleteAndFilter(this.length);
      this.length--;
      return this.data;
    } else {
      throw new Error("Deletion Exception: index out of bounds");
    }
  }

  shiftItemsToLeft(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
  }

  shiftItemsToRight(index) {
    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
  }

  deleteAndFilter(index) {
    delete this.data[index];
    return this.data.filter((element) => element);
  }
}

module.exports = Array;
