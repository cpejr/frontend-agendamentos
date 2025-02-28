import BotaoEntrar from "../BotaoEntrar/BotaoEntrar";
import { BlueRectangle } from "./styles";
import {useNavigate} from "react-router-dom";
import React from 'react';


export default function Header() {
    const navigate = useNavigate();
    return (
        <BlueRectangle>
            <BotaoEntrar onClick={()=> navigate("/cadastro")}> 
                ENTRAR
            </BotaoEntrar>
        </BlueRectangle>
    )
}