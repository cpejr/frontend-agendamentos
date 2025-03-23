import React from "react";
import { ContainerProfissional, TituloProfissional, ItemProfissional } from "./Styles";
import {useNavigate} from "react-router-dom";
import ButtonProfessional from "../ButtonProfessional/ButtonProfessional";

const profissionais = [
    { nome: "Guilherme" },
    { nome: "Fernanda" },
    { nome: "Stéphanie" },
    { nome: "Gustavo" },
    { nome: "Thales" },
    { nome: "Rafael" }
];

const Professional = () => {
    const navigate = useNavigate();
    return (
        <ContainerProfissional>
            {profissionais.map((profissional, index) => (
                <ItemProfissional key={index}>
                    <ButtonProfessional onClick={()=> navigate("/novoagendamento")}/>
                    <TituloProfissional>{profissional.nome}</TituloProfissional>
                </ItemProfissional>
            ))}
        </ContainerProfissional>
    );
};

export default Professional;
