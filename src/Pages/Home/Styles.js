import styled from "styled-components";

export const Container = styled.div`
  font-size: 1.2rem;
  overflow-x: hidden; /* Impede a rolagem horizontal */
  margin: 0; /* Remove margens padrão */
  padding: 0; /* Remove espaçamentos padrão */
  width: 100%;
  height: 100vh; /* Faz com que o container ocupe 100% da altura da janela */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Ajusta o conteúdo para começar do topo */
  overflow-y: auto; /* Permite rolagem vertical, mas controlada */
`;


