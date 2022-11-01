import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Dashbaord from "../Dashboard/Dashbaord";
import Activities from "../Dashboard/Activities";
import home from "../../assets/icons/home7.png"
import linechart from "../../assets/icons/linechart.png"
import AppointNavigate from "./AppointmentNavigate";
import { Image } from "react-native"


const TabNavigator = createBottomTabNavigator()
const BottomNav = () => {

    return (
        
       
            <TabNavigator.Navigator 
            screenOptions={
                {
                    tabBarStyle: {
                        backgroundColor:"#003D79",
                    },
                    tabBarLabelStyle:{
                        fontSize:15,
                        color:"white"
                    }, 
                    tabBarShowLabel:false
                }
            }
            
            initialRouteName="Dashboard">
                
                <TabNavigator.Screen name="Dashboard" component={AppointNavigate} options={{headerShown:false, tabBarIcon: () => <Image source={home} style={{width:30, height: 30}}/> }}/>
                <TabNavigator.Screen name="Activites" component={Activities} options= {{headerShown:false, tabBarIcon: () => <Image source={linechart} style={{width:30, height: 30}}/>}}  />             
            </TabNavigator.Navigator>

        
           


    )
}
export default BottomNav