import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    alignItems: "center",
  },
  largeHeading: {
    fontSize: 30,
    color: "#fff",
    marginTop: 20,
    fontWeight: "bold",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listcontainer: {
    flexGrow: 0,
    flexShrink: 0,
  },
});

export default styles;
