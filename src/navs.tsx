import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Diabetes from "./screens/Diabetes";
import Food from "./screens/Food";
import Hydration from "./screens/Hydration";
import Exercice from "./screens/Exercice";
import Reminders from "./screens/Reminders";

const Tabs = createMaterialBottomTabNavigator();
// TODO: Add Drawer

export default function Navigations() {
  return (
    <Tabs.Navigator initialRouteName="Diabetes">
      <Tabs.Screen name="Diabetes" component={Diabetes} />
      <Tabs.Screen name="Food" component={Food} />
      <Tabs.Screen name="Hydration" component={Hydration} />
      <Tabs.Screen name="Exercice" component={Exercice} />
      <Tabs.Screen name="Reminders" component={Reminders} />
    </Tabs.Navigator>
  )
}
