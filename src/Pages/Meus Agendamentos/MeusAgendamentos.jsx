import React, { useState } from "react";
import {
  Title,
  Container,
  AppointmentCard,
  ServiceName,
  AppointmentInfo,
  CardsWrapper,
  NavigationButton
} from "./Styles.js";
import ButtonSchedule from "../../components/commons/ButtonSchedule/ButtonSchedule.jsx";

function MeusAgendamentos() {
    const agendamentos = [
        {
            servico: "Unhas",
            data: "07/02/2024",
            horario: "10:00",
            local: "Figma",
            profissional: "Gustavo"
        },
        {
            servico: "Corte",
            data: "17/02/2024",
            horario: "10:30",
            local: "Figma",
            profissional: "Gustavo"
        },
        {
            servico: "Sobrancelha",
            data: "20/02/2024",
            horario: "14:00",
            local: "Figma",
            profissional: "Gustavo"
        },
        {
            servico: "Massagem",
            data: "21/02/2024",
            horario: "09:00",
            local: "Figma",
            profissional: "Gustavo"
        },
        {
            servico: "Pedicure",
            data: "25/02/2024",
            horario: "15:00",
            local: "Figma",
            profissional: "Gustavo"
        }
    ];

    const [paginaAtual, setPaginaAtual] = useState(0);
    const itensPorPagina = 4;
    const totalPaginas = Math.ceil(agendamentos.length / itensPorPagina);

    const agendamentosVisiveis = agendamentos.slice(
        paginaAtual * itensPorPagina,
        paginaAtual * itensPorPagina + itensPorPagina
    );

    return (
        <Container>
            <Title>Meus agendamentos</Title>
            <CardsWrapper>
                {agendamentosVisiveis.map((agendamento, index) => (
                    <AppointmentCard key={index}>
                        <ServiceName>{agendamento.servico}</ServiceName>
                        <AppointmentInfo>Data: {agendamento.data}</AppointmentInfo>
                        <AppointmentInfo>Horário: {agendamento.horario}</AppointmentInfo>
                        <AppointmentInfo>Local: {agendamento.local}</AppointmentInfo>
                        <AppointmentInfo>Profissional: {agendamento.profissional}</AppointmentInfo>
                    </AppointmentCard>
                ))}
            </CardsWrapper>
            {totalPaginas > 1 && (
                <NavigationButton
                    onClick={() => setPaginaAtual((prev) => (prev + 1) % totalPaginas)}
                >
                    Mais agendamentos
                </NavigationButton>
            )}
            <ButtonSchedule>
                Novo agendamento
            </ButtonSchedule>
        </Container>
    );
}

export default MeusAgendamentos;
