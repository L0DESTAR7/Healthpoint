import { NavigationContainer } from '@react-navigation/native';
import Navigations from './src/Navigations';
import { Dimensions } from 'react-native';
import { useFonts } from 'expo-font';

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
    'LexendExtraBold': require('./assets/fonts/Lexend/Lexend-ExtraBold.ttf'),
    'LexendBlack': require('./assets/fonts/Lexend/Lexend-Black.ttf'),
  });

  // TODO: Implement a Text Component wrapper to avoid having to 
  //       style every text with font-lexend... Instead have it 
  //       apply font-lexend (regular) by default.

  return (
    <NavigationContainer>
      <Navigations />
    </NavigationContainer>
  );
}
