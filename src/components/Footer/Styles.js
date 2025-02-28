import styled from "styled-components";

export const BlueRectangle = styled.div`
    font-size: medium;
    color: white;
    display: flex;
    height: 12vh;
    background-color: #0E5F94;
    align-items: center; /* Alinha a imagem verticalmente no centro */
    padding-left: 20px; /* Espaçamento da imagem à esquerda */
    position: relative; /* Garante que a imagem fique posicionada corretamente */
`;

export const Logo = styled.img`
    width: 15vh;
    position: absolute;
    top: 45px;
    left: 16px;
    transform: translateY(-50%);
    z-index: 1001;
`;