import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BulletItem from "../components/symbols/bullets";


const PrivacyPolicy = ({ navigation }) => {
  return (
    <View className="flex-1 bg-gray-100">

      {/* Header */}
      
      <LinearGradient
      colors={["#D62828", "#003049"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      className="flex-row justify-between items-center px-4 py-4">
        <Text className="text-white text-lg font-bold">Privacy Policy</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text className="text-white text-lg">✕</Text>
        </TouchableOpacity>
        </LinearGradient>
      

      {/* Content */}
      <ScrollView className="p-4">

        <Text className="text-base font-bold text-gray-800 mt-3 mb-2">
          1. Information We Collect
        </Text>

       <BulletItem>
          <Text className="font-bold">Personal Information:</Text> Name, email, phone number, profile photo
        </BulletItem>

        <BulletItem>
          <Text className="font-bold">Location Data:</Text> Real-time GPS coordinates during active emergency response operations
        </BulletItem>

        <BulletItem>
          <Text className="font-bold">Professional Information:</Text> Organization details, credentials, certifications, and specialization
        </BulletItem>

        <BulletItem>
          <Text className="font-bold">Usage Analytics(Optional):</Text> App interaction patterns to improve service quality
        </BulletItem>

         <Text className="text-base font-bold text-gray-800 mt-3 mb-2">
          2. How We Use Your Data
        </Text>

       <BulletItem>
          <Text className="font-bold">Emergency Coordination:</Text> To dispatch and coordinate emergency responders efficiently
        </BulletItem>

        <BulletItem>
          <Text className="font-bold">Real-Time Communication:</Text> To send critical incident alerts and updates
        </BulletItem>

        <BulletItem>
          <Text className="font-bold">Performance Improvement:</Text> To analyze system performance and enhance response times
        </BulletItem>

        <BulletItem>
          <Text className="font-bold">Verification:</Text> To authenticate responder credentials and maintain platform security
        </BulletItem>


    

        {/* Card */}
        <View className="bg-gray-200 p-4 rounded-xl mt-4">
          <Text className="font-bold text-gray-800 mb-1">
            Questions About Privacy?
          </Text>
          <Text className="text-red-600 font-semibold">
            privacy@resqnow.com
          </Text>
        </View>

        <Text className="text-center text-gray-400 text-xs mt-6">
          Last Updated: February 17, 2026
        </Text>

      </ScrollView>
    </View>
  );
};

export default PrivacyPolicy;