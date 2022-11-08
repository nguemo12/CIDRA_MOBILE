import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"

import {AuthStack} from "./src/routes/routes"
import { Text } from "react-native"

export default function App(){
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  )
}