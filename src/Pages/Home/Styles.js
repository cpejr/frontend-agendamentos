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

export const ContainerCarrossel = styled.div`
  width: 50%;
  height: 50vh; /* Faz com que o container ocupe 100% da altura da janela */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Ajusta o conteúdo para começar do topo */
  overflow-y: auto; /* Permite rolagem vertical, mas controlada */
`;

export const ContainerIcones = styled.div`
 margin-top: 50px; /* Ajuste o valor de acordo com o seu layout */
  width: 100%; /* Garante que o container ocupe toda a largura disponível */
  padding: 20px; /* Adiciona um padding para algum espaçamento interno se necessário */

`;


