import api from "./api";

export const login = async (credentials) => {
    try {
      const response = await api.post("/login", credentials);
      return response.data; 
    } catch (error) {
      const message = error.response?.data?.message || "Erro ao fazer login.";
      throw new Error(message);
    }
  };
    