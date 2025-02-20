import { StatusBar } from "expo-status-bar";
import { StyleSheet, FlatList, View } from "react-native";
import Listitem from "./ListItem";
import styles from "../Appstyle";

export default function ListContainer({ data, children }) {
  const Data = [
    { id: "123", title: "item 1" },
    { id: "456", title: "item 2" },
    { id: "789", title: "item 3" },
  ];
  const renderItem = ({ item }) => <Listitem>{item.title}</Listitem>;

  return (
    <FlatList
      data={Data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.listcontainer}
    />
  );
}
