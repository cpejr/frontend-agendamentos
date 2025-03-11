import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    min-height: 75vh;
`;

export const Titulos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 370px;
    height: 90px;
    border-radius: 21px;
    border: solid 10px #E0EEFFDB;
    background: rgb(167,206,253);
    background: linear-gradient(90deg, rgba(167,206,253,1) 0%, rgba(255,245,155,1) 100%);
`;

export const TextoTitulo = styled.h1`
    font-size: 36px;
    color: #063D61;
`;

export const Saldo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 370px;
    height: 141px;
    border-radius: 33px;
    background-color: #FFF59BDB;
    gap: 14px;
`;

export const TextoSaldo = styled.p`
    color: #FFA600;
    font-size: 28px;
`;

export const Extrato = styled.a`
    color: #CECECE;
    font-size: 22px;
    cursor: pointer;
    text-decoration: none;
`;

export const ContentComprar = styled.div`
    display: flex; 
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
`

export const BotaoCredito = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    background: #FFF59B;
    border-radius: 21px;
    width: 260px;
    height: 260px;
    text-align: center;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    border: none;
    transition: 0.3s;
    font-weight: bold;

    &:hover {
        transform: scale(1.05);
    }
`;

export const Icone = styled.img`
    height: 128px;
    width: 128px;
`;

export const Preco = styled.p`
    font-size: 22px;
    color: #063D61;
`;