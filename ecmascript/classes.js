const obj1 = {
  sum(a, b) {
    return a + b;
  }
};

const obj2 = {};
obj2.prototype = obj1;

class Person {
  type = 'teacher'

  constructor(name) {
    this._name = name;
  }

  getName = () => {
    return this._name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(name) {
    this._name = name.trim();
  }
}

const person = new Person();
person.name = 'Antony';
person._name = 'Ciccio';