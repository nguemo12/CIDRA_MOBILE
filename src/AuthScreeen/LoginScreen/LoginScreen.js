import React, { useState } from "react";

import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native"
import backlog from '../../../assets/images/loginback.png'
import finger from '../../../assets/images/fingerprint1.png'
import logo from "../../../assets/images/cidrablue.png"
import eyeoff from "../../../assets/images/eyeoff.png"
import {
    ToastAndroid,
    Platform,
    AlertIOS,
  } from 'react-native';

function notifyMessage(msg) {
if (Platform.OS === 'android') {
  ToastAndroid.show(msg, 3000)
} else {
  AlertIOS.alert(msg);
}
}


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isEmailEmpty, setIsEmailEmpty] = useState(false)
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false)
    const checkEmptyText = () => {
        if (email == "") {
            setIsEmailEmpty(true)
            return
        }
       
        if (password == "") {
            setIsPasswordEmpty(true)
            return
        }

        notifyMessage("login successfull")

        navigation.navigate("BottomNav")
    }

   
    
    return (
        <View style={{ flex: 1, backgroundColor: "#379AE1" }}>
            <View style={{ width: "100%", height: "25%", backgroundColor: "#379AE1", flexDirection: "row" }}>

                <Image source={backlog} style={{ width: "100%", height: "100%" }} />
                <Image source={logo} style={{ width: "30%", height: "61%", alignSelf: "center", borderRadius: 50, resizeMode: "cover", marginLeft: -150 }} />

            </View>
            <View style={{ backgroundColor: "white", width: "100%", height: "75%", borderTopEndRadius: 20, borderTopStartRadius: 20 }}>
                <ScrollView style={{ height: "100%" }}>
                    <Text style={{ color: "#379AE1", fontWeight: "bold", fontSize: 30, marginTop: "10%", marginLeft: "5%" }} >Log-in</Text>
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 20, marginTop: "2%", marginLeft: "5%" }} >Welcome Back !</Text>
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 20, marginLeft: "5%" }} >You've been missed</Text>
                    <Text style={{ color: "grey", fontSize: 20, marginTop: "2%", marginLeft: "5%" }} >Please log-in to proceed</Text>
                    {
                        isEmailEmpty ?
                            <Text style={{ display: "flex", color: '#F8AE1E', marginLeft: 270, marginTop: 20 }}>*required</Text>
                            : null
                    }
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={"grey"}
                       onChange ={(text)=>setEmail(text)}
                        value={email}
                        style={{ borderWidth: 1, width: "90%", height: "10%", borderRadius: 5, marginTop: "5%", marginLeft: "5%", padding: 16, color: "black" }}

                    />
                     {
                        isPasswordEmpty ?
                            <Text style={{ display: "flex", color: '#F8AE1E', marginLeft: 270, marginTop: 20 }}>*required</Text>
                            : null
                    }
                    <View style={{ borderWidth: 1, width: "90%", height: "10%", borderRadius: 5, padding: 8, marginTop: "10%", marginLeft: "5%", flexDirection: "row", justifyContent: "space-around" }}>
                        <TextInput
                            placeholder="password"
                            placeholderTextColor={"grey"}
                            onChange ={(text)=>setPassword(text)}
                            value={password}
                            style={{ width: "90%", height: "100%", color: "black" }}
                            secureTextEntry={true}
                        />
                        <Image source={eyeoff} style={{ width: "10%", height: "60%" }} />

                    </View>
                    <Text style={{ alignSelf: "flex-end", fontSize: 20, marginVertical: "2%", fontWeight: "bold", color: "black", marginRight: "5%" }} onPress={() => navigation.navigate("forgotpass")}>Forgot Password ?</Text>

                    <View style={{ width: "90%", height: "10%", flexDirection: "row", justifyContent: "space-around" }}>
                        <TouchableOpacity style={{ padding: 8, width: "60%", height: "100%", backgroundColor: "#379AE1", borderRadius: 50 }}><Text style={{ color: "white", textAlign: "center", fontSize: 20, fontWeight: "bold" }} onPress={() => checkEmptyText() } >Login</Text></TouchableOpacity>
                        <TouchableOpacity style={{ padding: 8, width: "35%", height: "100%", backgroundColor: "#003D79", borderRadius: 50, flexDirection: "row", justifyContent: "space-between" }}><Text style={{ color: "white", fontSize: 12 }} onPress={() => navigation.navigate("fingerprint")}>or with {"\n"} fingerprint</Text>
                            <Image source={finger} style={{ width: "100%", height: "100%", alignSelf: "center" }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: "50%", height: "5%", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "10%", marginLeft: "20%" }}>
                        <Text style={{ color: "grey" }} >Not having an account?</Text>
                        <Text style={{ color: "#379AE1" }} onPress={() => navigation.navigate("register")}> Register</Text>
                    </View>
                </ScrollView>
            </View>




        </View>
    )



}



export default LoginScreen