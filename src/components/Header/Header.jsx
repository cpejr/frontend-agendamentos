import BotaoEntrar from "../BotaoEntrar/BotaoEntrar";
import { BlueRectangle, NavLinks, NavLink, Logo } from "./Styles";
import { Navigate, useNavigate } from "react-router-dom";
import React from "react";
import { figma, hello } from "../../Assets";

export default function Header() {
  const navigate = useNavigate();
  return (
    <BlueRectangle>
      <Logo src={figma} alt="Logo" />

      <NavLinks>
        <NavLink onClick={() => navigate("/")}>Home</NavLink>
        <NavLink onClick={() => navigate("/novoagendamento")}>
          Novo Agendamento
        </NavLink>
        <NavLink onClick={() => navigate("/meusagendamentos")}>
          Meus Agendamentos
        </NavLink>
        <NavLink onClick={() => navigate("/creditos")}>Créditos</NavLink>
        <NavLink onClick={() => navigate("/contato")}>Contato</NavLink>
        <NavLink onClick={() => navigate("/sobreNos")}>Sobre Nós</NavLink>
        <NavLink onClick={() => navigate("/Faq")}>FAQ</NavLink>
      </NavLinks>

      <BotaoEntrar onClick={() => navigate("/cadastro")}>ENTRAR</BotaoEntrar>
    </BlueRectangle>
  );
}
