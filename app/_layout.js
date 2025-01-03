import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Stack } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <Stack 
      screenOptions={{
        cardStyle: { backgroundColor: "#ffffff" },
        headerStyle: {
          height: 110,
          backgroundColor: "#95a5a6",
          borderBottomWidth: 5,
          borderBottomColor: "#34495e",
        },
        headerTitleStyle: { 
          color: "#ffffff", 
          fontSize: 24 
        },
        headerTitleAlign: "center",
      }}
    >

    <Stack.Screen name="index" options={{ headerTitle: "Home" }} />    
    <Stack.Screen name="P46_1" options={{ headerTitle: "암기 화면" }} />
    <Stack.Screen name="P47_1" options={{ headerTitle: "문제1 화면" }} />
    <Stack.Screen name="P49" options={{ headerTitle: "문제2 화면" }} />
    <Stack.Screen name="P51_1" options={{ headerTitle: "문제3 화면" }} />
    <Stack.Screen name="P52_1" options={{ headerTitle: "일기 작성 화면" }} />
  </Stack>
  );
}
