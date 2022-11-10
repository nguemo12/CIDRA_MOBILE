import * as React from "react"

import { Provider as PaperProvider } from 'react-native-paper';



import { NavigationContainer } from "@react-navigation/native"

import {AuthStack} from "./src/routes/routes"
import { RootStack } from "./src/routes/routes";
import { Text } from "react-native"

export default function App(){
  return (
    <NavigationContainer>
      <PaperProvider>    
      <RootStack />
    </PaperProvider>
  </NavigationContainer>
  )
}