import axios from "axios";
import useAuthStore from "../store/auth";

const baseURL = import.meta.env.VITE_BACKEND_URL; 

const api = axios.create({baseURL});

api.interceptors.request.use(
    (config) => {
        const { auth } = useAuthStore.getState();
        console.log("Current auth", auth); 
        if (!config.headers.Authorization && auth) {
            config.headers.Authorization = `Bearer ${auth}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;




