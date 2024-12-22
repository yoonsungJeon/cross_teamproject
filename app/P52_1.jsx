import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

const P52_1 = () => {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topSpacing}></View>

      <View style={styles.header}>
        <TextInput style={styles.headerInput} placeholder="년" />
        <TextInput style={styles.headerInput} placeholder="월" />
        <TextInput style={styles.headerInput} placeholder="일" />
        <TextInput style={styles.headerInput} placeholder="요일" />
        <TextInput style={styles.headerInput} placeholder="날씨" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>나의 하루</Text>
        <View style={styles.row}>
          <Text style={styles.label}>방문한 장소</Text>
          <TextInput style={styles.input} placeholder="내용 입력" />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>오늘 만난 사람</Text>
          <TextInput style={styles.input} placeholder="내용 입력" />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>구입한 물건</Text>
          <TextInput style={styles.input} placeholder="내용 입력" />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>지출 금액</Text>
          <TextInput style={styles.input} placeholder="내용 입력" />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>오늘의 뉴스</Text>
          <TextInput style={styles.input} placeholder="내용 입력" />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>시간</Text>
        {[
          "오전 5시 - 8시",
          "오전 8시 - 12시",
          "오후 12시 - 5시",
          "오후 5시 - 10시",
        ].map((time, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.label}>{time}</Text>
            <TextInput style={styles.input} placeholder="내용 입력" />
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>내일 계획</Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          placeholder="계획 입력"
          multiline
        />
      </View>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => router.push("/")}
      >
        <Text style={styles.nextButtonText}>홈으로 가기</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  topSpacing: {
    height: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  headerInput: {
    width: 60,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    textAlign: "center",
    backgroundColor: "#fff",
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    width: 120,
    fontSize: 14,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
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

export default P52_1;
