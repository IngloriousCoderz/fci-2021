fetchHeight(1).then(console.log);

function fetchHeight(id) {
  return fetch(`https://swapi.dev/api/people/${id}/`)
    .then((response) => response.json())
    .then((body) => +body.height)
    .catch((error) => console.error(error.message))
    .finally(() => console.log(id, 'done.'));
}

async function fetchHeight(id) {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}/`);
    const body = await response.json();
    return +body.height;
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log(id, 'done.');
  }
}

function fetchHeights(...ids) {
  return Promise.all(ids.map(fetchHeight))
    .then((heights) => heights.reduce((a,b) => a + b));
}

async function fetchHeights(...ids) {
  const heights = await Promise.all(ids.map(fetchHeight));
  return heights.reduce((a,b) => a + b);
}
