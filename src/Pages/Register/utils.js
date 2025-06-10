import { z } from "zod";

export const registerSchema = z.object({
 nome: z.string()
       .min(3, "O nome deve ter pelo menos 3 caracteres")
       .max(50, "O nome não pode ter mais que 50 caracteres"),
     email: z.string()
       .email("E-mail inválido")
       .max(100, "O e-mail não pode ter mais que 100 caracteres"),
     senha: z.string()
       .min(6, "A senha deve ter pelo menos 6 caracteres")
       .max(20, "A senha não pode ter mais que 20 caracteres"),
     confirmarSenha: z.string()
   }).refine((data) => data.senha === data.confirmarSenha, {
     message: "As senhas não coincidem",
     path: ["confirmarSenha"]
});