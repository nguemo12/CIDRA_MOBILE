/* eslint-disable prettier/prettier */
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createMaterialTopTabNavigator
} from "@react-navigation/material-top-tabs";

import AppRoutes from "./routeNames";
import LoginScreen from "../screens/authentication/LoginScreen";
import RegisterScreen from "../screens/authentication/RegisterScreen";




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();



function AuthStack() {

    return (
      <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: true }}>
          <Stack.Screen name={AppRoutes.LoginScreen} component={LoginScreen} />
          <Stack.Screen name={AppRoutes.RegisterScreen} component={RegisterScreen} />
      </Stack.Navigator>
    );
}

function RootStack({ userType }) {
    // return (
    //     <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: true }}>
    //         {/* <Stack.Screen name={AppRoutes.ListAccountScreen} component={ListAccountScreen} /> */}
    //         {userType === "teacher" ? (
    //             <>
    //             <Stack.Screen name={AppRoutes.TeacherStack} component={TeacherStack} />
    //             </>
    //         ) : (
    //             <>
    //             {/* <Stack.Screen name={AppRoutes.StudentStack} component={StudentStack} /> */}
    //             {/* <Stack.Screen name={AppRoutes.TeacherStack} component={TeacherStack} /> */}
    //             </>
    //          )}
    //             <Stack.Screen name={AppRoutes.OnCallScreen} component={OnCallScreen} />
    //     </Stack.Navigator>
    // )
}



export { RootStack, AuthStack };