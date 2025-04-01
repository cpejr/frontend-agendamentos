import BotaoEntrar from "../BotaoEntrar/BotaoEntrar";
import { BlueRectangle, NavLinks, NavLink, Logo } from "./Styles";
import {useNavigate} from "react-router-dom";
import React from 'react';
import { figma, hello } from "../../Assets";

export default function Header() {
    const navigate = useNavigate();
    return (
        <BlueRectangle>
            
            <Logo  src = {figma} alt="Logo" />
            
            <NavLinks>
                <NavLink onClick={() => navigate("/")}>Home</NavLink>
                <NavLink onClick={() => navigate("/novoagendamento")}>Novo Agendamento</NavLink>
                <NavLink onClick={() => navigate("/meusagendamentos")}>Meus Agendamentos</NavLink>
                <NavLink onClick={() => navigate("/creditos")}>Créditos</NavLink>
            </NavLinks>

            <BotaoEntrar onClick={()=> navigate("/cadastro")}> 
                ENTRAR
            </BotaoEntrar>

        </BlueRectangle>
    )
}