import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

const FAQItem = ({ question, answer, isOpen, onPress }) => {
  return (
    <View className="mb-3">
      <TouchableOpacity
        onPress={onPress}
        className="bg-white border border-gray-200 rounded-2xl px-5 py-4 flex-row justify-between items-center"
      >
        <Text className="text-[#2B2D42] text-[16px] font-semibold pr-3 flex-1">
          {question}
        </Text>

        <Ionicons
          name={isOpen ? "chevron-up" : "chevron-down"}
          size={20}
          color="#8D99AE"
        />
      </TouchableOpacity>

      {isOpen && (
        <View className="bg-white border border-gray-200 border-t-0 rounded-b-2xl px-5 pb-5 pt-2">
          <Text className="text-[#8D99AE] text-[15px] leading-7">
            {answer}
          </Text>
        </View>
      )}
    </View>
  );
};

export default function HelpSupport_Citizen() {
  const [openIndex, setOpenIndex] = useState(1);

  const faqData = [
    {
      question: "How do I update my profile information?",
      answer:
        "Go to Profile > Edit Profile. There you can update your name, phone number, email address, and other personal details. Tap Save after making changes.",
    },
    {
      question: "Why is GPS location required?",
      answer:
        "GPS is essential for emergency coordination. It allows dispatchers to locate the nearest available responders and track response times. Your location is only shared during active incidents.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Tap Forgot Password on the login screen. Enter your registered email address and follow the verification steps to create a new password.",
    },
    {
      question: "Why am I not receiving notifications?",
      answer:
        "Please ensure notifications are enabled in both your phone settings and inside the ResQNow app. Also check your internet connection and battery optimization settings.",
    },
    {
      question: "How do I change my availability status?",
      answer:
        "Responders can change their availability from the dashboard status section. Select Available, Busy, or Offline based on your current status.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F7F7F7]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        {/* Header */}
        <View className="px-6 pt-4 pb-5 flex-row justify-between items-center">
          <Text className="text-[28px] font-bold text-[#2B2D42]">
            Help & Support
          </Text>

          <TouchableOpacity>
            <Ionicons name="close" size={26} color="#8D99AE" />
          </TouchableOpacity>
        </View>

        {/* Contact Support */}
        <View className="mx-6 bg-[#EFEFEF] rounded-3xl p-6">
          <Text className="text-[#2B2D42] text-[28px] font-bold mb-6">
            Contact Support
          </Text>

          {/* Email */}
          <View className="flex-row items-center mb-5">
            <Feather name="mail" size={22} color="#0B4F6C" />
            <View className="ml-4">
              <Text className="text-[#8D99AE] text-sm">Email</Text>
              <Text className="text-[#E53935] text-lg font-semibold">
                support@resqnow.com
              </Text>
            </View>
          </View>

          {/* Phone */}
          <View className="flex-row items-center mb-6">
            <Feather name="phone" size={22} color="#2ECC71" />
            <View className="ml-4">
              <Text className="text-[#8D99AE] text-sm">24/7 Support</Text>
              <Text className="text-[#E53935] text-lg font-semibold">
                +94 (800) RESQ-NOW
              </Text>
            </View>
          </View>

          {/* Buttons */}
          <View className="flex-row justify-between">
            <TouchableOpacity className="bg-[#E53935] rounded-2xl py-4 flex-1 mr-2 items-center">
              <Text className="text-white text-[16px] font-semibold">
                Emergency Hotline
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="border border-[#E53935] rounded-2xl py-4 flex-1 ml-2 items-center">
              <Text className="text-[#E53935] text-[16px] font-semibold">
                Live Chat
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* FAQ */}
        <View className="px-6 mt-10">
          <Text className="text-[#2B2D42] text-[26px] font-bold mb-5">
            Frequently Asked Questions
          </Text>

          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onPress={() => toggleFAQ(index)}
            />
          ))}
        </View>

        {/* Submit Request */}
        <View className="px-6 mt-8">
          <TouchableOpacity className="bg-[#E53935] rounded-2xl py-5 flex-row justify-center items-center">
            <Feather name="mail" size={20} color="white" />
            <Text className="text-white text-[18px] font-semibold ml-2">
              Submit a Support Request
            </Text>
          </TouchableOpacity>

          <Text className="text-center text-[#8D99AE] text-sm mt-5 leading-5">
            Average response time: 2-4 hours • Emergency issues prioritized
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}