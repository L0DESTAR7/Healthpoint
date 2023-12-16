import { useColorScheme } from "nativewind";
import { Switch } from "react-native";
import isDark from "../util/isDark";


export default function ThemeSwitch() {

  const { colorScheme: theme, toggleColorScheme: toggleTheme } = useColorScheme();
  console.log("[ThemeSwitch.tsx]: " + theme);

  return (
    <Switch onChange={toggleTheme} value={isDark(theme)}></Switch>
  )
}
