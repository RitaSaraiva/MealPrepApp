import previewUserImage from "@/assets/images/placeholder/userImagePreview.png";
import { Image, Text, View } from "react-native";
import { getStyles } from "./headerStyle";

const Header = () => {
  const styles = getStyles();
  return (
    <View style={styles.container}>
      <Text>
        Good Morning, <Text style={{ fontWeight: "bold" }}>Rita</Text>
      </Text>
      <Image source={previewUserImage} />
    </View>
  );
};

export default Header;
