import { useMutation } from "@tanstack/react-query";
import { login } from "../services/endpoints";
import useAuthStore from "../store/auth"; // ajuste o caminho se necessário

// Hook de login
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

// Hook de logout
export function useLogout() {
  const clearAuth = useAuthStore((state) => state.clearAuth);

  return () => {
    clearAuth();
    localStorage.clear(); // se você estiver usando tokens no localStorage
    window.location.href = "/login"; // redireciona para a tela de login
  };
}
