import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NumberTable = () => {
  return (
    <View style={styles.table}>
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <View key={index + 1} style={styles.numberCell}>
            <Text style={styles.numberText}>{index + 1}.</Text>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  numberCell: {
    width: "45%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    borderRadius: 5,
  },
  numberText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default NumberTable;
