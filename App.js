import { NavigationContainer } from "@react-navigation/native"
import * as React from "react"
import AppointmentList from "./src/Dashboard/AppointmentList"
import DrugList from "./src/Dashboard/DrugList"

import RootStack from "./src/Navigations/RootNavigation"





export default function App(){
  return (
    <NavigationContainer>
    <RootStack />
  </NavigationContainer>
   
   
    
   
  )
}