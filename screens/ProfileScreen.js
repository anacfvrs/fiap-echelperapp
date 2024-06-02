import React from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { styles } from '../styles/profileStyles';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/avatar.png')} style={styles.avatar} />
      <Text style={styles.username}>Nome do Usuário</Text>
      <TextInput style={styles.input} placeholder="Editar nome" />
      <TextInput style={styles.input} placeholder="Editar biografia" multiline />
      <Button title="Salvar" onPress={() => alert('Perfil atualizado')} />
    </View>
  );
}
