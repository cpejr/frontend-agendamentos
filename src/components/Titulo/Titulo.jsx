import React from "react";
import { StyledTitulo } from "./Styles"; // Importando o estilo do título

const Titulo = ({ text }) => {
    return (
        <StyledTitulo>
            {text}
        </StyledTitulo>
    );
};

export default Titulo;