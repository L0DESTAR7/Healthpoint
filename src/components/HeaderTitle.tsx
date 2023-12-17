import { Text } from "react-native";
import DefaultUser from "../fixtures/DefaultUser";



export default function HeaderTitle() {

  const username = DefaultUser.name;

  return (
    <Text className="font-lexend-semibold text-spring-500 text-3xl md:text-4xl lg:text-6xl">
      <Text className="font-lexend-medium text-spring-950 dark:text-white">
        Hello, </Text>{username + "."}
    </Text>
  );
}
