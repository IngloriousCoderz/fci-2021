import axios from "axios";

/*
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
})
*/

const http = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export async function read() {
  const { data } = await http.get("");
  return data;
}

export async function create(body) {
  const { data } = await http.post("", body);
  return data;
}

export async function update(id, body) {
  const { data } = await http.patch(`/${id}`, body);
  return data;
}

export async function remove(id) {
  const { data } = await http.delete(`/${id}`);
  return data;
}
