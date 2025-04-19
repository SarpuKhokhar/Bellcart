import {useNavigation} from '@react-navigation/native';

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
// import { Image } from 'react-native-reanimated/lib/typescript/Animated';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Signup = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView style={{top: 70}}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Create</Text>
          <Text style={styles.subtitle}>your account</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Email address"
          placeholderTextColor="#999"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm password"
          placeholderTextColor="#999"
          secureTextEntry
        />

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupText}>SIGN UP</Text>
        </TouchableOpacity>

        <Text style={styles.or}>or sign up with</Text>

        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialIcon}>
            <MaterialCommunityIcons name="apple" size={22} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Image
              source={require('../assets/Images/google.png')} // Add your red Google icon here
              style={{width: 22, height: 22}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Icon name="facebook" size={22} color="#1877F2" />
          </TouchableOpacity>
        </View>

        <Text style={[styles.bottomText,]}>
          Already have account?{' '}
          <Text
            style={styles.loginText}
            onPress={() => navigation.navigate('Login')}>
           Log In
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  titleWrapper: {
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: '#000',
    fontFamily: 'Product Sans Bold Italic',
    // top:20
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '400',
    color: '#000',
    fontFamily: 'Product Sans Bold Italic',
    top: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 17,
    paddingVertical: 10,
    marginBottom: 20,
    color: '#000',
    fontFamily: 'Product Sans Bold Italic',
     margin:15,
     right:15
  },
  signupButton: {
    backgroundColor: '#2D201C',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginVertical: 25,
    width:167,
    alignSelf:'center'
  },
  signupText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 14,
    letterSpacing: 1,
    fontFamily: 'Product Sans Bold Italic',
  },
  or: {
    textAlign: 'center',
    color: '#999',
    fontSize: 12,
    marginBottom: 20,
    fontFamily: 'Product Sans Bold Italic',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  socialIcon: {
    backgroundColor: '#F4F4F4',
    padding: 14,
    borderRadius: 30,
    marginHorizontal: 10,
  },
  bottomText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#999',
  },
  loginText: {
    color: 'blue',
    fontWeight: '600',
    textDecorationLine: 'underline',
    fontFamily: 'Product Sans Bold Italic',
    fontSize: 16,

  },
});
