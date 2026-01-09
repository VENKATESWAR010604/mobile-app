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
    user: " Maha dev",
    userLoc: "Bengaluru, Karnataka",
    image: "https://picsum.photos/600/520",
    date: "Jul 5, 2025",
    category: "Arts",
    views: "20 Views",
    caption: "just trying the app",
    likes: 3,
    comments: 2,
    place:
      "Uttarahalli Hobli, Bengaluru, Bangalore Division, Karnataka, 560061, India",
  },
  {
    id: "2",
    user: "Chola",
    userLoc: "Hyderabad, Telangana",
    image: "https://picsum.photos/600/521",
    date: "Jul 4, 2025",
    category: "Social",
    views: "10 Views",
    caption: "first local post",
    likes: 1,
    comments: 0,
    place: "Madhapur, Hyderabad, Telangana",
  },
];

export default function Local() {
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
              <Image
                source={{ uri: "https://i.pravatar.cc/100" }}
                style={styles.avatar}
              />
              <View>
                <Text style={styles.name}>{item.user}</Text>
                <Text style={styles.place}>{item.userLoc}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.followBtn}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
          </View>

          {/* IMAGE */}
          <Image source={{ uri: item.image }} style={styles.postImage} />

          {/* META */}
          <View style={styles.metaRow}>
            <Text style={styles.meta}>
              {item.date}
            </Text>
            <Text style={styles.meta}>
              {item.category} | {item.views}
            </Text>
          </View>

          {/* CAPTION */}
          <Text style={styles.caption}>{item.caption}</Text>

          {/* ACTIONS */}
          <View style={styles.actionRow}>
            <View style={styles.iconWrap}>
              <Ionicons name="heart-outline" size={22} />
              {item.likes > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.likes}</Text>
                </View>
              )}
            </View>

            <Ionicons name="share-social-outline" size={22} />

            <View style={styles.iconWrap}>
              <Ionicons name="chatbubble-outline" size={22} />
              {item.comments > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.comments}</Text>
                </View>
              )}
            </View>
          </View>

          {/* LOCATION */}
          <View style={styles.locRow}>
            <Ionicons name="location-outline" size={16} />
            <Text style={styles.locText}>{item.place}</Text>
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
    borderRadius: 12,
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

  followBtn: {
    borderWidth: 1,
    borderColor: "#0E3A47",
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 20,
  },

  followText: {
    color: "#0E3A47",
    fontWeight: "600",
    fontSize: 12,
  },

  postImage: {
    width: "100%",
    height: 240,
    borderRadius: 10,
    marginVertical: 10,
  },

  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  meta: {
    fontSize: 12,
    color: "#666",
  },

  caption: {
    marginVertical: 6,
    fontSize: 13,
  },

  actionRow: {
    flexDirection: "row",
    gap: 18,
    marginVertical: 6,
  },

  iconWrap: {
    position: "relative",
  },

  badge: {
    position: "absolute",
    top: -6,
    right: -10,
    backgroundColor: "#0E3A47",
    borderRadius: 10,
    paddingHorizontal: 5,
  },

  badgeText: {
    color: "#fff",
    fontSize: 10,
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
