import { Montserrat_500Medium } from '@expo-google-fonts/montserrat/500Medium';
import { Montserrat_600SemiBold } from '@expo-google-fonts/montserrat/600SemiBold';
import { Poppins_400Regular } from '@expo-google-fonts/poppins/400Regular';
import { Poppins_500Medium } from '@expo-google-fonts/poppins/500Medium';
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins/600SemiBold';
import { useFonts } from '@expo-google-fonts/poppins/useFonts';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { Provider } from 'react-redux';

import { Colors } from '@/src/constants/Colors';
import { setupStore } from '@/src/store';

const store = setupStore();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              title: 'What do you want to watch?',
              headerTitleStyle: {
                fontFamily: 'Poppins_600SemiBold',
                fontSize: 18,
                color: Colors.light.text.primary,
              },
              headerTransparent: true,
            }}
          />
        </Stack>
      </ThemeProvider>
    </Provider>
  );
}
