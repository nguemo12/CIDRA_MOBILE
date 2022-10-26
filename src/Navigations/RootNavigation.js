import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotScreen from "../AuthScreeen/ForgotPassword/ForgotScreen";
import LoginScreen from "../AuthScreeen/LoginScreen/LoginScreen";
import RegisterScreen from "../AuthScreeen/RegisterScreen/RegisterScreen";
import RecoveryScreen from "../AuthScreeen/PasswordRecovery/RecoveryScreen";
import WelcomeScreen from "../AuthScreeen/Welcome/WelcomeScreen";
const Stack = createNativeStackNavigator();

const RootStack =()=>{
    return(
        <NavigationContainer>
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
            </Stack.Navigator>
            </NavigationContainer>
           
        
    )
}
export  default RootStack;
