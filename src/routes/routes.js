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

import ForgotScreen from "../screens/AuthScreen/ForgotPassword/ForgotScreen";
import LoginScreen from "../screens/AuthScreen/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/AuthScreen/RegisterScreen/RegisterScreen";
import RecoveryScreen from "../screens/AuthScreen/PasswordRecovery/RecoveryScreen";
import WelcomeScreen from "../screens/AuthScreen/Welcome/WelcomeScreen";
import FingerPrintScreen from "../screens/AuthScreen/FingerPrint/FingerPrintScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, gestureEnabled: true }}
        >
            <Stack.Screen name={AppRoutes.WelcomeScreen} component={WelcomeScreen} options={{ title:''}}/>
            <Stack.Screen name={AppRoutes.LoginScreen} component={LoginScreen} options={{ title:''}} />
            <Stack.Screen name={AppRoutes.RegisterScreen} component={RegisterScreen}  options={{ title:''}}/>
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