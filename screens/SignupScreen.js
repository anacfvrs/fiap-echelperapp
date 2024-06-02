import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/signupStyles';
import { Ionicons } from '@expo/vector-icons';

export default function SignupScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#EC4350" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Finalize seu Cadastro</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} placeholder="Nome" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Telefone</Text>
        <TextInput style={styles.input} placeholder="Telefone" keyboardType="phone-pad" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CompleteSignup')}>
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>
      <View style={styles.signInTextContainer}>
        <Text style={styles.signInText}>Já possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signInLink}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


