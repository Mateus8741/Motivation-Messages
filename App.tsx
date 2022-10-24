import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { api } from "@/services/api";


interface Pokemons {
  name: string;
}

export default function App() {
  const [data, setData] = useState<Pokemons>();

  useEffect(() => {
    api.get("/pokemon/type").then((response) => {
      setData(response.data);
    });
    
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>testando se funciona</Text>
      <Text>{data?.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
