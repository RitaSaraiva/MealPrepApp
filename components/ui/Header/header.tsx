import { Text, View } from "react-native";

const Header = () => {
  return (
    <View
      style={{
        height: 80,
        backgroundColor: "white",
        justifyContent: "flex-end",
        padding: 16,
      }}
    >
      <Text>
        Good Morning, <Text style={{ fontWeight: "bold" }}>Rita</Text>
      </Text>
    </View>
  );
};

export default Header;
