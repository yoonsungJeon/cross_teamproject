import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

const P51_1 = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const router = useRouter();

  const foodItems = [
    { id: 1, name: "음식1", image: require("./images/food1.png") },
    { id: 2, name: "음식2", image: require("./images/food2.png") },
    { id: 3, name: "음식3", image: require("./images/food3.png") },
    { id: 4, name: "음식4", image: require("./images/food4.png") },
    { id: 5, name: "음식5", image: require("./images/food5.png") },
    { id: 6, name: "음식6", image: require("./images/food6.png") },
    { id: 7, name: "음식7", image: require("./images/food7.png") },
    { id: 8, name: "음식8", image: require("./images/food8.png") },
    { id: 9, name: "음식9", image: require("./images/food9.png") },
    { id: 10, name: "음식10", image: require("./images/food10.png") },
  ];

  const toggleSelect = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        앞서 기억해 둔 당뇨예방밥상 음식을 모두 찾아 동그라미 하세요.
      </Text>
      <ScrollView contentContainerStyle={styles.grid}>
        {foodItems.map((food) => (
          <View key={food.id} style={styles.foodItem}>
            <TouchableOpacity
              onPress={() => toggleSelect(food.id)}
              style={styles.foodRow}
            >
              <Image source={food.image} style={styles.foodImage} />
              {selectedItems.includes(food.id) && (
                <Text style={styles.circle}>⭕</Text>
              )}
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => {
          router.push("/");
        }}
      >
        <Text style={styles.nextButtonText}>홈으로 가기기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
  },
  foodItem: {
    width: "45%",
    marginBottom: 20,
    alignItems: "center",
  },
  foodRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  foodImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  circle: {
    fontSize: 20,
    color: "green",
  },
  nextButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default P51_1;
