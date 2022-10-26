<<<<<<< HEAD
import React from "react";
import LoginStyle from "./LoginStyle";

import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native"
import backlog from '../../../assets/images/loginback.png'


const LoginScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#379AE1" }}>
            <View style={{ width: "100%", height: "25%", backgroundColor: "#379AE1" }}>
                <Image source={backlog} style={{ width: "100%", height: "100%" }} />
            </View>
            <View style={{ backgroundColor: "white", width: "100%", height: "75%", borderTopEndRadius: 20, borderTopStartRadius: 20 }}>
                <ScrollView style={{ height: "100%" }}>
                    <Text style={{ color: "#379AE1", fontWeight: "bold", fontSize: 30, marginTop: "10%", marginLeft: "5%" }} >Log-in</Text>
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 20, marginTop: "2%", marginLeft: "5%" }} >Welcome Back !</Text>
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 20, marginLeft: "5%" }} >You've been missed</Text>
                    <Text style={{ color: "grey", fontSize: 20, marginTop: "2%", marginLeft: "5%" }} >Please log-in to proceed</Text>
                    <TextInput
                        placeholder="Email"
                        style={{ borderWidth: 1, width: "90%", height: "10%", borderRadius: 5, marginTop: "8%", marginLeft: "5%", padding: 16, color: "black" }}

                    />
                    <View style={{ borderWidth: 1, width: "90%", height: "10%", borderRadius: 5, marginTop: "10%", marginLeft: "5%", flexDirection: "row", justifyContent: "space-between" }}>
                        <TextInput
                            placeholder="password"
                            style={{ width: "100%", height: "100%", padding: 16, color: "black" }}
                            secureTextEntry={true}
                        />

                    </View>
                    <Text style={{ alignSelf: "flex-end", fontSize: 20, marginVertical: "2%", fontWeight: "bold", color: "black", marginRight: "5%" }}>Forgot Password ?</Text>

                    <View style={{ width: "90%", height: "10%", flexDirection: "row", justifyContent: "space-around" }}>
                        <TouchableOpacity style={{ padding: 14, width: "60%", height: "100%", backgroundColor: "#379AE1", borderRadius: 50 }}><Text style={{ color: "white", textAlign: "center", fontSize: 20, fontWeight: "bold" }}>Login</Text></TouchableOpacity>
                        <TouchableOpacity style={{ padding: 8, width: "35%", height: "100%", backgroundColor: "#003D79", borderRadius: 50 }}><Text style={{ color: "white", fontSize: 12 }}>or with {"\n"} fingerprint</Text></TouchableOpacity>
                    </View>
                    <View style={{ width: "50%", height: "5%", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "10%", marginLeft: "20%" }}>
                        <Text >Not having an account?</Text>
                        <Text style={{ color: "#379AE1" }} onPress={() => navigation.navigate("register")}>Register</Text>
                    </View>
                </ScrollView>
            </View>




        </View>
    )

=======
import React from "react"; 
import LoginStyle from "./LoginStyle";

import {View , Text} from "react-native"


const LoginScreen = ()=>{
    <View>
        <View style = {{marginTop:40}}>
            <Text>LoginScreen</Text>
        </View>
    </View>
    
>>>>>>> 5f6e9f9b10d55c46ddc416c21a0d58eafa346b62


}



export default LoginScreen