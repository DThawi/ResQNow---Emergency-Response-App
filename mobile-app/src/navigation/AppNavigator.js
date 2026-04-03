import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/auth/SplashScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import Register1 from "../screens/auth/Register1";
import Register2 from "../screens/auth/Register2";
import VerifyIdentity from "../screens/auth/VerifyIdentity";
import SetPassword from "../screens/auth/SetPassword";
import SuccessfulSetPassword from "../screens/auth/SuccessfulSetPassword";
import ForgotPassword1 from "../screens/auth/ForgotPassword1";
import ForgotPassword2 from "../screens/auth/ForgotPassword2";
import ForgotPassword3 from "../screens/auth/ForgotPassword3";
import ForgotPassword4 from "../screens/auth/ForgotPassword4";
import LogoutPopup from "../screens/auth/LogoutPopup";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register1" component={Register1} />
        <Stack.Screen name="Register2" component={Register2} />
        <Stack.Screen name="VerifyIdentity" component={VerifyIdentity} />
        <Stack.Screen name="SetPassword" component={SetPassword} />
        <Stack.Screen name="SuccessfulSetPassword" component={SuccessfulSetPassword} />
        <Stack.Screen name="ForgotPassword1" component={ForgotPassword1} />
        <Stack.Screen name="ForgotPassword2" component={ForgotPassword2} />
        <Stack.Screen name="ForgotPassword3" component={ForgotPassword3} />
        <Stack.Screen name="ForgotPassword4" component={ForgotPassword4} />
        <Stack.Screen name="LogoutPopup" component={LogoutPopup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}