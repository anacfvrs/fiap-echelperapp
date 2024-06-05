import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Button, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { styles } from '../styles/completeSignupStyles';

export default function CompleteSignupScreen({ navigation }) {
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [isProfessional, setIsProfessional] = useState(false);
  const [profession, setProfession] = useState('');
  const [image, setImage] = useState(null);

  const handleCepChange = async (value) => {
    setCep(value);
    if (value.length === 8) {
      // Aqui você faria uma chamada à API para buscar o endereço com base no CEP.
      // Exemplo: const response = await fetch(`https://viacep.com.br/ws/${value}/json/`);
      // const data = await response.json();
      // Mocking data for the example
      const data = {
        logradouro: 'Rua Exemplo',
        bairro: 'Bairro Exemplo',
        localidade: 'Cidade Exemplo',
        uf: 'Estado Exemplo',
      };
      setRua(data.logradouro);
      setBairro(data.bairro);
      setCidade(data.localidade);
      setEstado(data.uf);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const handleSave = () => {
    // Aqui você pode salvar as informações e navegar para a próxima tela
    navigation.navigate('MainDrawer');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#EC4350" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Complete seu Cadastro</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="CEP"
        value={cep}
        onChangeText={handleCepChange}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Rua"
        value={rua}
        onChangeText={setRua}
      />
      <TextInput
        style={styles.input}
        placeholder="Bairro"
        value={bairro}
        onChangeText={setBairro}
      />
      <TextInput
        style={styles.input}
        placeholder="Cidade"
        value={cidade}
        onChangeText={setCidade}
      />
      <TextInput
        style={styles.input}
        placeholder="Estado"
        value={estado}
        onChangeText={setEstado}
      />
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>Designar como helper profissional</Text>
        <Switch
          value={isProfessional}
          onValueChange={setIsProfessional}
        />
      </View>
      {isProfessional && (
        <>
          <Picker
            selectedValue={profession}
            style={styles.picker}
            onValueChange={(itemValue) => setProfession(itemValue)}
          >
            <Picker.Item label="Selecione uma profissão" value="" />
            <Picker.Item label="Advogada" value="advogada" />
            <Picker.Item label="Médica" value="medica" />
            <Picker.Item label="Nutricionista" value="nutricionista" />
            <Picker.Item label="Psicóloga" value="psicologa" />
            <Picker.Item label="Outro" value="outro" />
          </Picker>
          <TouchableOpacity style={styles.imageUpload} onPress={pickImage}>
            {image ? (
              <Image source={{ uri: image }} style={{ width: '100%', height: '100%' }} />
            ) : (
              <Text style={styles.imageUploadText}>Upload da carteira profissional</Text>
            )}
          </TouchableOpacity>
        </>
      )}
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}



