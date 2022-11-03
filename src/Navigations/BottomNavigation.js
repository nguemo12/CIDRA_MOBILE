import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashbaord from "../Dashboard/Dashbaord";
import Activities from "../Dashboard/Activities";
import home from "../../assets/images/home1.png"
import { Image } from "react-native";
const TabNavigator = createBottomTabNavigator()
const BottomNav = () => {

    return (
       
            <TabNavigator.Navigator initialRouteName="Dashboard">
                <TabNavigator.Screen name="Dashboard" component={Dashbaord} options={{headerShown:false, tabBarIcon: () => <Image source={home} style={{width : 30, height:30}}/>}}/>
                <TabNavigator.Screen name="Activites" component={Activities} options= {{headerShown:false}} />             



            </TabNavigator.Navigator>

        
           


    )
}
export default BottomNav