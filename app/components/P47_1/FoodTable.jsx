import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

const FoodTable = ({ foods, showResults, onInputChange }) => {
  // 고정된 결과 값
  const fixedResults = ["1", "3", "4", "5", "6", "2"];

  return (
    <View style={styles.foodTable}>
      {foods.map((food, index) => (
        <View key={food.id} style={styles.foodCell}>
          {food.image && <Image source={food.image} style={styles.foodImage} />}
          <TextInput
            style={styles.input}
            value={food.name}
            keyboardType="numeric"
            returnKeyType="done"
            onChangeText={(value) => onInputChange(food.id, value)}
            placeholder={`숫자 입력`}
          />
          {showResults && index < fixedResults.length && (
            <Text style={styles.resultText}>{fixedResults[index]}</Text>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  foodTable: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
  },
  foodCell: {
    width: "30%",
    alignItems: "center",
    marginBottom: 20,
  },
  foodImage: {
    width: 80,
    height: 80,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 5,
    width: "80%",
    textAlign: "center",
  },
  resultText: {
    marginTop: 5,
    fontSize: 14,
    color: "#333",
  },
});

export default FoodTable;
