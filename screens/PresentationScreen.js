import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { styles } from '../styles/presentationStyles';

export default function PresentationScreen({ navigation }) {
  return (
    <Swiper
      dot={<View style={[styles.dot, styles.inactiveDot]} />}
      activeDot={<View style={styles.dot} />}
      paginationStyle={styles.paginationContainer}
      loop={false}
    >
      <View style={styles.container}>
        <Image source={require('../assets/onboarding.png')} style={styles.image} />
        <Text style={styles.title}>Tire Dúvidas</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur arcu auctor pretium fringilla.
        </Text>
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Onboarding')}>
          <Text style={styles.nextButtonText}>Próximo</Text>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
}






