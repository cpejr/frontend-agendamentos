import React from "react";
import { Container, LeftSide, RightSide, ProfileImage, Name, Stars, Box, Title, Text } from "./Styles";

export default function PerfilProfissional() {
  return (
    <Container>
      <LeftSide>
        <ProfileImage />
        <Name>NOME DO PROFISSIONAL</Name>
        <Stars>★★★★★</Stars>
      </LeftSide>

      <RightSide>
        <Box>
          <Title>Desde:</Title>
          <Text>13/05/2025</Text>

          <Title>Área de Atuação:</Title>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

          <Title>Descrição:</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Box>
      </RightSide>
    </Container>
  );
}

