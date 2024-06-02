import React from 'react';
import { View, ImageBackground, TouchableOpacity, Text } from 'react-native';
import logo from '../assets/logo.png';
import { styles } from '../styles/homeStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={logo} style={styles.background}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Presentation')}>
            <Text style={styles.buttonText}>Saiba mais</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

