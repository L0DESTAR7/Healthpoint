import { useColorScheme } from "nativewind";
import { Switch } from "react-native";


export default function ThemeSwitch() {

  const { colorScheme: theme, toggleColorScheme: toggleTheme } = useColorScheme();
  console.log("[ThemeSwitch.tsx]: " + theme);

  return (
    <Switch onChange={toggleTheme} value={theme === 'dark'}></Switch>
  )
}
