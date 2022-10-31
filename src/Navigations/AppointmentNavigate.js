import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomNav from "./BottomNavigation";
import Dashbaord from "../Dashboard/Dashbaord";
import ChatScreen from "../Dashboard/ChatScreen";
import Contacts from "../Dashboard/Contacts";
import Appointment from "../Dashboard/Appointment";

const Stack = createNativeStackNavigator();

const AppointNavigate =()=>{
    return(
      
            <Stack.Navigator 
            screenOptions={{
                headerStyle:{
                    backgroundColor:'transparent'
                },
                headerTintColor: '#1F29397',
                headerTransparent:true,
            }}

          initialRouteName = "dashboard"
            
            >
              
               <Stack.Screen name="BottomNav" component={BottomNav} options={{ title:''}}/>
               <Stack.Screen name="dashboard" component={Dashbaord} options={{ title:''}}/>
               <Stack.Screen name="Chat" component={Contacts} options={{ title:'Chat', headerTitleStyle:{
                alignSelf: 'center', color:'black', fontSize:18
               }}}/>
               <Stack.Screen name="Messages" component={ChatScreen} options={{ title:''}}/>
               <Stack.Screen name="Appointment" component={Appointment} options={{ title:'Appointment', headerTitleStyle:{
                alignSelf: 'center', color:'black', fontSize:18
               }}}/>
            </Stack.Navigator>
        
           
        
    )
}
export  default AppointNavigate;