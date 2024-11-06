import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl text-blue-300 font-semibold text-center">
        Home
      </Text>
    </View>
  );
}
