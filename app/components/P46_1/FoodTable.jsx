import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const FoodTable = () => {
  const foods = [
    {
      id: 1,
      name: "1. 시금치 무침",
      image: require("../../images/시금치무침.webp"),
    },
    { id: 2, name: "2. 호박전", image: require("../../images/호박전.webp") },
    {
      id: 3,
      name: "3. 고등어 구이",
      image: require("../../images/고등어구이.webp"),
    },
    {
      id: 4,
      name: "4. 연어 샐러드",
      image: require("../../images/연어샐러드.webp"),
    },
    { id: 5, name: "5. 현미밥", image: require("../../images/현미밥.webp") },
    {
      id: 6,
      name: "6. 시금치 된장국",
      image: require("../../images/시금치된장국.webp"),
    },
  ];

  return (
    <View style={styles.table}>
      {foods.map((food) => (
        <View key={food.id} style={styles.cell}>
          <Image source={food.image} style={styles.image} />
          <Text style={styles.text}>{food.name}</Text>
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
    marginTop: 10,
  },
  cell: {
    width: "45%",
    alignItems: "center",
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default FoodTable;
