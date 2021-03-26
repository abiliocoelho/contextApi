import React from "react";
import { useCount } from "../../context/count";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";
const Count: React.FC = () => {
  const { count, setCount } = useCount();
  return (
    <View>
      <Text style={styles.text}>{`Count: ${count}`}</Text>
      <TouchableOpacity
        onPress={() => setCount(count + 1)}
        style={styles.button}
      >
        <Icon name="plus" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
        style={styles.button}
      >
        <Icon name="minus" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "#7159c1",
    borderRadius: 6,
    width: 80,
  },
  text: {
    fontSize: 28,
    textAlign: "center",
  },
});

export default Count;
