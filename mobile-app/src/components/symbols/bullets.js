import React from "react";
import { View, Text } from "react-native";

const BulletItem = ({ children }) => (
  <View className="flex-row items-start mb-1">
    <Text className="mr-2">•</Text>
    <Text className="flex-1 text-gray-700">{children}</Text>
  </View>
);

export default BulletItem;