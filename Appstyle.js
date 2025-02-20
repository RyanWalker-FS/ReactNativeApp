import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  largeHeading: {
    fontSize: 80,
    fontStyle: "italic",
  },
  listcontainer: {
    flexGrow: 0,
    flexShrink: 0,
  },
  headingColor: {
    ...Platform.select({
      android: {
        color: "yellow",
      },
      ios: {
        color: "red",
        fontSize: 80,
      },
      default: {
        color: "blue",
      },
    }),
  },
});

export default styles;
