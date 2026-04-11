import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Switch } from "react-native";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import GradientHeader from "../../components/layout/header";
import { LinearGradient } from "expo-linear-gradient";
import CustomToggle from "../../components/symbols/CustomeToggle";


/* ================= COMPONENTS ================= */

// Section Card Wrapper


const SectionCard = ({ title, icon, children }) => {
  return (
    <View className="bg-white rounded-2xl mt-5 shadow-sm overflow-hidden">

      {/* 🔴 GRADIENT HEADER */}
      <LinearGradient
        colors={[
          "rgba(214, 40, 40, 0.1)",  // #D62828 at 10%
          "rgba(0, 48, 73, 0.1)",    // #003049 at 10%
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="px-4 py-3 flex-row items-center"
      >
        <View className="w-8 h-8 rounded-lg items-center justify-center mr-2">
          {icon}
        </View>
        <Text className="text-black font-semibold text-base">
          {title}
        </Text>
      </LinearGradient>

      {/* CONTENT */}
      <View className="p-4">
        {children}
      </View>
    </View>
  );
};

// Row Item
const SettingItem = ({ title, subtitle, rightComponent, danger }) => {
  return (
    <View className="py-3 flex-row items-center justify-between">
      <View className="flex-1">
        <Text
          className={`font-medium ${danger ? "text-red-500" : "text-gray-800"
            }`}
        >
          {title}
        </Text>
        {subtitle && (
          <Text className="text-gray-400 text-xs mt-1">{subtitle}</Text>
        )}
      </View>

      {rightComponent}
    </View>
  );
};

// Toggle Button
const ToggleSwitch = ({ value, onChange }) => {
  return (
    <Switch
      value={value}
      onValueChange={onChange}
      trackColor={{ false: "#d1d5db", true: "#22c55e" }}
      thumbColor="#fff"
    />
  );
};

// Option Selector (Public / Private)
const OptionSelector = ({ selected, onSelect }) => {
  return (
    <View className="flex-row mt-3">
      {/* Public */}
      <TouchableOpacity
        onPress={() => onSelect("public")}
        className={`flex-1 p-3 rounded-xl mr-2 border ${selected === "public"
            ? "border-red-500 bg-red-50"
            : "border-gray-300"
          }`}
      >
        <View className="items-center">
          <Feather
            name="users"
            size={18}
            color={selected === "public" ? "#ef4444" : "#9ca3af"}
          />
          <Text
            className={`mt-1 text-xs ${selected === "public" ? "text-red-500" : "text-gray-400"
              }`}
          >
            Public
          </Text>
        </View>
      </TouchableOpacity>

      {/* Private */}
      <TouchableOpacity
        onPress={() => onSelect("private")}
        className={`flex-1 p-3 rounded-xl ml-2 border ${selected === "private"
            ? "border-gray-800 bg-gray-100"
            : "border-gray-300"
          }`}
      >
        <View className="items-center">
          <Feather
            name="lock"
            size={18}
            color={selected === "private" ? "#111827" : "#9ca3af"}
          />
          <Text
            className={`mt-1 text-xs ${selected === "private" ? "text-gray-800" : "text-gray-400"
              }`}
          >
            Private
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

/* ================= MAIN SCREEN ================= */

const PrivacySecuritySettings = () => {
  const [twoFactor, setTwoFactor] = useState(false);
  const [shareLocation, setShareLocation] = useState(true);
  const [shareReports, setShareReports] = useState(true);
  const [visibility, setVisibility] = useState("public");

  return (
    <View className="flex-1 bg-gray-100">
      {/* HEADER */}
      {/* Header */}
      <GradientHeader title="Profile" type="back" />

      {/* CONTENT */}
      <ScrollView className="px-4 mt-4">
        {/* SECURITY SETTINGS */}
        <SectionCard
          title="Security Settings"
          icon={<Feather name="lock" size={16} color="#ef4444" />}
        >
          <SettingItem
            title="Change Password"
            subtitle="Update your account password"
            rightComponent={
              <Feather name="lock" size={18} color="#9ca3af" />
            }
          />

          <SettingItem
            title="Two-Factor Authentication"
            subtitle="Add an extra layer of security"
            rightComponent={
              <CustomToggle
                value={twoFactor}
                onToggle={setTwoFactor}
              />
            }
          />

          <SettingItem
            title="Login History"
            subtitle="View recent login activity"
            rightComponent={
              <Feather name="smartphone" size={18} color="#9ca3af" />
            }
          />
        </SectionCard>

        {/* PRIVACY SETTINGS */}
        <SectionCard
          title="Privacy Settings"
          icon={<Feather name="shield" size={16} color="#ef4444" />}
        >
          <SettingItem
            title="Share Location"
            subtitle="Allow app to access your location"
            rightComponent={
              <CustomToggle value={shareLocation} onToggle={setShareLocation} />
            }
          />

          <View className="mt-3">
            <Text className="text-gray-800 font-medium">
              Profile Visibility
            </Text>
            <Text className="text-gray-400 text-xs">
              Control who can see your profile
            </Text>

            <OptionSelector
              selected={visibility}
              onSelect={setVisibility}
            />
          </View>

          <SettingItem
            title="Share Reports Publicly"
            subtitle="Make your reports visible to all users"
            rightComponent={
              <CustomToggle value={shareReports} onToggle={setShareReports} />
            }
          />
        </SectionCard>

        {/* DATA MANAGEMENT */}
        <SectionCard
          title="Data Management"
          icon={<Feather name="file-text" size={16} color="#f59e0b" />}
        >
          <SettingItem
            title="Download My Data"
            subtitle="Get a copy of your information"
            rightComponent={
              <Feather name="file" size={18} color="#9ca3af" />
            }
          />

          <SettingItem
            title="Delete Account"
            subtitle="Permanently delete your account"
            danger
            rightComponent={
              <MaterialIcons name="delete-outline" size={20} color="#ef4444" />
            }
          />
        </SectionCard>

        {/* FOOTER */}
        <View className="mt-6 mb-10 flex-row items-start">
          <Feather name="info" size={18} color="#6b7280" />
          <View className="ml-2 flex-1">
            <Text className="text-gray-700 font-medium">
              Your Privacy Matters
            </Text>
            <Text className="text-gray-400 text-xs mt-1">
              We are committed to protecting your privacy. Your data is
              encrypted and we never share your personal information without
              consent.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PrivacySecuritySettings;