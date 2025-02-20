import { StatusBar } from "expo-status-bar";
import { StyleSheet, FlatList, View, Text } from "react-native";

export default function ListItem({ children }) {
  return (
    <View>
      <Text>{children}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
