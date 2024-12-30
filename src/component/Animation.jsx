import React from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";

// This is a simple functional component in React Native using Expo
const Animation = () => {
  const showAlert = () => {
    Alert.alert("Hello from Expo!", "This is a basic Expo component.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to My Expo App!</Text>
      <Text style={styles.subheading}>
        This is a simple React Native component.
      </Text>

      {/* Button that triggers an alert on press */}
      <Button title="Press me!" onPress={showAlert} />

      {/* Add more content */}
      <Text style={styles.footer}>
        Learn more about React Native and Expo at{" "}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://docs.expo.dev/")}
        >
          Expo Documentation
        </Text>
      </Text>
    </View>
  );
};

// Styles to style the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  subheading: {
    fontSize: 16,
    color: "#777",
    marginBottom: 30,
  },
  footer: {
    marginTop: 40,
    fontSize: 14,
    color: "#888",
  },
  link: {
    color: "#1e90ff",
  },
});

export default Animation;
