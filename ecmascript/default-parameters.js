function sum(a, b) {
  if (typeof a === "undefined") {
    a = 0;
  }

  return a + b;
}

function sum(a = 0, b = 0) {
  return a + b;
}

sum(3);
