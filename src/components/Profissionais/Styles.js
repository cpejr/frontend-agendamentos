import styled from "styled-components";

export const ContainerProfissional = styled.div`
    position: fixed;
    bottom: 14vh; /* Fica acima da header */
    left: 52%; /* Posiciona ao lado das categorias */
    width: 50%; /* Largura da div retangular */
    height: auto;
    background-color: white(167, 235, 162, 0.9); /* Azul semi-transparente */
    padding: 10px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 colunas */
    gap: 10px; /* Espaço entre os botões */
    row-gap: 30px; /* Adiciona espaço extra entre as linhas */
    z-index: 999; /* Fica acima da header */
    text-align: center;
`;

export const ItemProfissional = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TituloProfissional = styled.span`
    font-size: 12px;
    font-weight: bold;
    color: #063D61;
    margin-top: 5px;
`;
