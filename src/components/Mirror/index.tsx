import React from "react";
import { useCount } from "../../context/count";
import { View, Text, StyleSheet } from "react-native";

const Mirror: React.FC = () => {
  const { count } = useCount();
  return (
    <View>
      <Text style={styles.text}>{`Mirror: ${count}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    textAlign: "center",
  },
});

export default Mirror;
