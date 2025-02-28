import BotaoEntrar from "../BotaoEntrar/BotaoEntrar";
import { BlueRectangle, NavLinks, NavLink, Logo } from "./styles";
import {useNavigate} from "react-router-dom";
import React from 'react';
import { figma, hello } from "../../Assets";

export default function Header() {
    const navigate = useNavigate();
    return (
        <BlueRectangle>
            <Logo  src = {figma} alt="Logo" />
            
            <NavLinks>
                <NavLink href="/">Home</NavLink>
                <NavLink href="novoagendamentos">Novo Agendamento</NavLink>
                <NavLink href="meusagendamentos">Meus Agendamentos</NavLink>
                <NavLink href="creditos">Créditos</NavLink>
            </NavLinks>
            <BotaoEntrar onClick={()=> navigate("/cadastro")}> 
                ENTRAR
            </BotaoEntrar>
        </BlueRectangle>
    )
}