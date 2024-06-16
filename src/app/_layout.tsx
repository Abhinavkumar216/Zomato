import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    MetropolisBold: require("@assets/fonts/Metropolis-Bold.otf"),
    MetropolisSemiBold: require("@assets/fonts/Metropolis-SemiBold.otf"),
    MetropolisMedium: require("@assets/fonts/Metropolis-Medium.otf"),
    MetropolisRegular: require("@assets/fonts/Metropolis-Regular.otf"),
    OpenSansRegular: require("@assets/fonts/OpenSans-Regular.ttf"),
    OpenSansSemiBold: require("@assets/fonts/OpenSans-Semibold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
