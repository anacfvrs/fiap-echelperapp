import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/faqStyles';

export default function FAQScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recomendado</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Leia as regras da HelpHer antes de começar a usar a plataforma</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>O que é a HelpHer?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured links</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Boas Práticas HelpHer</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>Disque-Denúncia Violência Contra a Mulher</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>HelpHer Educação</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
