import 'react-native-gesture-handler';
import Navigations from './src/Navigation';
import { Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { PaperProvider } from 'react-native-paper';
import { en, registerTranslation } from 'react-native-paper-dates';

export default function App() {

  const dim = Dimensions.get('screen');
  console.log("[App.tsx]: " + dim.width + "x" + dim.height);
  const [fontsLoaded] = useFonts({
    'LexendThin': require('./assets/fonts/Lexend/Lexend-Thin.ttf'),
    'LexendExtraLight': require('./assets/fonts/Lexend/Lexend-ExtraLight.ttf'),
    'LexendLight': require('./assets/fonts/Lexend/Lexend-Light.ttf'),
    'LexendRegular': require('./assets/fonts/Lexend/Lexend-Regular.ttf'),
    'LexendMedium': require('./assets/fonts/Lexend/Lexend-Medium.ttf'),
    'LexendBold': require('./assets/fonts/Lexend/Lexend-Bold.ttf'),
    'LexendSemiBold': require('./assets/fonts/Lexend/Lexend-SemiBold.ttf'),
    'LexendExtraBold': require('./assets/fonts/Lexend/Lexend-ExtraBold.ttf'),
    'LexendBlack': require('./assets/fonts/Lexend/Lexend-Black.ttf'),
  });

  registerTranslation('en', en);

  if (!fontsLoaded) return null;

  return (
    <PaperProvider>
      <Navigations />
    </PaperProvider>
  );
}
