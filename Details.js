import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [values, setValues] = useState({
    studentName: "",
    className: "",
  });

  const API_BASE =
    process.env.NODE_ENV === "development"
      ? `https://crudapi-demo-5cd002fa802f.herokuapp.com`
      : process.env.REACT_APP_BASE_URL;

  const navigation = useNavigation();

  useEffect(() => {
    getStudents();
    getClasses();
  }, []);
  const getStudents = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/students`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      try {
        const data = await res.json();
        setStudents(data);
      } catch (error) {
        setError("Failed to parse JSON response");
        Alert.alert("Error", "Failed to parse JSON response");
      }
    } catch (error) {
      setError(error.message || "Unexpected Error");
      Alert.alert("Error", error.message || "Unexpected Error");
    } finally {
      setLoading(false);
    }
  };

  const getClasses = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/classes`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      try {
        const data = await res.json();
        setClasses(data);
      } catch (error) {
        setError("Failed to parse JSON response");
        Alert.alert("Error", "Failed to parse JSON response");
      }
    } catch (error) {
      setError(error.message || "Unexpected Error");
      Alert.alert("Error", error.message || "Unexpected Error");
    } finally {
      setLoading(false);
    }
  };
  const createStudent = async () => {
    try {
      const res = await fetch(`${API_BASE}/students`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        getStudents();
      } else {
        setError("Failed to create student");
        Alert.alert("Error", "Failed to create student");
      }
    } catch (error) {
      setError(error.message || "Unexpected Error");
      Alert.alert("Error", error.message || "Unexpected Error");
    } finally {
      setLoading(false);
    }
  };

  const createClass = async () => {
    try {
      const res = await fetch(`${API_BASE}/classes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        getClasses();
      } else {
        setError("Failed to create class");
        Alert.alert("Error", "Failed to create class");
      }
    } catch (error) {
      setError(error.message || "Unexpected Error");
      Alert.alert("Error", error.message || "Unexpected Error");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    createStudent();
    createClass();
  };

  const handleInputChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleStudentNameChange = (text) => {
    setValues({ ...values, studentName: text });
  };

  const handleClassNameChange = (text) => {
    setValues({ ...values, className: text });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Students and Classes</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Student Name"
          placeholderTextColor="#aaa"
          value={values.studentName}
          onChangeText={(text) => handleInputChange("studentName", text)}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Class Name"
          placeholderTextColor="#aaa"
          value={values.className}
          onChangeText={(text) => handleInputChange("className", text)}
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={students}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Text style={styles.unitLink}>{item.name}</Text>
        )}
      />

      <FlatList
        data={classes}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Text style={styles.unitLink}>{item.name}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a", // Dark metallic gray (Warhammer theme)
    padding: 16,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Categories;
