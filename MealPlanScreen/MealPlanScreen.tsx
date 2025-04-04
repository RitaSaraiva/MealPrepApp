import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const MealPlanScreen = () => {
  return (
    <SafeAreaProvider>
      <View>
        <Text>Meal Plan</Text>
      </View>
    </SafeAreaProvider>
  );
};

export default MealPlanScreen;
