import 'react-native-gesture-handler';
import Navigations from './src/Navigation';
import { Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { PaperProvider } from 'react-native-paper';
import { en, registerTranslation } from 'react-native-paper-dates';
import { AppProvider, UserProvider } from '@realm/react';
import LoginComponent from './src/components/LoginComponent';
import { MainRealmContext } from './src/contexts/MainRealmContext';

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

  const {
    RealmProvider: MainRealmProvider,
    useRealm: useMainRealm,
    useQuery: useMainQuery,
    useObject: useMainObject } = MainRealmContext;
  return (
    <AppProvider id={"devicesync-ynnpt"}>
      <UserProvider fallback={LoginComponent}>
        <MainRealmProvider
          sync={{
            flexible: true,
            initialSubscriptions: {
              update(subs: any, realm: any) {
                subs.add(realm.objects('User'))
                subs.add(realm.objects('Glucose'))
                subs.add(realm.objects('Hydration'))
                subs.add(realm.objects('Reminder'))
                subs.add(realm.objects('PhysicalActivity'))
                subs.add(realm.objects('Insulin'))
                subs.add(realm.objects('Ingredient'))
              },
              rerunOnOpen: true
            },
          }}
        >
          <PaperProvider>
            <Navigations />
          </PaperProvider>
        </MainRealmProvider>
      </UserProvider>
    </AppProvider>
  );
}
