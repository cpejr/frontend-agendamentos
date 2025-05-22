import ButtonEnter from "../../commons/ButtonEnter/ButtonEnter";
import { BlueRectangle, NavLinks, NavLink, Logo } from "./Styles";
import {useNavigate} from "react-router-dom";
import React from 'react';
import { figma, hello } from "../../../Assets";

export default function Header() {
    const navigate = useNavigate();
    return (
        <BlueRectangle>
            <Logo  src = {figma} alt="Logo" />
            
            <NavLinks>
                <NavLink href="/">Home</NavLink>
                <NavLink href="novoagendamento">Novo Agendamento</NavLink>
                <NavLink href="meusagendamentos">Meus Agendamentos</NavLink>
                <NavLink href="creditos">Créditos</NavLink>
            </NavLinks>
            <ButtonEnter onClick={()=> navigate("/register")}> 
                ENTRAR
            </ButtonEnter>
        </BlueRectangle>
    )
}