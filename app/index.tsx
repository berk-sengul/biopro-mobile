import { EvilIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const Login = () => {
  const [fontsLoaded] = useFonts({
    "MuseoMorderno-Medium": require("../assets/fonts/MuseoModerno-Medium.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
  });

  return (
    <View style={styles.login}>
      <EvilIcons
        name="gear"
        size={24}
        color="black"
        style={{ alignSelf: "flex-end", marginTop: 62, marginBottom: 55 }}
      />
      <Text style={styles.title}>
        <Text style={{ color: "#2CC88D" }}>bio</Text>
        <Text>pro</Text>
      </Text>

      <View style={{ width: "100%", gap: 24 }}>
        <TextInput
          style={[styles.poppins, styles.input, styles.text]}
          placeholder="Username"
          placeholderTextColor="#d0d0d0"
        />
        <TextInput
          style={[styles.poppins, styles.input, styles.text]}
          placeholder="Password"
          placeholderTextColor="#d0d0d0"
        />

        <TextInput
          style={[styles.poppins, styles.input, styles.text]}
          placeholder="Language"
          placeholderTextColor="#d0d0d0"
        />
        <Pressable style={[styles.button, styles.text]} onPress={() => {}}>
          <Text style={[styles.poppins, { color: "#fff" }]}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: "MuseoMorderno-Medium",
    fontSize: 48,
    marginBottom: 60,
    lineHeight: 23,
  },
  input: {
    borderWidth: 1,
    borderColor: "#B8B8B8",
    borderRadius: 8,
    paddingLeft: 20,
    paddingVertical: 19,
  },
  button: {
    backgroundColor: "#008955",
    paddingVertical: 15.5,
    paddingHorizontal: 93.5,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  poppins: {
    fontFamily: "Poppins-Medium",
  },
  text: {
    fontSize: 16,
    lineHeight: 23,
  },
});

export default Login;
