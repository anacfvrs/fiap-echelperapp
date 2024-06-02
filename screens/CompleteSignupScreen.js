import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/completeSignupStyles';
import { Ionicons } from '@expo/vector-icons';

export default function CompleteSignupScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#EC4350" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Complete seu Cadastro</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} placeholder="Nome" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>CPF</Text>
        <TextInput style={styles.input} placeholder="000.000.000-00" keyboardType="numeric" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>CEP</Text>
        <TextInput style={styles.input} placeholder="CEP" keyboardType="numeric" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Logradouro</Text>
        <TextInput style={styles.input} placeholder="Logradouro" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Número</Text>
        <TextInput style={styles.input} placeholder="Número" keyboardType="numeric" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Complemento</Text>
        <TextInput style={styles.input} placeholder="Complemento" />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainDrawer')}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}


