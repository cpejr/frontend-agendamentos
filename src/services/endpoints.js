import api from "./api";

export const login = async (credentials) => {
  const response = await api.post("/login", credentials, {
    withCredentials: true, 
  });
  return response.data;
};