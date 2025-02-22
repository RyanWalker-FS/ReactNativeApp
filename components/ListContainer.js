import { StatusBar } from "expo-status-bar";
import { StyleSheet, FlatList, View } from "react-native";
import Listitem from "./ListItem";
import styles from "../Appstyle";

export default function ListContainer({ data, children }) {
  const renderItem = ({ item }) => <Listitem>{item.title}</Listitem>;
}
