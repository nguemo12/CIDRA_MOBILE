import React from "react";
import WelcomeStyle from "./WelcomeStyle";
import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native"
import backlog from "../../../assets/images/bg.png"
import logo from "../../../assets/images/cidrablue.png"
import { colors } from "../../../assets/colors/colors";

const WelcomeScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <StatusBar hidden />
            <Image source={backlog} style={{ width: "100%", height: 500 }} resizeMode='cover'/>
            <View style={{bottom: 30}}>
                <Text style={{ textAlign: "center", fontSize: 35, color: colors.darkBlue, fontFamily: 'NunitoSans-ExtraBold', marginTop: 10 }}> Welcome to Cidra </Text>
                <Text style={{ textAlign: "center", color: "#003D79", fontFamily: 'NunitoSans-Regular', marginTop: 5, fontSize: 16 }}> Your MR Medical healthCare assistant</Text>
                <View style={{ width: "100%", height: "18%", flexDirection: "row", justifyContent: "space-around", marginTop: 30 }}>
                    <TouchableOpacity style={{ padding: 16, width: "60%", marginTop: "10%", height: 60, backgroundColor: colors.lightBlue, borderRadius: 50 }}><Text style={{ color: "white", textAlign: "center", fontSize: 20, fontFamily: 'NunitoSans-Black' }} onPress = {()=> navigation.push("login")}>Get Started</Text></TouchableOpacity>
                </View>
            </View>



        </View>
    )


}



export default WelcomeScreen