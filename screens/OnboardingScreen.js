import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/onboardingStyles';

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/onboarding1.png')} style={styles.image} />
      <Text style={styles.title}>Fortaleça a Comunidade</Text>
      <Text style={styles.description}>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
      </Text>
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.nextButtonText}>Comece por aqui</Text>
      </TouchableOpacity>
    </View>
  );
}


