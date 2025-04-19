import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/Images/girl1.png')}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to BellaCart!</Text>
        <Text style={styles.subtitle}>The home for a fashionista</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Intro1')} // 👈 Change 'Home' to your screen name
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    alignItems: 'center',
    paddingBottom: 80,
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 8,
    fontFamily:'WinkyRough-Light'
  },
  subtitle: {
    color: 'white',
    fontSize: 22,
    marginBottom: 40,
    fontFamily:'WinkyRough-Light'
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    backgroundColor: '#ffffff90',
    borderWidth: 2,
    borderColor: '#b54be7', // purple
  },
  buttonText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 16,
  },
});
