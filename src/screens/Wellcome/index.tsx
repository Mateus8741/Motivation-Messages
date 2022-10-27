import React, { useRef } from "react";

import { Container, Subtitle, Title } from "./styles";

import { useNavigation } from "@react-navigation/native";

import Lottie from "lottie-react-native";

import Vain from "@/assets/messageLottie.json";

import { Button } from "@/components/Button";

import { StatusBar } from "react-native";

export function Wellcome() {
  const navigation = useNavigation<any>();
  function toHome() {
    navigation.navigate("Home");
  }
  return (
    <Container>
      <StatusBar barStyle={`light-content`} />
      <Title>Have a bad day?</Title>
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
      <Subtitle>Click and improve your day!</Subtitle>
      <Button title="Earn your message! 😊" onPress={toHome} />
    </Container>
  );
}
