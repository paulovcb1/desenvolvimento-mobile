import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  useFonts,
  ChakraPetch_600SemiBold,
  ChakraPetch_700Bold,
} from '@expo-google-fonts/chakra-petch';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { Routes } from './src/routes';
import { COLORS } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    ChakraPetch_600SemiBold,
    ChakraPetch_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <View style={{ flex: 1, backgroundColor: COLORS.BACKGROUND }} />;
  }

  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
}
