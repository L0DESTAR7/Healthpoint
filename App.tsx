import 'react-native-gesture-handler';
import Navigations from './src/Navigation';
import { Dimensions, Pressable, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { mainRealmContext } from './src/contexts/MainRealmContext';
import { AppProvider, UserProvider, useAuth } from '@realm/react';

export default function App() {

  const dim = Dimensions.get('screen');
  console.log("[App.tsx]: " + dim.width + "x" + dim.height);
  const { RealmProvider: MainRealmProvider, useRealm: useMainRealm, useQuery: useMainQuery, useObject: useMainObject } = mainRealmContext;
  const LoginComponent = () => {
    // Calling `useAuth()` requires AppProvider to be a parent
    const { logInWithAnonymous, result } = useAuth();
    return (
      <View>
        <Pressable onPress={logInWithAnonymous}>
          <Text>Log In</Text>
        </Pressable>
        {result.error && <Text>{result.error.message}</Text>}
      </View>
    );
  };
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

  // TODO: Implement a Text Component wrapper to avoid having to 
  //       style every text with font-lexend... Instead have it 
  //       apply font-lexend (regular) by default.

  if (!fontsLoaded) return null;

  return (
    <AppProvider id="devicesync-ynnpt">
      <UserProvider fallback={LoginComponent}>
        <MainRealmProvider sync={{
            flexible: true,
            initialSubscriptions: {
              update(subs, realm) {
                subs.add(realm.objects('User'))
                subs.add(realm.objects('Glucose'))
                subs.add(realm.objects('Hydration'))
                subs.add(realm.objects('Reminder'))
                subs.add(realm.objects('PhysicalActivity'))
                subs.add(realm.objects('Insuline'))
                subs.add(realm.objects('Ingredient'))
              },
              rerunOnOpen: true
            },
          }}>
         <Navigations />
        </MainRealmProvider>
      </UserProvider>
    </AppProvider>
  );
}

