import { useState, useEffect } from "react";
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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./Details";
import Categories from "./Categories";
import styles from "./Appstyle";
import Heading from "./components/Heading";
import ListContainer from "./components/ListContainer";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
function HomeScreen() {
  const [data, setData] = useState([]);

  // Check network state
  useEffect(() => {
    Network.getNetworkStateAsync().then((data) => {
      console.log({ data });
    });
  }, []);

  // Fetch unit data
  useEffect(() => {
    fetch(`https://crudapi-demo-5cd002fa802f.herokuapp.com/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  const Tab = createNativeStackNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.largeHeading}>Student Database</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            headerRight: () => (
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            ),
            tabBarIcon: () => <Icon name="home" size={24} color="#4F8EF7" />,
          }}
        />
        <Tab.Screen
          name="Input"
          component={Details}
          options={{
            title: "Input",
            tabBarIcon: () => (
              <Icon name="stats-chart" size={24} color="#4F8EF7" />
            ),
          }}
        />
        <Tab.Screen
          name="Categories"
          component={Categories}
          options={{
            title: "List",
            tabBarIcon: () => <Icon name="list" size={24} color="#4F8EF7" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
