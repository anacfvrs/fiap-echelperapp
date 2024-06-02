import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/loginStyles';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/icon-full.png')} style={styles.logo} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Senha" style={styles.input} secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainDrawer')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.buttonText}>Cadastro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton} onPress={() => navigation.navigate('Social')}>
        <Text style={styles.socialButtonText}>Login com Rede Social</Text>
      </TouchableOpacity>
    </View>
  );
}



