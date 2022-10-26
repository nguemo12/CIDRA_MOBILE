import * as React from "react"

import ForgotScreen from "./src/AuthScreeen/ForgotPassword/ForgotScreen"
import LoginScreen from "./src/AuthScreeen/LoginScreen/LoginScreen"
import RecoveryScreen from "./src/AuthScreeen/PasswordRecovery/RecoveryScreen"
import RegisterScreen from "./src/AuthScreeen/RegisterScreen/RegisterScreen"
import WelcomeScreen from "./src/AuthScreeen/Welcome/WelcomeScreen"
import RootStack  from "./src/Navigations/RootNavigation"

import LoginScreen from "./src/AuthScreeen/LoginScreen/LoginScreen"


export default function App(){
  return (
    <RootStack />
  )
}