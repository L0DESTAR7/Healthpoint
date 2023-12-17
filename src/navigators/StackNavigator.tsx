import { createStackNavigator } from "@react-navigation/stack";
import DrawerButton from "../components/DrawerButton";
import headerStyle from "../styles/HeaderStyle";
import { useColorScheme } from "nativewind";
import isDark from "../util/isDark";
import headerStyleDark from "../styles/HeaderStyleDark";
import leftHeaderStyle from "../styles/LeftHeaderStyle";
import rightHeaderStyle from "../styles/RightHeaderStyle";
import NotificationButton from "../components/NotificationButton";
import HeaderTitle from "../components/HeaderTitle";


const Stack = createStackNavigator();
interface StackNavigatorProps {
  children: React.ReactNode;
}

export default function StackNavigator({ children }: StackNavigatorProps) {

  const { colorScheme: theme } = useColorScheme();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home"
        options={
          {
            headerLeft: DrawerButton,
            headerLeftContainerStyle: leftHeaderStyle,
            headerTitle: HeaderTitle,
            headerRight: NotificationButton,
            headerRightContainerStyle: rightHeaderStyle,
            headerStyle: isDark(theme) ? headerStyleDark : headerStyle,
            headerTitleAlign: "center"
          }
        }
      >
        {() => children}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
