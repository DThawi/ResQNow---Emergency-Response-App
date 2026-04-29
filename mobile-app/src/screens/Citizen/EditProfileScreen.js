// src/screens/Profile/EditProfileScreen.js

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GradientHeader from "../../components/layout/header";
import API from "../../services/api";

const EditProfileScreen = ({ navigation }) => {
  const [image, setImage] = useState("https://i.pravatar.cc/150?img=12");

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  // -----------------------------------------
  // Load Profile Data
  // -----------------------------------------
  const fetchProfile = async () => {
    try {
      setLoading(true);

      const res = await API.get("/users/profile");
      // backend response example:
      // {
      //   fullName,
      //   email,
      //   phone,
      //   address,
      //   profileImage
      // }

      const user = res.data;

      setForm({
        fullName: user.fullName || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
      });

      if (user.profileImage) {
        setImage(user.profileImage);
      }
    } catch (error) {
      Alert.alert("Error", "Failed to load profile");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // -----------------------------------------
  // Handle Input Change
  // -----------------------------------------
  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  // -----------------------------------------
  // Save Profile
  // -----------------------------------------
  const handleSave = async () => {
    try {
      setSaving(true);

      await API.put("/users/profile", form);

      Alert.alert("Success", "Profile updated successfully");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "Failed to update profile");
      console.log(error);
    } finally {
      setSaving(false);
    }
  };

  // -----------------------------------------
  // Loading Screen
  // -----------------------------------------
  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-100">
      <GradientHeader title="Profile" type="back" />

      <ScrollView className="px-5">
        {/* Profile Image */}
        <View className="items-center mt-6">
          <View className="relative">
            <Image
              source={{ uri: image }}
              className="w-28 h-28 rounded-full"
            />

            <TouchableOpacity className="absolute bottom-0 right-0 bg-yellow-400 p-2 rounded-full">
              <Ionicons name="camera" size={16} color="white" />
            </TouchableOpacity>
          </View>

          <Text className="text-gray-500 mt-2 text-sm">
            Tap to change photo
          </Text>
        </View>

        {/* Form */}
        <View className="mt-6 space-y-4">
          {/* Full Name */}
          <View>
            <Text className="text-gray-700 mb-2 font-medium">
              Full Name
            </Text>

            <View className="flex-row items-center bg-white border border-gray-300 rounded-xl px-3 py-3">
              <Ionicons
                name="person-outline"
                size={18}
                color="#6B7280"
              />

              <TextInput
                value={form.fullName}
                onChangeText={(text) =>
                  handleChange("fullName", text)
                }
                placeholder="John Anderson"
                className="ml-3 flex-1 text-gray-700"
              />
            </View>
          </View>

          {/* Email */}
          <View>
            <Text className="text-gray-700 mb-2 font-medium">
              Email Address
            </Text>

            <View className="flex-row items-center bg-white border border-gray-300 rounded-xl px-3 py-3">
              <Ionicons
                name="mail-outline"
                size={18}
                color="#6B7280"
              />

              <TextInput
                value={form.email}
                onChangeText={(text) =>
                  handleChange("email", text)
                }
                placeholder="john@email.com"
                keyboardType="email-address"
                className="ml-3 flex-1 text-gray-700"
              />
            </View>
          </View>

          {/* Phone */}
          <View>
            <Text className="text-gray-700 mb-2 font-medium">
              Phone Number
            </Text>

            <View className="flex-row items-center bg-white border border-gray-300 rounded-xl px-3 py-3">
              <Ionicons
                name="call-outline"
                size={18}
                color="#6B7280"
              />

              <TextInput
                value={form.phone}
                onChangeText={(text) =>
                  handleChange("phone", text)
                }
                placeholder="+94 77 123 4567"
                keyboardType="phone-pad"
                className="ml-3 flex-1 text-gray-700"
              />
            </View>
          </View>

          {/* Address */}
          <View>
            <Text className="text-gray-700 mb-2 font-medium">
              Address
            </Text>

            <View className="flex-row items-center bg-white border border-gray-300 rounded-xl px-3 py-3">
              <Ionicons
                name="location-outline"
                size={18}
                color="#6B7280"
              />

              <TextInput
                value={form.address}
                onChangeText={(text) =>
                  handleChange("address", text)
                }
                placeholder="123 Main Street"
                className="ml-3 flex-1 text-gray-700"
              />
            </View>
          </View>
        </View>

        {/* Buttons */}
        <View className="mt-8 mb-10">
          <TouchableOpacity
            onPress={handleSave}
            disabled={saving}
            className="bg-red-600 py-4 rounded-xl items-center"
          >
            {saving ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text className="text-white font-semibold text-base">
                Save Changes
              </Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="mt-4 border border-red-500 py-4 rounded-xl items-center"
          >
            <Text className="text-red-500 font-semibold text-base">
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfileScreen;