import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useRouter } from "expo-router";

import DateInputRow from "./components/P46_1/DateInputRow";
import WeatherSelector from "./components/P46_1/WeatherSelector";
import FoodTable from "./components/P46_1/FoodTable";
import ActionButton from "./components/P46_1/ActionButton";

export default function P46_1() {
  const router = useRouter();
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [selectedWeather, setSelectedWeather] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        오늘의 날짜를 입력하고, 날씨를 선택해주세요.
      </Text>

      <DateInputRow
        year={year}
        setYear={setYear}
        month={month}
        setMonth={setMonth}
        day={day}
        setDay={setDay}
        dayOfWeek={dayOfWeek}
        setDayOfWeek={setDayOfWeek}
      />

      <WeatherSelector
        selectedWeather={selectedWeather}
        setSelectedWeather={setSelectedWeather}
      />

      <ActionButton
        title="입력한 날짜, 날씨 확인하기"
        onPress={() => {
          alert(`날짜: ${year}-${month}-${day}, 날씨: ${selectedWeather}`);
        }}
      />

      <Text style={styles.subtitle}>당뇨예방밥상 기억하기</Text>
      <Text>
        다음은 당뇨예방에 좋은 저염식 밥상입니다. 아래의 음식과 그 위치를
        기억해주세요!
      </Text>
      <FoodTable />

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
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5,
  },
});
