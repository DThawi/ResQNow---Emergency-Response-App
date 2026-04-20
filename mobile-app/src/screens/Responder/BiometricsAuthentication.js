import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GradientHeader from "../../components/layout/header";

// 🔹 Reusable Option Card
const BiometricOption = ({ icon, title, subtitle, selected, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row items-center justify-between p-4 rounded-2xl mb-3 border 
        ${selected ? "border-red-500 bg-red-50" : "border-gray-200 bg-white"}`}
    >
      <View className="flex-row items-center">
        <View
          className={`w-12 h-12 rounded-full items-center justify-center mr-3 
          ${selected ? "bg-red-500" : "bg-gray-200"}`}
        >
          <Ionicons
            name={icon}
            size={22}
            color={selected ? "#fff" : "#666"}
          />
        </View>

        <View>
          <Text className="text-gray-800 font-semibold">{title}</Text>
          <Text className="text-gray-500 text-sm">{subtitle}</Text>
        </View>
      </View>

      {/* Radio Indicator */}
      <View
        className={`w-5 h-5 rounded-full border-2 
        ${selected ? "border-red-500 bg-red-500" : "border-gray-300"}`}
      />
    </TouchableOpacity>
  );
};

// 🔹 Info Card
const InfoCard = ({ icon, title, description, bg }) => {
  return (
    <View className={`p-4 rounded-2xl mb-3 ${bg}`}>
      <View className="flex-row items-start">
        <Ionicons name={icon} size={18} color="#444" />
        <View className="ml-2 flex-1">
          <Text className="font-semibold text-gray-800">{title}</Text>
          <Text className="text-gray-500 text-sm mt-1">{description}</Text>
        </View>
      </View>
    </View>
  );
};

const BiometricAuthentication = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <View className="flex-1 bg-white ">
      

        {/* Header */}
      <GradientHeader title="Biometric Authentication" type="back" />

        

        <ScrollView sshowsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
        className="px-4 pt-4">

            <Text className="text-gray-500 text-sm mb-4">
          Use your device's biometric features to securely and quickly access ResQNow.
        </Text>

          {/* Options */}
          <BiometricOption
            icon="finger-print"
            title="Touch ID"
            subtitle="Use your fingerprint to unlock"
            selected={selectedOption === "touch"}
            onPress={() => setSelectedOption("touch")}
          />

          <BiometricOption
            icon="phone-portrait"
            title="Face ID"
            subtitle="Use your face to unlock"
            selected={selectedOption === "face"}
            onPress={() => setSelectedOption("face")}
          />

          {/* Security Note */}
          <InfoCard
            icon="shield-checkmark-outline"
            title="Security Note"
            description="Your biometric data is stored securely on your device and is never sent to our servers. You can disable this feature at any time."
            bg="bg-yellow-100"
          />

          {/* Info */}
          <InfoCard
            icon="information-circle-outline"
            title="Need Help?"
            description="If biometric authentication fails, you can always use your password to log in."
            bg="bg-gray-100"
          />

          {/* Button */}
          <TouchableOpacity
            disabled={!selectedOption}
            className={`py-4 rounded-2xl items-center mt-2 
              ${selectedOption ? "bg-red-500" : "bg-gray-400"}`}
          >
            <Text className="text-white font-semibold">
              {selectedOption ? "Enable" : "Select an option"}
            </Text>
          </TouchableOpacity>

          {/* Cancel */}
          <TouchableOpacity className="items-center mt-4">
            <Text className="text-gray-500">Cancel</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    
  );
};

export default BiometricAuthentication;