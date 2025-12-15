import { StyleSheet, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

// Themed components
import ThemedView from "../components/ThemedView";
import ThemeLogo from "../components/ThemeLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemeLogo />
      <Spacer height={20} />

      <ThemedText style={styles.title} title={true}>
        Hello World
      </ThemedText>
      <Spacer height={20} />

      <ThemedText>Reading List App</ThemedText>
      <Spacer height={20} />

      <Link href="/login" style={styles.link} asChild>
        <ThemedText>Login Page</ThemedText>
      </Link>

      <Link href="/register" style={styles.link} asChild>
        <ThemedText>Register Page</ThemedText>
      </Link>

       <Link href="/profile" style={styles.link} asChild>
        <ThemedText>Profile Page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
