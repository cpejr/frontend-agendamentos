import {
    Container,
    ProfileSection,
    Avatar,
    NomeCliente,
    EditIcon,
    StarRating,
    SectionTitle,
    AgendaList,
    AgendaItem,
    Status,
    AgendamentosSection
  } from './Styles';
  
  import ModalCliente from "../../components/ModalCliente/ModalCliente";
  import React, { useState } from 'react';
  
  const ClienteCard = () => {
    const [modalOpen, setModalOpen] = useState(false);
  
    return (
      <Container>
        <ProfileSection>
          <div style={{ position: 'relative' }}>
            <Avatar onClick={() => setModalOpen(true)} />
            <EditIcon />
          </div>
          <NomeCliente>NOME DO CLIENTE</NomeCliente>
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
  
        <ModalCliente open={modalOpen} onClose={() => setModalOpen(false)} />
      </Container>
    );
  };
  
  export default ClienteCard;
  
