import styled from "styled-components";

export const TituloSecao = styled.h2`
    font-size: 18px;
    font-weight: bold;
    color: #063D61;
    text-align: center;
    text-transform: uppercase;
    background: linear-gradient(to right, #F5E1FF, #A7CEFD);
    padding: 10px;
    border-radius: 15px;
    margin-bottom: 15px;
`;

export const ContainerCategoria = styled.div`
    position: fixed;
    bottom: 14vh; /* Fica acima da header */
    left: 10px; /* Ajuste a posição no canto esquerdo */
    width: 50%; /* Largura da div retangular */
    height: auto;
    background-color: white; /* Azul semi-transparente */
    padding: 10px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 colunas */
    gap: 10px; /* Espaço entre os botões */
    row-gap: 30px; /* Adiciona espaço extra entre as linhas */
    z-index: 999; /* Fica acima da header */
    text-align: center;
`;

export const ItemCategoria = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TituloCategoria = styled.span`
    font-size: 12px;
    font-weight: bold;
    color: #063D61;
    margin-top: 5px;
`;