import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Overview from "../components/diabetes/Overview";
import Simulation from "../components/diabetes/Simulation";
import TopTabBar from "../components/diabetes/TopTabBar";

const Section = createMaterialTopTabNavigator();

export default function SectionNavigator() {

  return (
    <Section.Navigator initialRouteName="Overview"
      className="w-[88%] my-4 md:my-5 lg:my-7"
      tabBar={TopTabBar}
      backBehavior="none"
      screenOptions={{
        swipeEnabled: false, // TODO: Check is swiping in tabs interfers with charts. If no enable it. For now it's disabled.
      }}
    >
      <Section.Screen name="Overview" component={Overview}
      />
      <Section.Screen name="Simulation" component={Simulation}
      />
    </Section.Navigator>
  );
}
