import React from 'react';
import {
    createNativeStackNavigator
} from "@react-navigation/native-stack";
import {
    createBottomTabNavigator
}from "@react-navigation/bottom-tabs";
import {
    createMaterialTopTabNavigator
} from "@react-navigation/material-top-tabs";
import AppRoutes from "./routeNames";
import home from "../../assets/icons/home7.png"
import video from "../../assets/icons/forum-outline.png"
import Icon from "../Components/icons";

import ForgotScreen from "../screens/AuthScreeen/ForgotPassword/ForgotScreen";
import LoginScreen from "../screens/AuthScreeen/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/AuthScreeen/RegisterScreen/RegisterScreen";
import RecoveryScreen from "../screens/AuthScreeen/PasswordRecovery/RecoveryScreen";
import WelcomeScreen from "../screens/AuthScreeen/Welcome/WelcomeScreen";
import FingerPrintScreen from "../screens/AuthScreeen/FingerPrint/FingerPrintScreen";
import DashbaordScreen from '../screens/Dashboard/DashbaordScreen'
import ContactsScreen from '../screens/Dashboard/ContactsScreen'
import ChatScreen from '../screens/Dashboard/ChatScreen'
// import AppointmentScreen from '../screens/Dashboard/AppointmentScreen'
import AppointmentListScreen from '../screens/Dashboard/AppointmentListScreen'
import DrugListScreen from '../screens/Dashboard/DrugListScreen'
import { Image, Text, View } from 'react-native';
import VideoConferenceScreen from '../screens/Dashboard/VideoConferenceScreen';
import DashboardTopBar from '../Components/styleBar/DashboardTopBar';
import SettingScreen from '../screens/SettingScreen/SettingScreen'
import AppointmentScreen from '../screens/AppointmentScreens/AppointmentScreen'
import HomeTabNavigation from '../Components/styleBar/HomeTabNavigation';
// import DashboardTopBar from '../Components/styleBar/DashboardTopBar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function AuthStack(userVerified) {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, gestureEnabled: true }}
            initialRouteName={userVerified.userVerified ? AppRoutes.ForgotScreen : AppRoutes.LoginScreen}
        >
            <Stack.Screen name={AppRoutes.LoginScreen} component={LoginScreen} options={{ title:''}} />
            <Stack.Screen name={AppRoutes.RegisterScreen} component={RegisterScreen}  options={{ title:''}}/>
            <Stack.Screen name={AppRoutes.WelcomeScreen} component={WelcomeScreen} options={{ title:''}}/>
            <Stack.Screen name={AppRoutes.RecoveryScreen} component={RecoveryScreen}  options={{ title:''}}/>
            <Stack.Screen name={AppRoutes.ForgotScreen} component={ForgotScreen}  options={{ title:''}}/>
            <Stack.Screen name={AppRoutes.FingerPrintScreen} component={FingerPrintScreen} options={{ title:''}}/>
        </Stack.Navigator>
    )
}


function SettingStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, gestureEnabled: true }}
        >
            <Stack.Screen name={AppRoutes.SettingScreen} component={SettingScreen} options={{ title:''}} />
        </Stack.Navigator>
    )
}

function RootStack() {
    return (
            <Tab.Navigator
                screenOptions = {
                    {
                        headerShown: false,
                        gestureEnabled: false
                    }
                }
                tabBar={(props) => <HomeTabNavigation {...props} />}>
                <Tab.Screen name={AppRoutes.DashboardTopTab} component={DashboardTopTab} />
                <Tab.Screen name={AppRoutes.AppointmentStack} component={AppointmentStack} />
                <Tab.Screen name={AppRoutes.VideoConferenceScreen} component={VideoConferenceScreen} />
                <Tab.Screen name={AppRoutes.SettingStack} component={SettingStack} />         
            </Tab.Navigator>
    )
}

function AppointmentStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, gestureEnabled: true }}
        >
            <Stack.Screen name={AppRoutes.AppointmentScreen} component={AppointmentScreen} options={{ title:''}} />
        </Stack.Navigator>
    )
}

// function AppointNavigate() {
//     return(
      
//             <Stack.Navigator 
//                 screenOptions={{
//                     headerStyle:{
//                         backgroundColor:'transparent'
//                     },
//                     headerTintColor: '#1F29397',
//                     headerTransparent:true,
//                 }}
//                 >
                
//                <Stack.Screen name={AppRoutes.DashbaordScreen} component={DashbaordScreen} options={{ title:''}}/>
//                <Stack.Screen name={AppRoutes.ContactsScreen} component={ContactsScreen} options={{ title:'Chat', headerTitleStyle:{
//                 alignSelf: 'center', color:'black', fontSize:18
//                }}}/>
//                <Stack.Screen name={AppRoutes.ChatScreen} component={ChatScreen} options={{ title:''}}/>

//                <Stack.Screen name={AppRoutes.AppointmentScreen} component={AppointmentScreen} options={{ title:'Book Appointment', headerTitleStyle:{
//                 alignSelf: 'center', color:'black', fontSize:18
//                }}}/>
//                 <Stack.Screen name={AppRoutes.AppointmentListScreen} component={AppointmentListScreen} options={{ title:'List of Appointment', headerTitleStyle:{
//                 alignSelf: 'center', color:'black', fontSize:18
//                }}}/>
//                <Stack.Screen name={AppRoutes.DrugListScreen} component={DrugListScreen} options={{ title:'List of Drugs', headerTitleStyle:{
//                 alignSelf: 'center', color:'black', fontSize:18
//                }}}/>
//             </Stack.Navigator>
        
           
        
//     )
// }


function DashboardTopTab(){
  return (
    <TopTab.Navigator
        initialRouteName="Conversations"
        tabBar={(props) => <DashboardTopBar {...props} />}
        style={{
        backgroundColor: "#003D79",
        }}
        swipeEnabled = {
            false
        }
    >
      <TopTab.Screen name="Cameras" component={DashbaordScreen} options={{ icon: Icon.searchWhite, name: "Dashboard" }} />
      <TopTab.Screen name="Stories" component={VideoConferenceScreen}  options={{ icon: Icon.plusWhite , name: "hello 2" }}  />
      <TopTab.Screen name="Calls" component={VideoConferenceScreen} options={{ icon: Icon.calendarWhite , name: "hello 3" }}  />
      <TopTab.Screen name="users" component={VideoConferenceScreen} options={{ icon: Icon.userWhite , name: "hello 4" }}  />
    </TopTab.Navigator>
  );
};



// function ChatNavigate(){
//     return(
      
//             <Stack.Navigator
//             screenOptions={{
//                 headerStyle:{
//                     backgroundColor:'transparent'
//                 },
//                 headerTintColor: '#1F29397',
//                 headerTransparent:true,

//             }}
//             initialRouteName = "Chat"
//             >
              
//                <Stack.Screen name="Chat" component={Contacts} options={{ title:'', headerTitleStyle:{
//                 alignSelf: 'center', color:'black', fontSize:18
//                }}}/>
//                <Stack.Screen name="BottomNav" component={BottomNav} options={{ title:''}}/>
//                <Stack.Screen name="dashboard" component={Dashbaord} options={{ title:''}}/>
//                <Stack.Screen name="Messages" component={ChatScreen} options={{ title:''}}/>
//             </Stack.Navigator>        
//     )
// }

export {
    RootStack,
    AuthStack,
}