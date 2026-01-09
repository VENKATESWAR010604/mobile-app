import { Tabs, useNavigation } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { DrawerActions } from "@react-navigation/native";

const CATEGORIES = ["All", "Entertainment", "Lifestyle"];

export default function TabsLayout() {
  const [active, setActive] = useState("All");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* ===== TOP BAR ===== */}
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Ionicons name="menu" size={26} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.logo}>BWstory</Text>

        <TouchableOpacity>
          <Ionicons name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* ===== CATEGORY ===== */}
      <View style={styles.tabsRow}>
        {CATEGORIES.map((c) => (
          <TouchableOpacity
            key={c}
            onPress={() => setActive(c)}
            style={[styles.tabBtn, active === c && styles.activeTab]}
          >
            <Text style={[styles.tabText, active === c && styles.activeText]}>
              {c}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* ===== BOTTOM TABS ===== */}
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="home"
          options={{
            title: "Discover",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="compass-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="local"
          options={{
            title: "Local",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="location-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="add"
          options={{
            title: "Add",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="alert"
          options={{
            title: "Alert",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="notifications-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: "#0E3A47",
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: { color: "#fff", fontSize: 20, fontWeight: "700" },

  tabsRow: {
    flexDirection: "row",
    backgroundColor: "#e9e9e9",
    paddingVertical: 10,
    justifyContent: "space-around",
  },
  tabBtn: {
    borderWidth: 1,
    borderColor: "#0E3A47",
    borderRadius: 25,
    paddingHorizontal: 18,
    paddingVertical: 6,
    backgroundColor: "#fff",
  },
  activeTab: { backgroundColor: "#0E3A47" },
  tabText: { color: "#0E3A47", fontWeight: "600" },
  activeText: { color: "#fff" },
});
