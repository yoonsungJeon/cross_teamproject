import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const DateInputRow = ({
  year,
  setYear,
  month,
  setMonth,
  day,
  setDay,
  dayOfWeek,
  setDayOfWeek,
}) => {
  return (
    <View style={styles.dateRow}>
      <TextInput
        style={styles.dateInput}
        placeholder="년"
        keyboardType="numeric"
        returnKeyType="done"
        value={year}
        onChangeText={setYear}
      />
      <TextInput
        style={styles.dateInput}
        placeholder="월"
        keyboardType="numeric"
        returnKeyType="done"
        value={month}
        onChangeText={setMonth}
      />
      <TextInput
        style={styles.dateInput}
        placeholder="일"
        keyboardType="numeric"
        returnKeyType="done"
        value={day}
        onChangeText={setDay}
      />
      <TextInput
        style={styles.dateInput}
        placeholder="요일"
        value={dayOfWeek}
        onChangeText={setDayOfWeek}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dateRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    textAlign: "center",
    width: "20%",
  },
});

export default DateInputRow;
