import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const WeatherSelector = ({ selectedWeather, setSelectedWeather }) => {
  const handleWeatherSelect = (weather) => setSelectedWeather(weather);

  return (
    <View style={styles.weatherRow}>
      <Text style={styles.weatherText}>날씨</Text>
      {["☀️", "☁️", "☔", "☃️"].map((weather) => (
        <TouchableOpacity
          key={weather}
          style={[
            styles.weatherIcon,
            selectedWeather === weather && styles.selectedWeather,
          ]}
          onPress={() => handleWeatherSelect(weather)}
        >
          <Text style={styles.weatherIconText}>{weather}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  weatherRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 5,
  },
  weatherText: {
    fontSize: 16,
    marginRight: 10,
  },
  weatherIcon: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  selectedWeather: {
    borderColor: "#007BFF",
    backgroundColor: "#E0F0FF",
  },
  weatherIconText: {
    fontSize: 24,
  },
});

export default WeatherSelector;
