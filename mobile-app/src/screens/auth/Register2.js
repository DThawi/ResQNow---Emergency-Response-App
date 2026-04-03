import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import API from '../../services/api';

export default function Register2({ navigation, route }) {
  const { role } = route.params || {};
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nic, setNic] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleRegister = async () => {
    if (!fullName || !email || !phone || !nic || !address || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (password.length < 8) {
      alert('Password must be at least 8 characters');
      return;
    }
    try {
      await API.post('/auth/register', {
        fullName, email, phone, nic, address, password, role
      });
      navigation.navigate('VerifyIdentity');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#070000', '#830F11']}
        style={styles.header}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Account</Text>
      </LinearGradient>

      <ScrollView contentContainerStyle={styles.content}>

        <View style={styles.iconCircle}>
          <Text style={styles.iconText}>👤</Text>
        </View>

        <Text style={styles.title}>Personal Information</Text>
        <Text style={styles.subtitle}>Please provide your personal details</Text>

        <Text style={styles.label}>Full Name <Text style={styles.required}>*</Text></Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.icon}>👤</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#999"
            onChangeText={setFullName}
          />
        </View>

        <Text style={styles.label}>Email <Text style={styles.required}>*</Text></Text>
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

        <Text style={styles.label}>Phone Number <Text style={styles.required}>*</Text></Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.icon}>📞</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            placeholderTextColor="#999"
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>

        <Text style={styles.label}>NIC Number / Passport Number <Text style={styles.required}>*</Text></Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.icon}>💳</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your NIC or Passport Number"
            placeholderTextColor="#999"
            onChangeText={setNic}
          />
        </View>

        <Text style={styles.label}>Residential Address <Text style={styles.required}>*</Text></Text>
        <View style={[styles.inputWrapper, styles.addressWrapper]}>
          <TextInput
            style={[styles.input, styles.addressInput]}
            placeholder="Enter your complete address (Street, Building, Landmark)"
            placeholderTextColor="#999"
            onChangeText={setAddress}
            multiline
          />
          <Text style={styles.icon}>📍</Text>
        </View>

        <Text style={styles.label}>Password <Text style={styles.required}>*</Text></Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Create a strong password"
            placeholderTextColor="#999"
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.icon}>👁️</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.hint}>Minimum 8 characters with letters, numbers and symbols</Text>

        <Text style={styles.label}>Confirm Password <Text style={styles.required}>*</Text></Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Re-enter your password"
            placeholderTextColor="#999"
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirm}
          />
          <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
            <Text style={styles.icon}>👁️</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Complete Registration →</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signinRow}>
          <Text style={styles.signinText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signinLink}>Sign in</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
  },
  backArrow: {
    color: '#FFFFFF',
    fontSize: 22,
    marginRight: 12,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    padding: 24,
    alignItems: 'center',
  },
  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FFE5E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconText: {
    fontSize: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: '#888888',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    alignSelf: 'flex-start',
    marginBottom: 6,
    marginTop: 10,
  },
  required: {
    color: '#D62828',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.6,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 51,
    marginBottom: 4,
  },
  addressWrapper: {
    height: 80,
    alignItems: 'flex-start',
    paddingTop: 10,
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
  addressInput: {
    height: 60,
    textAlignVertical: 'top',
  },
  hint: {
    fontSize: 11,
    color: '#888888',
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 24,
    marginBottom: 16,
    gap: 12,
  },
  backButton: {
    flex: 1,
    height: 48,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#D62828',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#D62828',
    fontSize: 14,
    fontWeight: 'bold',
  },
  registerButton: {
    flex: 2,
    height: 48,
    borderRadius: 10,
    backgroundColor: '#D62828',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  signinRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signinText: {
    fontSize: 13,
    color: '#888888',
  },
  signinLink: {
    fontSize: 13,
    color: '#D62828',
    fontWeight: 'bold',
  },
});