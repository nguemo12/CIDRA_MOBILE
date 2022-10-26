import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import { FontAwesome, FontAwesome5, Fontisto, Ionicons, MaterialIcons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./Rootstack";




const TabNavigator = createBottomTabNavigator()


const BottomNav = () => {

    return (
       

            <TabNavigator.Navigator initialRouteName="Wecare">



            </TabNavigator.Navigator>

        


    )
}
export default BottomNav