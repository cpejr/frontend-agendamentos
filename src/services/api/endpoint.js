import api from "./api";

//USERS
export async function GetUsers() {
  const { data } = api.get(`/users`);
  return data;
}
export async function CreateUsers(body) {
  const { data } = api.get(`/users`, body);
  return data;
}
export async function UpdateUsers(body, id) {
  const { data } = api.get(`/users:${id}`, body);
  return data;
}
export async function DeleteUsers(id) {
  const { data } = api.get(`/users:${id}`);
  return data;
}
