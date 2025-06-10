import styled from "styled-components";


export const FormContainer = styled.form`
 align-items:center;
 display:flex;
 flex-direction: column;
 width:60%
`;

export const InputWrapper = styled.div`
  position: relative;
  width:100%;
`;

export const IconWrapper1 = styled.div`
  position: absolute;
  right: 11%;   /* Ajusta para o canto direito */
  top: 75%;
  transform: translateY(-50%);  /* Centraliza verticalmente */
  cursor: pointer;
  color: #666;

  &:hover {
    color: #007bff;
  }
`;


export const IconWrapper3 = styled.div`
  position: absolute;
  top: 72%;
  right: 12%;
`;

export const IconWrapper2 = styled.div`
  position: absolute;
  top: 90%;
  right: 12%;
`;

export const divButton = styled.div`
  display: flex;  
  justify-content: center;
  margin-top: none;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  margin-top:5px;
  left:30%;
`;
