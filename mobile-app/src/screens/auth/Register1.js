import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Register1({ navigation }) {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleContinue = () => {
    if (!selectedRole) {
      alert('Please select a role to continue');
      return;
    }
    navigation.navigate('Register2', { role: selectedRole });
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
        <Text style={styles.title}>Select Your Role</Text>
        <Text style={styles.subtitle}>Choose how you want to use ResQNow</Text>

        <TouchableOpacity onPress={() => setSelectedRole('Citizen')}>
          <LinearGradient
            colors={['#261007', '#6D1307']}
            style={[styles.card, selectedRole === 'Citizen' && styles.selectedCard]}
          >
            <Text style={styles.cardIcon}>👥</Text>
            <Text style={styles.cardTitle}>Citizen</Text>
            <Text style={styles.cardDesc}>Report emergencies and help your community</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelectedRole('Responder')}>
          <LinearGradient
            colors={['#022334', '#001F33']}
            style={[styles.card, selectedRole === 'Responder' && styles.selectedCard]}
          >
            <Text style={styles.cardIcon}>🚑</Text>
            <Text style={styles.cardTitle}>Responder</Text>
            <Text style={styles.cardDesc}>Respond to incidents and save lives</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelectedRole('Admin')}>
          <LinearGradient
            colors={['#5E1616', '#A81313']}
            style={[styles.card, selectedRole === 'Admin' && styles.selectedCard]}
          >
            <Text style={styles.cardIcon}>🛡️</Text>
            <Text style={styles.cardTitle}>Admin</Text>
            <Text style={styles.cardDesc}>Manage system and monitor operations</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.switchText}>You can switch roles anytime from settings</Text>

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>→  Continue</Text>
        </TouchableOpacity>

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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 24,
  },
  card: {
    width: '100%',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 16,
    minWidth: 300,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  cardIcon: {
    fontSize: 36,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  cardDesc: {
    fontSize: 13,
    color: '#DDDDDD',
    textAlign: 'center',
  },
  switchText: {
    fontSize: 12,
    color: '#888888',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#D62828',
    width: '100%',
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});