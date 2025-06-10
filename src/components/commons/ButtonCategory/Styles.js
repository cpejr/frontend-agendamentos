import styled from "styled-components";

export const StyledButtonCategory = styled.button`
    width: 80px;
    height: 80px;
    background: linear-gradient(to bottom, #A7CEFD, #F5E1FF);
    border: none;
    border-radius: 15px;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: rgb(112, 175, 216);
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
    }
`;