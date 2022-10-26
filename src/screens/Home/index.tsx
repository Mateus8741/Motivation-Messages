import React, { useEffect, useState } from "react";

import { api } from "@/services/api";

import {
  Background,
  ContainerMessage,
  IdMessage,
  Message,
  ContainerId,
  ScrollContainer,
} from "./styles";
import { StatusBar, RefreshControl } from "react-native";

interface Message {
  id: string;
  advice: string;
}

export function Home() {
  const [data, setData] = useState<Message>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    onRefresh();
  }, []);

  function onRefresh() {
    api
      .get("/advice")
      .then((response) => {
        setData(response.data.slip);
        setLoading(false);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    console.log(data);
  }

  return (
    <Background>
      <StatusBar barStyle={`light-content`} />
      <ScrollContainer
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={() => onRefresh()} />
        }
      >
        <ContainerMessage>
          <ContainerId>
            <IdMessage>{data?.id}</IdMessage>
          </ContainerId>
          <Message>{data?.advice}</Message>
        </ContainerMessage>
      </ScrollContainer>
    </Background>
  );
}