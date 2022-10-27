import React, { useRef } from "react";

import { Container, Subtitle, Title } from "./styles";

import { useNavigation } from "@react-navigation/native";

import Lottie from "lottie-react-native";

import Vain from "@/assets/messageLottie.json";
import { Button } from "@/components/Button";

export function Wellcome() {
  const navigation = useNavigation<any>();
  function toHome() {
    navigation.navigate("Home");
  }
  return (
    <Container>
      <Title>Está em um dia ruim?</Title>
      <Lottie
        resizeMode="contain"
        autoPlay
        style={{
          width: 350,
          height: 350,
          backgroundColor: "transparent",
        }}
        source={Vain}
      />
      <Subtitle>Clique no botão e melhore seu dia!</Subtitle>
      <Button title="Ganhe sua menssagem! 😊" onPress={toHome} />
    </Container>
  );
}
