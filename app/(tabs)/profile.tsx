import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useFocusEffect } from "expo-router";
import { useState } from "react";

export default function Profile() {
  const router = useRouter();

  const [profile, setProfile] = useState({
    name: "KASU",
    location: "Bengaluru, Karnataka",
    bio: "Anonymous",
    followers: 0,
    following: 0,
    feed: 0,
    blocked: 0,
    image: "https://i.pravatar.cc/300",
  });

  // ✅ runs every time screen opens
  useFocusEffect(() => {
    // later: fetchProfileFromAPI()
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <Image source={{ uri: profile.image }} style={styles.avatar} />

        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{profile.name}</Text>

          <View style={styles.iconRow}>
            <Ionicons name="location-outline" size={16} />
            <Text>{profile.location}</Text>
          </View>

          <View style={styles.iconRow}>
            <Ionicons name="lock-closed-outline" size={16} />
            <Text>Anonymous</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => router.push("/profile-edit")}
        >
          <Text style={{ color: "#fff" }}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.countRow}>
        <Count label="Feed" value={profile.feed} />
        <Count label="Followers" value={profile.followers} />
        <Count label="Following" value={profile.following} />
        <Count label="Blocked" value={profile.blocked} />
      </View>

      <View style={styles.actionRow}>
        <Btn text="Trash" />
        <Btn text="Drafts" />
        <Btn text="History" />
      </View>

      <Text style={styles.section}>About me</Text>
      <Text style={{ marginLeft: 15 }}>{profile.bio}</Text>

      <View style={styles.noPost}>
        <Text style={{ fontSize: 18 }}>No Post</Text>
      </View>
    </ScrollView>
  );
}

function Count({ label, value }: any) {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontWeight: "700" }}>{value}</Text>
      <Text style={{ fontSize: 12 }}>{label}</Text>
    </View>
  );
}

function Btn({ text }: any) {
  return (
    <TouchableOpacity style={styles.roundBtn}>
      <Text style={{ color: "#fff" }}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  row: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    gap: 10,
  },
  avatar: { width: 80, height: 80, borderRadius: 40 },
  name: { fontSize: 18, fontWeight: "700" },
  iconRow: { flexDirection: "row", alignItems: "center", gap: 5 },
  editBtn: {
    backgroundColor: "#0E3A47",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
  },
  countRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  roundBtn: {
    backgroundColor: "#0E3A47",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
  },
  section: { fontSize: 18, fontWeight: "700", margin: 15 },
  noPost: { alignItems: "center", marginTop: 120 },
});

