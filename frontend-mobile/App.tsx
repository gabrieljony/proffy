import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppLoading } from "expo";
import AppStack from "./src/routes/AppStack";

import {
  Ubuntu_400Regular,
  Ubuntu_700Bold,
  useFonts,
} from "@expo-google-fonts/ubuntu";

export default function App() {
  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
}
