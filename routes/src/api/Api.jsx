import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const get = async (
  url,
  options = {},
  doSomethingWithData = (data) => {}
) => {
  const resp = await api.get(url, options);
  doSomethingWithData(resp?.data);
  return resp?.data;
};
