import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-5xl font-bold text-primary-light">
        Welcome
      </Text>
      <Link href={{ pathname: "/movie/[id]", params: { id: "avengers" } }}>Avengers</Link>
      
    </View>
  );
}
