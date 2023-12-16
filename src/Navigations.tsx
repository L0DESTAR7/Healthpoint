import Diabetes from "./screens/Diabetes";
import Food from "./screens/Food";
import Hydration from "./screens/Hydration";
import Exercice from "./screens/Exercice";
import Reminders from "./screens/Reminders";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import bottomTabBarStyle from "./styles/bottomTabBarStyle";
import { useColorScheme } from "nativewind";
import isDark from "./util/isDark";
import bottomTabBarStyleDark from "./styles/bottomTabBarStyleDark";
import TabButton from "./components/TabButton";

const Tabs = createBottomTabNavigator();
// TODO: Add Drawer

export default function Navigations() {

  const { colorScheme: theme } = useColorScheme();

  return (
    <Tabs.Navigator initialRouteName="Diabetes"
      screenOptions={{
        headerShown: false,
        tabBarStyle: isDark(theme) ? bottomTabBarStyleDark : bottomTabBarStyle,
      }}>
      <Tabs.Screen name="Diabetes" component={Diabetes}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => { return (<TabButton {...props}></TabButton>) }
        }} />
      <Tabs.Screen name="Nutrition" component={Food}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => { return (<TabButton {...props}></TabButton>) }
        }} />
      <Tabs.Screen name="Hydration" component={Hydration}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => { return (<TabButton {...props}></TabButton>) }
        }} />
      <Tabs.Screen name="Exercice" component={Exercice}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => { return (<TabButton {...props}></TabButton>) }
        }} />
      <Tabs.Screen name="Reminders" component={Reminders}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => { return (<TabButton {...props}></TabButton>) }
        }} />
    </Tabs.Navigator>
  )
}
