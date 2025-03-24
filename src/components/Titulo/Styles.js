import styled from "styled-components";

export const StyledTitulo = styled.h1`
    
    text-align: center;
    font-size: 22px;
    width: 250px;
    height: 60px;
    background: linear-gradient(to left, #A7CEFD, #F5E1FF); /* Degradê horizontal*/
    border: 5px solid #F5E1FF;
    border-radius: 15px;
    cursor: pointer;
    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */

    position: absolute;
    top: 40%; /* Coloca o título a 55% da altura da página */
    left: 20%; /* Centraliza horizontalmente na tela */

`;