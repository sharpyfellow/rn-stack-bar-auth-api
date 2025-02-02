import { View, Text, Button, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../AuthContext"; // Import the context

const AccountScreen = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext); // Get the user and logout function from context

  const handleLogout = async () => {
    await logout();
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Welcome, {user ? user.name : "User"}!
      </Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default AccountScreen;
