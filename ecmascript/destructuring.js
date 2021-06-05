const arr = [1, 2, 3, 4, 5];

const first = arr[0];
const second = arr[1];
const fourth = arr[3];

const [first, second, , fourth] = arr;

const point = [3, 4, 2];
const [x, y, z] = point;

const obj = { a: 1, b: 2, c: 3 };

const d = obj.a;
const b = obj.b;

const { a: d, b } = obj;

const { a, b } = obj;

function fetchFromServer(url, { method }) {
  // const method = options.method;
  // const { method } = options;
}

const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
  },
  body: JSON.stringify(body),
}

const headers = options.headers
const { headers, method } = options