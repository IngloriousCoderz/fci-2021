function sum(a, b) {
  return a + b;
}

sum(2, 3);

function sum(a) {
  return function (b) {
    return a + b;
  };
}

const sumTwo = sum(2);
sumTwo(3);
sumTwo(4);
sumTwo(5);

sum(2)(3);

const sum = (a, b) => a + b;
const sum = (a) => (b) => a + b;
