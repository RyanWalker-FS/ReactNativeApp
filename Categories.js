import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Button,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import styles from "./Appstyle";

export default function Categories({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={(styles.largeHeading, styles.headingColor)}>Categories</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </SafeAreaView>
  );
}
