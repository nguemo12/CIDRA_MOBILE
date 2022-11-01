import { NavigationContainer } from "@react-navigation/native"
import * as React from "react"
import ForgotScreen from "./src/AuthScreeen/ForgotPassword/ForgotScreen"
import LoginScreen from "./src/AuthScreeen/LoginScreen/LoginScreen"
import RecoveryScreen from "./src/AuthScreeen/PasswordRecovery/RecoveryScreen"
import RegisterScreen from "./src/AuthScreeen/RegisterScreen/RegisterScreen"
import WelcomeScreen from "./src/AuthScreeen/Welcome/WelcomeScreen"
import ChatScreen from "./src/Dashboard/ChatScreen"
import Contacts from "./src/Dashboard/Contacts"
import RootStack from "./src/Navigations/RootNavigation"





export default function App(){
  return (
    <NavigationContainer>
    <RootStack />
    </NavigationContainer>
    
   
  )
}