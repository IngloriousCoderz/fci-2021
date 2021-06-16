// callback hell
// pyramid of doom

$.getJSON(url1, (response1) => {
  $.getJSON(url2, (response2) => {
    $.getJSON(url3, (response3) => {

    });
  });
}, (error1) => {});

// Node.js

fs.readFile(path1, (error1, file1) => {
  fs.readFile(path2, (error2, file2) => {
    fs.readFile(path3, (error3, file3) => {

    });
  });
});

// deferred -> promise
// done -> then

// pending -> in corso
// settled (conclusa):
//   fulfilled -> risolta
//   rejected -> rifiutata

const promise1 = $.getJSON(url1);
promise1.then((response1) => {
  const promise2 = $.getJSON(url2);
  promise2.then((response2) => {
    const promise3 = $.getJSON(url3);
    promise3.then((response3) => {

    });
  });
});
promise1.catch((error1) => {});
promise1.finally(() => {});

const promise1 = $.getJSON(url1);
const promise2 = promise1.then((response1) => {
  return $.getJSON(url2);
});
const promise3 = promise2.then((response2) => {
  return $.getJSON(url3);
});
promise3.then((response3) => {

});
promise1.catch((error1) => {});
promise1.finally(() => {});

// promise chaining

$.getJSON(url1)
  .then((response1) => $.getJSON(url2))
  .then((response2) => $.getJSON(url3))
  .then((response3) => 42)
  .catch((error) => {})
  .finally(() => {});

const promise = Promise.all([promise1, promise2, promise3]);
promise.then(([response1, response2, response3]) => {});

// const arr = ['luke', 'c3po'];
// const luke = arr[0];
// const c3po = arr[1];
// const [luke, c3po] = arr;

Promise.all([promise1, promise2, promise3])
  .then(([response1, response2, response3]) => {})
  .catch((error) => {})
  .finally(() => {});

Promise.allSettled(..promises);

Promise.race([fetch(url), wait(3000)]);

setTimeout(() => {
  console.log('Three seconds passed.');
}, 3000);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Three seconds passed.');
  }, 3000);
});

function wait(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

new Promise((resolve, reject) => $.getJSON(
  url,
  (response) => resolve(response.body),
  (error) => reject(error.message)
));

new Promise((resolve) => resolve(42));
new Promise((resolve, reject) => reject(42));

Promise.resolve(42);
Promise.reject(42);