import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from '../styles/newPostStyles';
import { Ionicons } from '@expo/vector-icons';

export default function NewPostScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#EC4350" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Novo Post</Text>
        <View />
      </View>
      <Picker
        selectedValue={selectedCategory}
        style={styles.input}
        onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}
      >
        <Picker.Item label="Selecione um tema" value="" />
        <Picker.Item label="Jurídico" value="juridico" />
        <Picker.Item label="Psicológico" value="psicologico" />
        <Picker.Item label="Maternidade" value="maternidade" />
      </Picker>
      <TextInput style={styles.input} placeholder="Título" />
      <TextInput
        style={styles.textArea}
        placeholder="Descrição do problema"
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.button} onPress={() => alert('Post criado')}>
        <Text style={styles.buttonText}>Postar</Text>
      </TouchableOpacity>
    </View>
  );
}
