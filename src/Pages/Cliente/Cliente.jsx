import {
  Container,
  ProfileSection,
  Avatar,
  NomeClienteWrapper,
  NomeCliente,
  EditIcon,
  StarRating,
  SectionTitle,
  AgendaList,
  AgendaItem,
  Status,
  AgendamentosSection
} from './Styles';


import React, { useState } from 'react';

const ClienteCard = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleEditPhoto = () => {
    alert('Editar foto do perfil!');
  };

  const handleEditName = () => {
    alert('Editar nome do cliente!');
  };

  const EditCameraIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 38 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3 0L9.823 3.44444H3.8C1.71 3.44444 0 4.99444 0 6.88889V27.5556C0 29.45 1.71 31 3.8 31H34.2C36.29 31 38 29.45 38 27.5556V6.88889C38 4.99444 36.29 3.44444 34.2 3.44444H28.177L24.7 0H13.3ZM19 25.8333C13.756 25.8333 9.5 21.9756 9.5 17.2222C9.5 12.4689 13.756 8.61111 19 8.61111C24.244 8.61111 28.5 12.4689 28.5 17.2222C28.5 21.9756 24.244 25.8333 19 25.8333Z"
        fill="#063D61"
      />
    </svg>
  );


  const AvatarIcon = () => (
    <svg
      width="120"
      height="135"
      viewBox="0 0 130 135"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
    >
      <path
        d="M65 67.5C82.9562 67.5 97.5 52.3969 97.5 33.75C97.5 15.1031 82.9562 0 65 0C47.0438 0 32.5 15.1031 32.5 33.75C32.5 52.3969 47.0438 67.5 65 67.5ZM65 84.375C43.3062 84.375 0 95.6812 0 118.125V135H130V118.125C130 95.6812 86.6937 84.375 65 84.375Z"
        fill="white"
      />
    </svg>
  );

  const EditPencilIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 38 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M4.75 26.5937V32.375H10.6875L28.1992 15.3241L22.2617 9.54286L4.75 26.5937ZM32.7908 10.8533C33.4083 10.252 33.4083 9.28078 32.7908 8.67953L29.0858 5.07203C28.4683 4.47078 27.4708 4.47078 26.8533 5.07203L23.9558 7.89328L29.8933 13.6745L32.7908 10.8533Z"
          fill="#063D61"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="38" height="37" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <Container>
      <ProfileSection>
        <Avatar>
          <AvatarIcon />
          <EditIcon position="avatar" onClick={handleEditPhoto} aria-label="Editar foto do perfil">
            <EditCameraIcon />
          </EditIcon>
        </Avatar>

        <NomeClienteWrapper>
          <NomeCliente>NOME DO CLIENTE</NomeCliente>
          <EditIcon position="nome" onClick={handleEditName} aria-label="Editar nome do cliente">
            <EditPencilIcon />
          </EditIcon>
        </NomeClienteWrapper>

        <StarRating>★★★★★</StarRating>
      </ProfileSection>

      <AgendamentosSection>
        <SectionTitle>Próximos agendamentos:</SectionTitle>
        <AgendaList>
          <AgendaItem>
            10/06/2025 - 14:30 <Status status="confirmado">CONFIRMADO</Status>
          </AgendaItem>
          <AgendaItem>
            15/09/2025 - 16:00 <Status status="confirmado">CONFIRMADO</Status>
          </AgendaItem>
        </AgendaList>

        <SectionTitle>Agendamentos anteriores:</SectionTitle>
        <AgendaList>
          <AgendaItem>
            02/06/2025 - 14:30 <Status status="finalizado">FINALIZADO</Status>
          </AgendaItem>
          <AgendaItem>
            01/06/2025 - 16:00 <Status status="cancelado">CANCELADO</Status>
          </AgendaItem>
        </AgendaList>
      </AgendamentosSection>    
    </Container>
  );
};

export default ClienteCard;
