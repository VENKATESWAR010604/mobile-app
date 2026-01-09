import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function EditProfile() {
  const router = useRouter();

  const [image, setImage] = useState("https://i.pravatar.cc/400");
  const [name, setName] = useState("VENKATESWAR REDDY KASU");
  const [gender, setGender] = useState("Male");
  const [location, setLocation] = useState(
    "Madireddypalem, Andhra Pradesh"
  );
  const [profession, setProfession] = useState("");
  const [bio, setBio] = useState("Anonymous");

  const pickImage = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });

    if (!res.canceled) setImage(res.assets[0].uri);
  };

  const submitProfile = () => {
    // 👉 later: send to backend API
    router.back(); // go back to profile
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{ color: "#fff", fontSize: 18 }}>
          Update Account
        </Text>
      </View>

      {/* IMAGE */}
      <View style={styles.imageBox}>
        <Image source={{ uri: image }} style={styles.bigAvatar} />
        <TouchableOpacity style={styles.camBtn} onPress={pickImage}>
          <Ionicons name="camera" size={22} />
        </TouchableOpacity>
      </View>

      <Input label="Name*" value={name} onChange={setName} />
      <Input label="Gender" value={gender} onChange={setGender} />
      <Input label="Location*" value={location} onChange={setLocation} />
      <Input
        label="Profession"
        value={profession}
        onChange={setProfession}
      />
      <Input label="Bio" value={bio} onChange={setBio} multiline />

      <TouchableOpacity style={styles.saveBtn} onPress={submitProfile}>
        <Text style={{ color: "#fff", fontSize: 16 }}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function Input({ label, value, onChange, multiline }: any) {
  return (
    <View style={{ margin: 12 }}>
      <Text>{label}</Text>
      <TextInput
        value={value}
        multiline={multiline}
        onChangeText={onChange}
        style={[
          styles.input,
          multiline && { height: 100, textAlignVertical: "top" },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0E3A47",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  imageBox: { alignItems: "center", marginVertical: 20 },

  bigAvatar: { width: 200, height: 200, borderRadius: 100 },

  camBtn: {
    position: "absolute",
    bottom: 10,
    right: 120,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 30,
  },

  input: {
    backgroundColor: "#eee",
    borderRadius: 8,
    padding: 12,
    marginTop: 5,
  },

  saveBtn: {
    backgroundColor: "#0E3A47",
    margin: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});
