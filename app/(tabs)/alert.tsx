import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function Alert() {
  const [active, setActive] = useState<"Social" | "New">("Social");

  return (
    <View style={styles.container}>
      {/* SEGMENT BUTTON */}
      <View style={styles.segmentWrap}>
        <TouchableOpacity
          style={[
            styles.segmentBtn,
            active === "Social" && styles.activeBtn,
          ]}
          onPress={() => setActive("Social")}
        >
          <Text
            style={[
              styles.segmentText,
              active === "Social" && styles.activeText,
            ]}
          >
            Social
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.segmentBtn,
            active === "New" && styles.activeBtn,
          ]}
          onPress={() => setActive("New")}
        >
          <Text
            style={[
              styles.segmentText,
              active === "New" && styles.activeText,
            ]}
          >
            New Feeds
          </Text>
        </TouchableOpacity>
      </View>

      {/* TODAY ROW */}
      <View style={styles.rowBetween}>
        <Text style={styles.title}>Today</Text>
        <Text style={styles.clear}>Clear</Text>
      </View>

      {/* EMPTY SPACE (NO ALERTS) */}
      <View style={{ height: 120 }} />

      {/* THIS WEEK */}
      <Text style={[styles.title, { marginTop: 20 }]}>This Week</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },

  segmentWrap: {
    flexDirection: "row",
    backgroundColor: "#0E3A47",
    borderRadius: 12,
    padding: 4,
    marginBottom: 25,
  },

  segmentBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  activeBtn: {
    backgroundColor: "#fff",
  },

  segmentText: {
    color: "#fff",
    fontWeight: "600",
  },

  activeText: {
    color: "#0E3A47",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "500",
  },

  clear: {
    color: "#999",
    fontSize: 18,
  },
});
