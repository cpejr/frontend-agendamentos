import styled from "styled-components";

export const BannerContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #1a1a1a;
    color: #fff;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 9999;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
`;

export const Text = styled.span`
    flex: 1;
    font-size: 0.95rem;
`;

export const AcceptButton = styled.button`
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 1rem;
`;
