import React from "react";
import { ContainerCategoria, TituloCategoria, ItemCategoria, TituloSecao } from "./Styles";
import {useNavigate} from "react-router-dom";
import ButtonCategory from "../../commons/ButtonCategory/ButtonCategory";

const categorias = [
    { nome: "Corte" },
    { nome: "Escova" },
    { nome: "Massagem" },
    { nome: "Unhas" },
    { nome: "Maquiagem" },
    { nome: "Cílios" }
];

const Categorias = () => {
    const navigate = useNavigate();
    return (
        <ContainerCategoria>
            {categorias.map((categoria, index) => (
                <ItemCategoria key={index}>
                    <ButtonCategory onClick={()=> navigate("/novoagendamento")}/>
                    <TituloCategoria>{categoria.nome}</TituloCategoria>
                </ItemCategoria>
            ))}
        </ContainerCategoria>
    );
};

export default Categorias;


