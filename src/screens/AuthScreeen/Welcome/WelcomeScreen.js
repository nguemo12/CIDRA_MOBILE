import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native"
import backlog from "../../../../assets/images/hello.png"
import logo from "../../../../assets/images/cidrablue.png"
import AppRoutes from "../../../routes/routeNames"

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
                <View style={{ width: "100%", height: "18%", flexDirection: "row", justifyContent: "space-around" }}>
                    <TouchableOpacity  onPress = {()=> navigation.push(AppRoutes.LoginScreen)} style={{ padding: 16, width: "60%", marginTop: "10%", height: "80%", backgroundColor: "#379AE1", borderRadius: 50 }}><Text style={{ color: "white", textAlign: "center", fontSize: 20, fontWeight: "bold" }}>Get Started</Text></TouchableOpacity>

                </View>
            </View>



        </View>
    )


}



export default WelcomeScreen