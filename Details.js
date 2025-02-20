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

export default function Details({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.largeHeading}>Details</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="Go to Categories"
        onPress={() => navigation.navigate("Categories")}
      />
    </SafeAreaView>
  );
}
