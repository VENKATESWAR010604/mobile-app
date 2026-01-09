import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [isSignup, setIsSignup] = useState(false); // 🔥 toggle

  const handleAuth = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      if (isSignup) {
        // ✅ SIGN UP
        await createUserWithEmailAndPassword(
          auth,
          email.trim(),
          password
        );
        alert("Account created successfully!");
      } else {
        // ✅ LOGIN
        await signInWithEmailAndPassword(
          auth,
          email.trim(),
          password
        );
      }

      router.replace("/(tabs)/home");
    } catch (error: any) {
      console.log("AUTH ERROR:", error.code, error.message);
      alert(
        error.code
          ?.replace("auth/", "")
          ?.replaceAll("-", " ")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/login.png")}
        style={styles.image}
      />

      <Text style={styles.title}>
        {isSignup ? "Create Account" : "Welcome Back"}
      </Text>

      {/* Email */}
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />
      </View>

      {/* Password */}
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.eye}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={22}
            color="#555"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleAuth}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading
            ? "Please wait..."
            : isSignup
            ? "Sign Up"
            : "Login"}
        </Text>
      </TouchableOpacity>

      {/* TOGGLE LOGIN / SIGNUP */}
      <TouchableOpacity
        onPress={() => setIsSignup(!isSignup)}
        style={{ marginTop: 15 }}
      >
        <Text style={styles.toggleText}>
          {isSignup
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </Text>
      </TouchableOpacity>

      <Text style={styles.terms}>
        By continuing, I agree to{" "}
        <Text style={styles.link}>terms and conditions</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 260,
    height: 260,
    resizeMode: "contain",
    marginTop: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 15,
  },
  inputBox: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#2a9df4",
    borderRadius: 30,
    paddingHorizontal: 20,
    marginBottom: 15,
    height: 55,
    justifyContent: "center",
    position: "relative",
  },
  input: {
    fontSize: 16,
    paddingRight: 40,
  },
  eye: {
    position: "absolute",
    right: 20,
  },
  button: {
    width: "100%",
    height: 55,
    backgroundColor: "#0E3A47",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  toggleText: {
    color: "#2a9df4",
    fontWeight: "600",
  },
  terms: {
    textAlign: "center",
    fontSize: 12,
    marginTop: 15,
    color: "#555",
  },
  link: {
    color: "#2a9df4",
  },
});
