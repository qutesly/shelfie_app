import { StyleSheet, Text } from "react-native";
import React from "react";
import { useUser } from "../../hooks/useUser";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import ThemeButton from "../../components/ThemeButton";

const Profile = () => {
  const { logout, user } = useUser();

  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.heading}>
        {user?.email}
      </ThemedText>
      <Spacer />

      <ThemedText>Time to start reading some books...</ThemedText>
      <Spacer />

      <ThemeButton onPress={logout}>
        <Text style={{ color: "#f2f2f2" }}>Logout</Text>
      </ThemeButton>
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
