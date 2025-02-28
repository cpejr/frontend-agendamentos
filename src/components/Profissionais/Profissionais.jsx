import React from "react";
import { ContainerProfissional, TituloProfissional, ItemProfissional } from "./Styles";
import {useNavigate} from "react-router-dom";
import BotaoProfissional from "../BotaoProfissional/BotaoProfissional";

const profissionais = [
    { nome: "Guilherme" },
    { nome: "Fernanda" },
    { nome: "Stéphanie" },
    { nome: "Gustavo" },
    { nome: "Thales" },
    { nome: "Rafael" }
];

const Profissionais = () => {
    const navigate = useNavigate();
    return (
        <ContainerProfissional>
            {profissionais.map((profissional, index) => (
                <ItemProfissional key={index}>
                    <BotaoProfissional onClick={()=> navigate("/novoagendamento")}/>
                    <TituloProfissional>{profissional.nome}</TituloProfissional>
                </ItemProfissional>
            ))}
        </ContainerProfissional>
    );
};

export default Profissionais;
