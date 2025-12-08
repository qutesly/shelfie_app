import { StyleSheet, Text, View, Image } from "react-native";

import Logo from "../assets/img/logo_light.png"
import { Link } from "expo-router";


const Home = () => {
  return (
    <View style={styles.container}>
        <Image source={Logo} style={styles.img} />

      <Text style={styles.title}>Hello World</Text>

      <Link href="/about" style={styles.link}>About Page</Link>
      <Link href="/contact" style={styles.link}>Contact Page</Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        marginVertical: 20
    },
    title: {
        fontWeight: "bold",
        fontSize: 18
    },
     link: {
        marginVertical: 10,
        borderBottomWidth: 1
    },
});
