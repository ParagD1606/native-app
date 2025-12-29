import { Text, View } from "react-native";
import "../../global.css"
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-primary">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 px-4 py-2 text-light-100 bg-primary rounded">
        Go to Onboarding
      </Link>
    </View>
  );
}
