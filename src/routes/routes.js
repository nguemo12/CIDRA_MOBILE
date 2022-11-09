import React from 'react';
import {
    createNativeStackNavigator
} from "@react-navigation/native-stack";
import {
    createBottomTabNavigator
}from "@react-navigation/bottom-tabs";
import {
    createMaterialTopTabNavigator
} from "@react-navigation/material-top-tabs";
import AppRoutes from "./routeNames";

import ForgotScreen from "../screens/AuthScreeen/ForgotPassword/ForgotScreen";
import LoginScreen from "../screens/AuthScreeen/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/AuthScreeen/RegisterScreen/RegisterScreen";
import RecoveryScreen from "../screens/AuthScreeen/PasswordRecovery/RecoveryScreen";
import WelcomeScreen from "../screens/AuthScreeen/Welcome/WelcomeScreen";
import FingerPrintScreen from "../screens/AuthScreeen/FingerPrint/FingerPrintScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, gestureEnabled: true }}
        >
            <Stack.Screen name={AppRoutes.RegisterScreen} component={RegisterScreen}  options={{ title:''}}/>
            <Stack.Screen name={AppRoutes.WelcomeScreen} component={WelcomeScreen} options={{ title:''}}/>
            <Stack.Screen name={AppRoutes.LoginScreen} component={LoginScreen} options={{ title:''}} />
            <Stack.Screen name={AppRoutes.RecoveryScreen} component={RecoveryScreen}  options={{ title:''}}/>
            <Stack.Screen name={AppRoutes.ForgotScreen} component={ForgotScreen}  options={{ title:''}}/>
            <Stack.Screen name={AppRoutes.FingerPrintScreen} component={FingerPrintScreen} options={{ title:''}}/>
        </Stack.Navigator>
    )
}

export {
    // RootStack,
    AuthStack
};