import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const CitizenAboutScreen = ({ navigation }) => {
  const features = [
    {
      icon: "shield-checkmark-outline",
      title: "Trusted Reporting",
      subtitle: "Verified public incidents",
    },
    {
      icon: "location-outline",
      title: "Live Tracking",
      subtitle: "Nearby emergency updates",
    },
    {
      icon: "notifications-outline",
      title: "Instant Alerts",
      subtitle: "Danger zone notifications",
    },
    {
      icon: "people-outline",
      title: "Community Support",
      subtitle: "Crowdsourced validation",
    },
    {
      icon: "call-outline",
      title: "Emergency Access",
      subtitle: "Quick contact options",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-5 pt-2 pb-4 flex-row items-center justify-between">
          <Text className="text-2xl font-bold text-slate-800">
            About Citizen App
          </Text>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="close" size={24} color="#475569" />
          </TouchableOpacity>
        </View>

        {/* Logo */}
        <View className="items-center">
          <View className="w-24 h-24 rounded-3xl bg-red-600 items-center justify-center">
            <Ionicons
              name="shield-checkmark-outline"
              size={42}
              color="white"
            />
          </View>

          <Text className="text-4xl font-bold text-slate-800 mt-4">
            ResQNow
          </Text>

          <Text className="text-gray-500 mt-1 text-center px-6">
            Smart emergency support for citizens
          </Text>
        </View>

        {/* Overview */}
        <View className="mx-5 mt-8 bg-white rounded-3xl p-5">
          <Text className="text-xl font-bold text-slate-800 mb-3">
            App Overview
          </Text>

          <Text className="text-gray-500 leading-6">
            The Citizen version helps users report emergencies, receive danger
            alerts, view nearby incidents, and support responders with trusted
            information in real time.
          </Text>
        </View>

        {/* Mission */}
        <View className="mx-5 mt-6">
          <Text className="text-xl font-bold text-slate-800 mb-3">
            Our Mission
          </Text>

          <View className="border-l-4 border-red-500 pl-4">
            <Text className="text-gray-500 leading-6">
              Empower communities to react faster, stay informed, and save lives
              during emergencies.
            </Text>
          </View>
        </View>

        {/* Features */}
        <View className="mx-5 mt-8">
          <Text className="text-xl font-bold text-slate-800 mb-4">
            Core Features
          </Text>

          {features.map((item, index) => (
            <View
              key={index}
              className="bg-white rounded-2xl p-4 mb-3 flex-row items-center"
            >
              <View className="w-11 h-11 rounded-full bg-red-100 items-center justify-center">
                <Ionicons name={item.icon} size={22} color="#DC2626" />
              </View>

              <View className="ml-4">
                <Text className="font-semibold text-slate-800">
                  {item.title}
                </Text>
                <Text className="text-gray-500 text-sm">
                  {item.subtitle}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Footer */}
        <Text className="text-center text-gray-400 my-8">
          © 2026 ResQNow
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CitizenAboutScreen;