import { StyleSheet } from "react-native";

export const getStyles = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: "white",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 40,
      padding: 36,
      display: "flex",
      flexDirection: "row",
    },
  });
};
