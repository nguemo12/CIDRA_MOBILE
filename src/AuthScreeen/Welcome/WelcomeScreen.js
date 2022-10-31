/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable semi */
import React from "react";
import WelcomeStyle from "./WelcomeStyle";
import { View, Text, Image, TouchableOpacity } from "react-native"
import backlog from "../../../assets/images/welcome.jpeg"
import logo from "../../../assets/images/cidrablue.png"

const WelcomeScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ width: "100%", height: "40%", }} >
            <Image source={backlog} style={{ width: "100%", height: "100%" }} />
            </View>
            <View style={{ backgroundColor: "whitesmoke", width: "100%", height: "60%", borderTopEndRadius: 150, borderTopStartRadius: 150 }}>
                <Image source={logo} style={{ width: "47%", height: "40%" , alignSelf:"center", borderRadius:50, resizeMode:"cover", marginTop:"3%" }} />
                <Text style={{ textAlign: "center", fontSize: 40, fontWeight: "bold", marginTop: "10%", color: "#003D79" }}> Welcome to Cidra </Text>
                <Text style={{ textAlign: "center", color: "#003D79" }}> Your MR Medical healthCare assistant</Text>
                <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-around", paddingTop:10}}>
                    <TouchableOpacity style={{width: "50%", height: "100%", backgroundColor: "#379AE1", borderRadius: 50, alignItems: 'center', marginTop: 20,}}><Text style={{ color: "white", textAlign: "center", fontSize: 20, fontWeight: "bold", marginTop: 22}} onPress = {()=> navigation.push("login")}>Get Started</Text></TouchableOpacity>

                </View>
            </View>



        </View>
    )


}



export default WelcomeScreen
