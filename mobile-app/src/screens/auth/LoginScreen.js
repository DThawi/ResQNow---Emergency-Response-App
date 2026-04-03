import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import API from '../../services/api';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    try {
      await API.post('/auth/login', { email, password });
      navigation.navigate('Home');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Image
        source={require('../../../assets/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Sign in to continue to ResQNow</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.icon}>✉️</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#999"
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <Text style={styles.label}>Password</Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.icon}>🔒</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#999"
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setRememberMe(!rememberMe)}
        >
          <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]} />
          <Text style={styles.rememberText}>Remember me</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword1')}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.signupRow}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register1')}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: -30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 6,
    marginTop: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.6,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#FFFFFF',
    height: 51,
  },
  icon: {
    marginRight: 8,
    fontSize: 16,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1.5,
    borderColor: '#999',
    marginRight: 6,
    backgroundColor: '#fff',
  },
  checkboxChecked: {
    backgroundColor: '#D62828',
    borderColor: '#D62828',
  },
  rememberText: {
    fontSize: 13,
    color: '#888',
  },
  forgotText: {
    fontSize: 13,
    color: '#D62828',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#D62828',
    width: '100%',
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signupText: {
    fontSize: 14,
    color: '#888888',
  },
  signupLink: {
    fontSize: 14,
    color: '#D62828',
    fontWeight: 'bold',
  },
});