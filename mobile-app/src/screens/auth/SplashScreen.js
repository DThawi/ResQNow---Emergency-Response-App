import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SplashScreen({ navigation }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={['#070000', '#830F11']}
      style={styles.container}
    >
      <Image
        source={require('../../../assets/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>ResQNow</Text>
      <Text style={styles.subtitle}>Emergency Response Platform</Text>

      <View style={styles.dotsContainer}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginBottom: -50,
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 32,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  dotsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 60,
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    opacity: 0.7,
  },
});