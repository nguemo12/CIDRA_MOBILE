import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotScreen from "../AuthScreeen/ForgotPassword/ForgotScreen";
import LoginScreen from "../AuthScreeen/LoginScreen/LoginScreen";
import RegisterScreen from "../AuthScreeen/RegisterScreen/RegisterScreen";
import RecoveryScreen from "../AuthScreeen/PasswordRecovery/RecoveryScreen";
import WelcomeScreen from "../AuthScreeen/Welcome/WelcomeScreen";
import BottomNav from "./BottomNavigation";
import FingerPrintScreen from "../AuthScreeen/FingerPrint/FingerPrintScreen";
const Stack = createNativeStackNavigator();

const RootStack =()=>{
    return(
      
            <Stack.Navigator 
            screenOptions={{
                headerStyle:{
                    backgroundColor:'transparent'
                },
                headerTintColor: '#1F29397',
                headerTransparent:true,
            }}
            
            >
               <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
               <Stack.Screen name="login" component={LoginScreen} options ={{headerShown:false}}/>
               <Stack.Screen name="register" component={RegisterScreen} options={{headerShown:false}}/>
               <Stack.Screen name="Recovery" component={RecoveryScreen} options={{headerShown:false}}/>
               <Stack.Screen name="forgotpass" component={ForgotScreen} options={{headerShown:false}}/>
               <Stack.Screen name="fingerprint" component={FingerPrintScreen} options={{headerShown:false}}/>
               <Stack.Screen name="BottomNav" component={BottomNav} options={{headerShown:false}}/>
            </Stack.Navigator>
        
           
        
    )
}
export  default RootStack;
