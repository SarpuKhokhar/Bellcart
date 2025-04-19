import {useNavigation} from '@react-navigation/native';

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
     const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log into</Text>
      <Text style={styles.subtitle}>your account</Text>

      <TextInput
        style={styles.input}
        placeholder="Email address"
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
      />

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>LOG IN</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or log in with</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="apple" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../assets/Images/google.png')}
            style={styles.iconImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="facebook" size={24} color="#3b5998" />
        </TouchableOpacity>
      </View>

      <Text style={styles.signupText}>
        Don't have an account?{' '}
       <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
       <Text style={styles.signupLink}> {'\n'}  Sign Up</Text>
       </TouchableOpacity>
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 40,
    color: '#000',
    fontFamily: 'Product Sans Bold Italic',
    top:16
    
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '400',
    color: '#000',
    fontFamily: 'Product Sans Bold Italic',
    // top: 20,
  },
  input: {
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 24,
    fontSize: 16,
    fontFamily: 'Product Sans Bold Italic',
    top:60,
    margin:15,
     right:8
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 30,
    top:80,
  },
  forgotText: {
    color: '#888',
    fontFamily: 'Product Sans Bold Italic',
    
  },
  loginButton: {
    backgroundColor: '#2d1c16',
    justifyContent:'center',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
    top:100,
    width:167,
    alignSelf:'center'
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Product Sans Bold Italic',
  },
  orText: {
    textAlign: 'center',
    color: '#999',
    marginBottom: 20,
    fontFamily: 'Product Sans Bold Italic',
    top:100
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // marginBottom: 40,
    top:120
  },
  socialButton: {
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 40,
    padding: 12,
  },
  iconImage: {
    width: 22,
    height: 22,
  },
  signupText: {
    textAlign: 'center',
    color: '#000',
    fontFamily: 'Product Sans Bold Italic',
    top:200
  },
  signupLink: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontFamily: 'Product Sans Bold Italic',
    top:5,
    fontSize:16
  },
});
