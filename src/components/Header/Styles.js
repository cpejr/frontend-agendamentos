import styled from "styled-components";


export const BlueRectangle = styled.div`
    font-size: medium;
    color: white;
    display: flex;
    height: 12vh;
    background-color: #0E5F94;
    justify-content: space-between; /* Distribui os elementos no header */
    align-items: center; /* Alinha a imagem verticalmente no centro */
    padding-left: 20px; /* Espaçamento da imagem à esquerda */
    position: relative; /* Garante que a imagem fique posicionada corretamente */
`;

export const NavLinks = styled.nav`
    position: absolute; /* Permite posicionamento dentro do header */
 /* Distância do topo do header */
    right: 400px; /* Encosta o botão na direita */
    display: flex;
    gap: 100px; /* Espaçamento entre os links */
`;

export const NavLink = styled.a`

    font-family: 'Cabin', sans-serif; /* Define a fonte "Cabin" */
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color:rgb(196, 228, 252); /* Cor ao passar o mouse */
    }
`;

export const Logo = styled.img`
    width: 10vh;
    position: absolute;
    top: 41px;
    left: 30px;
    transform: translateY(-50%);
    z-index: 1001;

`;