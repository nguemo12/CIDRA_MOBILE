import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotScreen from "../AuthScreeen/ForgotPassword/ForgotScreen";
import LoginScreen from "../AuthScreeen/LoginScreen/LoginScreen";
import RegisterScreen from "../AuthScreeen/RegisterScreen/RegisterScreen";
import RecoveryScreen from "../AuthScreeen/PasswordRecovery/RecoveryScreen";
import WelcomeScreen from "../AuthScreeen/Welcome/WelcomeScreen";
const StackPay = createNativeStackNavigator();

const RootStack =()=>{
    return(
        <NavigationContainer>
            <StackPay.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor:'transparent'
                },
                headerTintColor: '#1F29397',
                headerTransparent:true,
            }}
            
            >
               <StackPay.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
               <StackPay.Screen name="login" component={LoginScreen} options ={{headerShown:false}}/>
               <StackPay.Screen name="register" component={RegisterScreen} options={{headerShown:false}}/>
               <StackPay.Screen name="Recovery" component={RecoveryScreen} options={{headerShown:false}}/>
               <StackPay.Screen name="forgotpass" component={ForgotScreen} options={{headerShown:false}}/>
            </StackPay.Navigator>
            </NavigationContainer>
           
        
    )
}
export  default RootStack;
