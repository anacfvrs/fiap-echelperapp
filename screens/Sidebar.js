import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { styles } from '../styles/sidebarStyles';

export default function Sidebar({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.menuSection}>
        <Text style={styles.menuTitle}>MENU</Text>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Posts')}>
          <MaterialIcons name="post" style={styles.menuItemIcon} />
          <Text style={styles.menuItemText}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Tags')}>
          <Ionicons name="pricetags" style={styles.menuItemIcon} />
          <Text style={styles.menuItemText}>Tags</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuSection}>
        <Text style={styles.menuTitle}>NAVEGADOR PESSOAL</Text>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MyPosts')}>
          <Ionicons name="document" style={styles.menuItemIcon} />
          <Text style={styles.menuItemText}>Meus posts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MyResponses')}>
          <Ionicons name="chatbubble" style={styles.menuItemIcon} />
          <Text style={styles.menuItemText}>Minhas respostas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MyLikes')}>
          <Ionicons name="heart" style={styles.menuItemIcon} />
          <Text style={styles.menuItemText}>Minhas curtidas</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.socialIcons}>
        <TouchableOpacity>
          <FontAwesome name="facebook" style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="logo-instagram" style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="logo-twitter" style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
