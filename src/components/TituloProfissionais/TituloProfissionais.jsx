import React from "react";
import { StyledTituloProfissionais } from "./Styles"; // Importando o estilo do título

const TituloProfissionais = ({ text }) => {
    return (
        <StyledTituloProfissionais>
            {text}
        </StyledTituloProfissionais>
    );
};

export default TituloProfissionais;