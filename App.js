import * as React from "react"
import AppointmentList from "./src/Dashboard/AppointmentList"
import DrugList from "./src/Dashboard/DrugList"
import { Provider as PaperProvider } from 'react-native-paper';

import RootStack from "./src/Navigations/RootNavigation"



import { NavigationContainer } from "@react-navigation/native"

import {AuthStack} from "./src/routes/routes"
import { Text } from "react-native"

export default function App(){
  return (
    <NavigationContainer>
      <PaperProvider>    
      <AuthStack />
    </PaperProvider>
  </NavigationContainer>
  )
}