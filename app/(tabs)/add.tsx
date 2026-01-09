import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

export default function Add() {
  const [showRules, setShowRules] = useState(true);
  const [showUpload, setShowUpload] = useState(false);
  const [media, setMedia] = useState<string | null>(null);

  // 📸 CAMERA
  const openCamera = async () => {
    const perm = await ImagePicker.requestCameraPermissionsAsync();
    if (!perm.granted) return;

    const res = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 0.7,
    });

    if (!res.canceled) setMedia(res.assets[0].uri);
  };

  // 🖼 GALLERY
  const openGallery = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 0.7,
    });

    if (!res.canceled) setMedia(res.assets[0].uri);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* ===== COMMUNITY RULES MODAL ===== */}
      <Modal visible={showRules} transparent animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <Text style={styles.title}>Community guidelines</Text>

            <ScrollView style={{ marginVertical: 10 }}>
              <Rule text="Do not post spam content" />
              <Rule text="Do not post pornography or sexually explicit material" />
              <Rule text="Do not post child abuse content" />
              <Rule text="Do not post hate speech or violent content" />
              <Rule text="Do not post content promoting terrorism" />
              <Rule text="Do not post harassment or bullying content" />
              <Rule text="Do not post content promoting suicide or self injury" />
              <Rule text="Do not post content promoting misinformation" />
            </ScrollView>

            <View style={styles.btnRow}>
              <TouchableOpacity onPress={() => setShowRules(false)}>
                <Text style={styles.disagree}>Disagree</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setShowRules(false);
                  setShowUpload(true);
                }}
              >
                <Text style={styles.agree}>Agree</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* ===== UPLOAD SCREEN ===== */}
      {showUpload && (
        <View style={styles.uploadBox}>
          <Text style={styles.uploadTitle}>Create Post</Text>

          {media ? (
            <Image source={{ uri: media }} style={styles.preview} />
          ) : (
            <View style={styles.placeholder}>
              <Ionicons name="image-outline" size={60} color="#aaa" />
              <Text>No media selected</Text>
            </View>
          )}

          <View style={styles.uploadBtns}>
            <TouchableOpacity style={styles.iconBtn} onPress={openCamera}>
              <Ionicons name="camera" size={24} color="#fff" />
              <Text style={styles.btnText}>Camera</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconBtn} onPress={openGallery}>
              <Ionicons name="images" size={24} color="#fff" />
              <Text style={styles.btnText}>Gallery</Text>
            </TouchableOpacity>
          </View>

          {media && (
            <TouchableOpacity style={styles.nextBtn}>
              <Text style={{ color: "#fff", fontSize: 16 }}>Next</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
}

function Rule({ text }: any) {
  return (
    <View style={styles.ruleRow}>
      <Text style={styles.bullet}>•</Text>
      <Text style={styles.ruleText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    backgroundColor: "#fff",
    width: "85%",
    borderRadius: 12,
    padding: 15,
    maxHeight: "75%",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },

  ruleRow: {
    flexDirection: "row",
    marginBottom: 8,
  },

  bullet: { fontSize: 18, marginRight: 6 },

  ruleText: {
    fontSize: 14,
    flex: 1,
  },

  btnRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 30,
    marginTop: 10,
  },

  disagree: { color: "#888", fontSize: 16 },

  agree: {
    color: "#0E3A47",
    fontSize: 16,
    fontWeight: "600",
  },

  /* UPLOAD */

  uploadBox: {
    flex: 1,
    padding: 20,
  },

  uploadTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },

  placeholder: {
    height: 250,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  preview: {
    width: "100%",
    height: 250,
    borderRadius: 12,
  },

  uploadBtns: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 25,
  },

  iconBtn: {
    backgroundColor: "#0E3A47",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: 120,
  },

  btnText: {
    color: "#fff",
    marginTop: 5,
  },

  nextBtn: {
    backgroundColor: "#0E3A47",
    marginTop: 30,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});
