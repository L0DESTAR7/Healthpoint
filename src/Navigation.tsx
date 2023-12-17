import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigators/StackNavigator";
import TabNavigator from "./navigators/TabNavigator";

export default function Navigations() {

  // TODO: Add Drawer
  return (
    <NavigationContainer>
      <StackNavigator>
        <TabNavigator>
        </TabNavigator>
      </StackNavigator>
    </NavigationContainer>
  )
}
