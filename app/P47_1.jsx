import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import NumberTable from "./components/P47_1/NumberTable";
import FoodTable from "./components/P47_1/FoodTable";
import AnswerButton from "./components/P47_1/AnswerButton";
import ActionButton from "./components/P47_1/ActionButton";

export default function P47_1() {
  const router = useRouter();
  const [foods, setFoods] = useState([
    { id: 1, name: "", image: require("./images/시금치무침.webp") },
    { id: 2, name: "", image: require("./images/고등어구이.webp") },
    { id: 3, name: "", image: require("./images/연어샐러드.webp") },
    { id: 4, name: "", image: require("./images/현미밥.webp") },
    { id: 5, name: "", image: require("./images/시금치된장국.webp") },
    { id: 6, name: "", image: require("./images/호박전.webp") },
  ]);

  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (id, value) => {
    setFoods((prevFoods) =>
      prevFoods.map((food) =>
        food.id === id ? { ...food, name: value } : food
      )
    );
  };

  const handleCheckAnswers = () => {
    setShowResults(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        앞서 기억해 둔 당뇨 예방 밥상 음식에 해당하는 자리의 번호를 입력하세요.
      </Text>
      <NumberTable />
      <FoodTable
        foods={foods}
        showResults={showResults} // 결과 표시 상태 전달
        onInputChange={handleInputChange}
      />
      <AnswerButton onPress={handleCheckAnswers} />

      <ActionButton
        title="홈 화면으로 돌아가기"
        onPress={() => {
          router.push("/Home");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
