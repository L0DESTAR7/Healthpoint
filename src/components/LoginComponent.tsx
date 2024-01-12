import { useAuth } from "@realm/react";
import { Pressable, Text, View } from "react-native";

export default function LoginComponent() {
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
