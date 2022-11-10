import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomNav from "./BottomNavigation";
import Dashbaord from "../Dashboard/Dashbaord";
import ChatScreen from "../Dashboard/ChatScreen";
import Contacts from "../Dashboard/Contacts";

const Stack = createNativeStackNavigator();

const ChatNavigate =()=>{
    return(
      
            <Stack.Navigator 
            screenOptions={{
                headerStyle:{
                    backgroundColor:'transparent'
                },
                headerTintColor: '#1F29397',
                headerTransparent:true,
            }}
            initialRouteName = "Chat"
            >
              
               <Stack.Screen name="BottomNav" component={BottomNav} options={{ title:''}}/>
               <Stack.Screen name="dashboard" component={Dashbaord} options={{ title:''}}/>
               <Stack.Screen name="Chat" component={Contacts} options={{ title:'', headerTitleStyle:{
                alignSelf: 'center', color:'black', fontSize:18
               }}}/>
               <Stack.Screen name="Messages" component={ChatScreen} options={{ title:''}}/>
            </Stack.Navigator>
        
           
        
    )
}
export  default ChatNavigate;