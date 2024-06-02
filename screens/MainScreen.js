import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { styles } from '../styles/mainscreenStyles';

export default function MainScreen({ navigation }) {
  const [posts, setPosts] = useState([
    {
      id: '1',
      name: 'Golanginya',
      time: '5 min atrás',
      content: 'Casa de acolhimento',
      avatar: require('../assets/avatar.png'), 
      tags: ['lar temporário', 'acolhimento', 'violência'],
    },
    {
      id: '2',
      name: 'Linuxoid',
      time: '25 min atrás',
      content: 'Fui assediada no ambiente de trabalho',
      avatar: require('../assets/avatar2.png'),
      tags: ['trabalho', 'assédio'],
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/icon.png')} style={{ width: 30, height: 30 }} />
        <Text style={styles.headerText}>Posts</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person" size={24} color="#EC4350" />
        </TouchableOpacity>
      </View>
      <View style={styles.postContainer}>
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.postCard}>
              <View style={styles.postHeader}>
                <Image source={item.avatar} style={styles.postAvatar} />
                <View>
                  <Text style={styles.postName}>{item.name}</Text>
                  <Text style={styles.postTime}>{item.time}</Text>
                </View>
              </View>
              <Text style={styles.postContent}>{item.content}</Text>
              <View style={styles.postTags}>
                {item.tags.map((tag, index) => (
                  <View key={index} style={styles.postTag}>
                    <Text>{tag}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        />
      </View>
      <TouchableOpacity style={styles.addPostButton} onPress={() => navigation.navigate('NewPost')}>
        <MaterialIcons name="add" style={styles.addPostIcon} />
      </TouchableOpacity>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" style={styles.navIcon} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="search" style={styles.navIcon} />
          <Text style={styles.navText}>Pesquisar</Text>
        </TouchableOpacity>
        <View style={{ width: 60 }} />
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('FAQ')}>
          <Ionicons name="help-circle" style={styles.navIcon} />
          <Text style={styles.navText}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.toggleDrawer()}>
          <Ionicons name="menu" style={styles.navIcon} />
          <Text style={styles.navText}>Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



