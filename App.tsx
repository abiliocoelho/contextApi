import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Count from "./src/components/Count";
import Mirror from "./src/components/Mirror";
import CountProvider from "./src/context/count";
export default function App() {
  return (
    <CountProvider>
      <View style={styles.container}>
        <Count />
        <Mirror />
      </View>
    </CountProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
