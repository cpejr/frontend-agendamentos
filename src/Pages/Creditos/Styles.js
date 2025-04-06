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
    height: auto;
    gap: 40px;
    margin: 40px 0 40px 0;
`;

export const Titles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 320px;
    height: 70px;
    border-radius: 21px;
    border: solid 10px #E0EEFFDB;
    background: rgb(167,206,253);
    background: linear-gradient(90deg, rgba(167,206,253,1) 0%, rgba(255,245,155,1) 100%);
`;

export const TextTitle = styled.h1`
    font-size: 28px;
    color: #063D61;
`;

export const Balance = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 320px;
    height: 120px;
    border-radius: 33px;
    background-color: #FFF59BDB;
    gap: 14px;
`;

export const TextBalance = styled.p`
    color: #FFA600;
    font-size: 28px;
`;

export const Statement = styled.a`
    color: #CECECE;
    font-size: 22px;
    cursor: pointer;
    text-decoration: none;
`;

export const ContentBuy = styled.div`
    display: flex; 
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 40px;

    @media (max-width: 1025px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 500px) {
        gap: 20px;
    }
`

export const ButtonCredit = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    background: #FFF59B;
    border-radius: 21px;
    width: 220px;
    height: 220px;
    text-align: center;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    border: none;
    transition: 0.3s;
    font-weight: bold;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 500px) {
        height: 160px;
        width: 160px;
    }
`;

export const Icon = styled.img`
    height: 100px;
    width: 100px;

    @media (max-width: 500px) {
        height: 60px;
        width: 60px;
    }
`;

export const TextBuy = styled.p`
    color: #FFA600;
    font-size: 28px;

    @media (max-width: 500px) {
        font-size: 22px;
    }
`;

export const Price = styled.p`
    font-size: 22px;
    color: #063D61;
`;
