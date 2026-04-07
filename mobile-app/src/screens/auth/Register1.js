import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Register1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register Step 1</Text>

      {/* TEMP BUTTON TO TEST SCREEN */}
      <Button
        title="Go to TestScreen"
        onPress={() => navigation.navigate("TestScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Register1;