import { useQuery, useMutation } from "@tanstack/react-query";
import { login } from "../services/endpoints";

export function useLogin({
    onSuccess = () => {},
    onError = (err) => console.error(err),
  } = {}) {
    return useMutation({
      mutationFn: login,
      onError,
      onSuccess,
    });
  }

 

