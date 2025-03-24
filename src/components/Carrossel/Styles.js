import styled from "styled-components";

export const StyledImage = styled.img`
  width: 100%;  /* Ajusta a largura para 100% da largura do carrossel */
  height: auto; /* Ajusta a altura proporcionalmente à largura da imagem */
  object-fit: cover; /* Faz com que a imagem preencha a área sem distorcer */
  border-radius: 50px;
`;
