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
      <Text style={styles.largeHeading}>List of Students</Text>
    </SafeAreaView>
  );
}
