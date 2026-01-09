import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";

const POSTS = [
  {
    id: "1",
    name: "viswas",
    place: "New Delhi, Delhi",
    image: "https://picsum.photos/600/500",
    date: "Dec 28, 2025",
    category: "Education & Training",
    views: "2 Views",
    desc:
      "celebrations",
    location: " Delhi, Delhi Division, Delhi, 110043, India",
  },
  {
    id: "2",
    name: "Kumar",
    place: "Hyderabad, Telangana",
    image: "https://picsum.photos/600/501",
    date: "Jan 5, 2026",
    category: "Lifestyle",
    views: "10 Views",
    desc: "Morning walk at tank bund with friends",
    location: "Tank Bund, Hyderabad",
  },
  {
    id: "3",
    name: "teddy",
    place: "chennai,Tamilnadu",
    image: "https://picsum.photos/600/502",
    date: "Jan 5, 2026",
    category: "Lifestyle",
    views: "10 Views",
    desc: "Morning walk at tank bund with friends",
    location: "Tank Bund, Hyderabad",
  },
  {
    id: "4",
    name: "bharath",
    place: "Vijayawada,Andhra Pradesh",
    image: "https://picsum.photos/600/503",
    date: "Jan 5, 2026",
    category: "Lifestyle",
    views: "10 Views",
    desc: "Morning walk at tank bund with friends",
    location: "Tank Bund, Hyderabad",
  },
  {
    id: "5",
    name: "swamy",
    place: "Tirupathi,Andhra PRADESH",
    image: "https://picsum.photos/600/504",
    date: "Jan 5, 2026",
    category: "Lifestyle",
    views: "10 Views",
    desc: "Morning walk at tank bund with friends",
    location: "Tank Bund, Hyderabad",
  },
  {
    id: "6",
    name: "MINI",
    place: "Ongole,Andhra Pradesh",
    image: "https://picsum.photos/600/505",
    date: "Jan 5, 2026",
    category: "Lifestyle",
    views: "10 Views",
    desc: "Morning walk at tank bund with friends",
    location: "Tank Bund, Hyderabad",
  },
  {
    id: "7",
    name: "Kumar",
    place: "Hyderabad, Telangana",
    image: "https://picsum.photos/600/506",
    date: "Jan 5, 2026",
    category: "Lifestyle",
    views: "10 Views",
    desc: "Morning walk at tank bund with friends",
    location: "Tank Bund, Hyderabad",
  },
];

export default function Home() {
  return (
    <FlatList
      data={POSTS}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 120 }}
      renderItem={({ item }) => (
        <View style={styles.card}>
          {/* USER ROW */}
          <View style={styles.userRow}>
            <View style={styles.userLeft}>
              <Image source={{ uri: item.image }} style={styles.avatar} />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.place}>{item.place}</Text>
              </View>
            </View>

            <View style={styles.userRight}>
              <TouchableOpacity style={styles.followBtn}>
                <Text style={styles.followText}>Follow</Text>
              </TouchableOpacity>
              <Entypo name="dots-three-vertical" size={16} />
            </View>
          </View>

          {/* POST IMAGE */}
          <Image source={{ uri: item.image }} style={styles.postImage} />

          {/* DATE + CATEGORY + VIEWS */}
          <View style={styles.infoRow}>
            <Text style={styles.meta}>{item.date}</Text>
            <Text style={styles.meta}>
              {item.category} | {item.views}
            </Text>
          </View>

          {/* DESCRIPTION */}
          <Text style={styles.desc}>{item.desc}</Text>

          {/* ACTIONS */}
          <View style={styles.actionRow}>
            <Ionicons name="heart-outline" size={22} />
            <Ionicons name="share-social-outline" size={22} />
            <Ionicons name="chatbubble-outline" size={22} />
          </View>

          {/* LOCATION */}
          <View style={styles.locRow}>
            <Ionicons name="location-outline" size={16} />
            <Text style={styles.locText}>{item.location}</Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },

  userRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  userLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  name: {
    fontWeight: "700",
    fontSize: 14,
    color: "#1c4f63",
  },

  place: {
    fontSize: 12,
    color: "#666",
  },

  userRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  followBtn: {
    borderWidth: 1,
    borderColor: "#0E3A47",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },

  followText: {
    color: "#0E3A47",
    fontWeight: "600",
    fontSize: 12,
  },

  postImage: {
    width: "100%",
    height: 230,
    borderRadius: 10,
    marginVertical: 10,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  meta: {
    fontSize: 12,
    color: "#666",
  },

  desc: {
    marginVertical: 6,
    fontSize: 13,
  },

  actionRow: {
    flexDirection: "row",
    gap: 15,
    marginVertical: 6,
  },

  locRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  locText: {
    fontSize: 12,
    color: "#555",
  },
});

