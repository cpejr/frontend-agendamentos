import styled from "styled-components";

export const StyledButtonEnter = styled.button`
    font-family: 'Inter', sans-serif; /* Fonte Inter */
    position: absolute; /* Permite posicionamento dentro do header */
    top: 20px; /* Distância do topo do header */
    right: 15px; /* Encosta o botão na direita */
    width: 17vh;
    height: 6vh;
    padding: 9px 24px;
    font-size: 18px;
    font-weight: bold;
    color: white;
    background-color: #1884CA;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s ease;
    /* Efeito de sombra */
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);

    &:hover {
        background-color:rgb(112, 175, 216);
        /* Aumenta a sombra no hover */
        box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.4);
    }

    &:active {
        /* Diminui a sombra ao clicar */
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    }
`;