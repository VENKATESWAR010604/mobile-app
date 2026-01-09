import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import * as Location from 'expo-location';
import { useRouter } from 'expo-router';

export default function LocationScreen() {
  const router = useRouter();

  // When user clicks "Sure, I'd like that"
  const allowLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permission denied',
        'Location permission is required to show local posts'
      );
      router.replace('/login'); // or next screen
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    console.log('User location:', location.coords);

    // later we will store this in AsyncStorage / backend

    router.replace('/login'); // next screen
  };

  // When user clicks "Not Now"
  const skipLocation = () => {
    router.replace('/login'); // next screen
  };

  return (
    <View style={styles.container}>
      <Image
        
        source={require('../assets/images/location1.png')}
        style={styles.image}
      />

      <Text style={styles.title}>Allow your location</Text>
      <Text style={styles.subtitle}>
        We will need your location to give you better experience
      </Text>

      <TouchableOpacity style={styles.primaryButton} onPress={allowLocation}>
        <Text style={styles.primaryButtonText}>Sure, I'd like that</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={skipLocation}>
        <Text style={styles.secondaryText}>Not Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f3f3ff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 480,
    height:500 ,
    resizeMode: 'contain',
    marginBottom: 30,
    
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
  },
  primaryButton: {
    width: '100%',
    backgroundColor: '#0E3A47',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryText: {
    fontSize: 15,
    color: '#0E3A47',
    fontWeight: '600',
  },
});
