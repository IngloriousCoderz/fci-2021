const arr = [1, 2, 3, 4, 5];

// for loop

for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
}

// for-in

const obj = { a: 1, b: 2, c: 3, d: 4 };

for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    const value = obj[key];
  }
}

for (let index in arr) {
  const item = arr[index];
}

// for-of

for (const item of arr) {

}