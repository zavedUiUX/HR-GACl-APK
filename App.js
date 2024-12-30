import React from "react";
import { StyleSheet, View, StatusBar } from "react-native"; // Default imports from 'react-native'
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#923649" />
      <WebView source={{ uri: "https://culturebuilding.habot.io/" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // Set the border width on top
    // Set the color of the border (black in this case)
  },
});
