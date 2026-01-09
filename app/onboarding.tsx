import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import OnboardingSwiper from 'react-native-onboarding-swiper';
import { useRouter } from 'expo-router';

const DoneButtonComponent = ({ ...rest }) => (
  <TouchableOpacity style={styles.startButton} {...rest}>
    <Text style={styles.startText}>Start</Text>
  </TouchableOpacity>
);

export default function OnboardingScreen() {
  const router = useRouter();

  const goToLocation = () => {
    router.replace('/location');
  };

  return (
    <OnboardingSwiper
      onSkip={goToLocation}
      onDone={goToLocation}
      DoneButtonComponent={DoneButtonComponent}
      pages={[
        {
          backgroundColor: '#0c7ef0d3',
          image: (
            <Image
              source={require('../assets/images/onboarding-image1.png')}
              style={styles.image}
            />
          ),
          title: 'Fast and hot news',
          subtitle: 'its platform to add,share your news and update',
        },
        {
          backgroundColor: '#3b50a7ff',
          image: (
            <Image
              source={require('../assets/images/onboarding-image2.png')}
              style={styles.image}
            />
          ),
          title: 'Share',
          subtitle: 'what you see and tell your surrounding about that',
        },
        {
          backgroundColor: '#090909ff',
          image: (
            <Image
              source={require('../assets/images/onboarding-image3.png')}
              style={styles.image}
            />
          ),
          title: 'News around',
          subtitle: 'Explore trending news,clips',
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  image: { width: 350, height: 450, resizeMode: 'contain' },
  startButton: { paddingHorizontal: 25, paddingVertical: 10 },
  startText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
