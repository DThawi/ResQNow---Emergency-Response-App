import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';

const IncidentCard = ({ 
  type = "Emergency", 
  status = "New Report", 
  description, 
  location, 
  timeAgo, 
  verifications = 0, 
  onPress 
}) => {
  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={onPress} 
      activeOpacity={0.9}
    >
      {/* Header Row: Icon, Title, and Status Badge */}
      <View style={styles.headerRow}>
        <View style={styles.titleContainer}>
          <MaterialCommunityIcons name="alert-outline" size={24} color="#D32F2F" />
          <Text style={styles.titleText}>{type}</Text>
        </View>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{status}</Text>
        </View>
      </View>

      {/* Description Content */}
      <Text style={styles.descriptionText} numberOfLines={2}>
        {description}
      </Text>

      {/* Info Row: Location and Time */}
      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <Feather name="map-pin" size={14} color="#94A3B8" />
          <Text style={styles.infoText}>{location}</Text>
        </View>
        <View style={styles.infoItem}>
          <Feather name="clock" size={14} color="#94A3B8" />
          <Text style={styles.infoText}>{timeAgo}</Text>
        </View>
      </View>

      {/* Bottom Row: Verifications */}
      <View style={styles.verificationRow}>
        <Ionicons name="people-outline" size={18} color="#10B981" />
        <Text style={styles.verificationText}>{verifications} verifications</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 4,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    // Elevation for Android
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  statusBadge: {
    backgroundColor: '#D32F2F',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 12,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  infoText: {
    fontSize: 13,
    color: '#94A3B8',
  },
  verificationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    paddingTop: 12,
  },
  verificationText: {
    fontSize: 14,
    color: '#1E293B',
    fontWeight: '500',
  },
});

export default IncidentCard;
