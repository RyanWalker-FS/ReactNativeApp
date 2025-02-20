import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Switch,
  Button,
  Text,
  View,
  Platform,
} from "react-native";
import * as Network from "expo-network";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./Details";
import Categories from "./Categories";
import styles from "./Appstyle";
import Heading from "./components/Heading";
import ListContainer from "./components/ListContainer";
function HomeScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  Network.getNetworkStateAsync().then((data) => {
    console.log(data);
  });
  return (
    <SafeAreaView style={styles.container}>
      <Text style={(styles.largeHeading, styles.headingColor)}>Home</Text>
      <Heading>Hello</Heading>
      {Platform.OS === "ios" ? (
        <Text style={[styles.largeHeading, styles.italicFont]}>I am IOS</Text>
      ) : (
        <Text style={[styles.largeHeading, styles.italicFont]}>
          I am not IOS
        </Text>
      )}
      <Button
        title="Go to details"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        title="Go to Categories"
        onPress={() => navigation.navigate("Categories")}
      />
      <ListContainer />
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "App" }}
        />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Categories" component={Categories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
