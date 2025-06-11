import { signInWithGooglePopup } from "./firebase";
import { useLogin, useLogout } from "../hooks/login";
import useAuthStore from "../store/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useGoogleLogin = () => {
  const { auth } = useAuthStore();
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const navigate = useNavigate();
  
  const { mutate: login, isLoading: isLoggingIn } = useLogin({
    onSuccess: () => {
      toast.success("Login realizado com sucesso!");
      navigate("/dashboard"); // Redireciona após login
    },
    onError: (err) => {
      console.error("Login error:", err);
      toast.error(err.message || "Erro ao fazer login");
    }
  });

  const { mutate: logout, isLoading: isLoggingOut } = useLogout({
    onSuccess: () => {
      clearAuth();
      toast.success("Você saiu da sua conta");
      navigate("/");
    },
    onError: (err) => {
      console.error("Logout error:", err);
      toast.error(err.message || "Erro ao fazer logout");
    }
  });

  const logGoogleUser = async () => {
    try {
      if (!auth?.accessToken) {
        const googleResponse = await signInWithGooglePopup();
        
        if (!googleResponse?.user) {
          throw new Error("Falha ao obter dados do Google");
        }
        
        login({
          name: googleResponse.user.displayName,
          email: googleResponse.user.email,
          imageURL: googleResponse.user.photoURL,
        });
      } else {
        await logout();
      }
    } catch (error) {
      console.error("Google auth error:", error);
      toast.error(error.message || "Erro ao autenticar com Google");
    }
  };

  return {
    logGoogleUser,
    isLoading: isLoggingIn || isLoggingOut
  };
};