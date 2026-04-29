import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GradientHeader from "../../components/layout/header";

/* ---------------------- Reusable Input ---------------------- */
const PasswordInput = ({ label, value, onChange, placeholder }) => {
  const [secure, setSecure] = useState(true);

  return (
    <View className="mb-4">
      <Text className="text-gray-600 mb-1">{label}</Text>

      <View className="flex-row items-center bg-gray-100 rounded-xl px-3 py-3">
        <Ionicons name="lock-closed-outline" size={18} color="#777" />

        <TextInput
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          secureTextEntry={secure}
          className="flex-1 ml-2 text-gray-800"
        />

        <TouchableOpacity onPress={() => setSecure(!secure)}>
          <Ionicons
            name={secure ? "eye-off-outline" : "eye-outline"}
            size={18}
            color="#777"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

/* ---------------------- Strength Logic ---------------------- */
const getPasswordStrength = (password) => {
  let score = 0;

  const checks = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  Object.values(checks).forEach((v) => v && score++);

  let label = "Weak";
  let color = "bg-red-400";
  let width = "w-1/5";

  if (score >= 3) {
    label = "Medium";
    color = "bg-yellow-500";
    width = "w-3/5";
  }

  if (score === 5) {
    label = "Strong";
    color = "bg-green-500";
    width = "w-full";
  }

  return { checks, label, color, width };
};

/* ---------------------- Rule Item ---------------------- */
const RuleItem = ({ text, valid }) => (
  <View className="flex-row items-center mb-1">
    <Ionicons
      name={valid ? "checkmark-circle" : "close-circle"}
      size={16}
      color={valid ? "#22c55e" : "#9ca3af"}
    />
    <Text
      className={`ml-2 ${
        valid ? "text-green-600" : "text-gray-400"
      } text-sm`}
    >
      {text}
    </Text>
  </View>
);

/* ---------------------- Screen ---------------------- */
export default function ChangePasswordScreen() {
  const [current, setCurrent] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");

  const { checks, label, color, width } =
    getPasswordStrength(newPass);

  const passwordsMatch =
    newPass.length > 0 && newPass === confirm;

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <GradientHeader title="Change Password" type="back" />

      {/* Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
        className="px-4 pt-4"
      >
        <PasswordInput
          label="Current Password"
          value={current}
          onChange={setCurrent}
          placeholder="ABC1234"
        />

        <PasswordInput
          label="New Password"
          value={newPass}
          onChange={setNewPass}
          placeholder="ABC123abc"
        />

        <PasswordInput
          label="Confirm Password"
          value={confirm}
          onChange={setConfirm}
          placeholder="ABC123abc"
        />

        {/* Strength */}
        <View className="mb-4">
          <View className="flex-row justify-between mb-1">
            <Text className="text-gray-600">
              Password Strength
            </Text>
            <Text className="text-yellow-500 font-medium">
              {label}
            </Text>
          </View>

          <View className="w-full h-2 bg-gray-200 rounded-full">
            <View
              className={`${color} ${width} h-2 rounded-full`}
            />
          </View>
        </View>

        {/* Rules */}
        <View className="bg-gray-100 p-3 rounded-xl mb-4">
          <RuleItem text="At least 8 characters" valid={checks.length} />
          <RuleItem text="One uppercase letter" valid={checks.upper} />
          <RuleItem text="One lowercase letter" valid={checks.lower} />
          <RuleItem text="One number" valid={checks.number} />
          <RuleItem text="One special character" valid={checks.special} />
        </View>

        {/* Match */}
        {passwordsMatch && (
          <View className="flex-row items-center mb-4">
            <Ionicons
              name="checkmark-circle"
              size={16}
              color="#22c55e"
            />
            <Text className="text-green-600 ml-2">
              Passwords match
            </Text>
          </View>
        )}

        {/* Button */}
        <TouchableOpacity className="bg-red-600 py-3 rounded-xl items-center mb-3">
          <Text className="text-white font-semibold">
            Update Password
          </Text>
        </TouchableOpacity>

        {/* Cancel */}
        <TouchableOpacity className="items-center">
          <Text className="text-gray-600">Cancel</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}