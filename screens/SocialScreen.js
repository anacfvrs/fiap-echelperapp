import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { styles } from '../styles/socialStyles';

export default function SocialScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/icon-full.png')} style={styles.logo} />
      <TouchableOpacity style={styles.socialButton} onPress={() => alert('Login com Facebook')}>
        <Text style={styles.socialButtonText}>Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton} onPress={() => alert('Login com Google')}>
        <Text style={styles.socialButtonText}>Google</Text>
      </TouchableOpacity>
    </View>
  );
}
