
import React, {useState} from "react";
import RegisterStyle from "./RegisterStyles";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native"
import backlog from '../../../assets/images/regiback.png'
import logo from "../../../assets/images/cidrablue.png"
import eyeoff from "../../../assets/images/eyeoff.png"
const RegisterScreen = ({ navigation }) => {
    const   [Email, setEmail] = useState('');
    const   [Username, setUsername] = useState('');
    const   [Password, setPassword] = useState('');
    const   [ConfirmPassword, setConfirmPassword] = useState('');
    return (

        <View style={{ flex: 1, backgroundColor: "#379AE1" }}>
            <View style={{ width: "100%", height: "25%", backgroundColor: "#379AE1", flexDirection:"row", justifyContent:"space-around" }}>
                <Image source={backlog} style={{ width: "50%", height: "100%" }} />
                <Image source={logo} style={{ width: "30%", height: "61%" , alignSelf:"center", borderRadius:50, resizeMode:"cover" }} />
            </View>

            <View style={{ backgroundColor: "white", width: "100%", height: "80%", borderTopEndRadius: 20, borderTopStartRadius: 20 }}>
                <ScrollView style={{ height: "100%" }}>
                    <Text style={{ color: "#379AE1", fontWeight: "bold", fontSize: 30, marginTop: "1%", marginLeft: "5%" }} >Register</Text>
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 20, marginTop: "1%", marginLeft: "5%" }} >Get started</Text>

                    <Text style={{ color: "grey", fontSize: 20, marginTop: "1%", marginLeft: "5%" }} >Create your account to {"\n"} have access to our features</Text>
                    <TextInput
                        placeholder="Username"
                        placeholderTextColor={"grey"}
                        value={Username}
                        style={{ borderWidth: 1, width: "90%", height: "10%", borderRadius: 5, marginTop: "5%", marginLeft: "5%", padding: 16, color: "black" }}

                    />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={"grey"}
                        value={Email}
                        style={{ borderWidth: 1, width: "90%", height: "10%", borderRadius: 5, marginTop: "5%", marginLeft: "5%", padding: 16, color: "black" }}

                    />
                    <View style={{ borderWidth: 1, width: "90%", height: "10%", borderRadius: 5, padding: 8,  marginTop: "10%", marginLeft: "5%", flexDirection: "row", justifyContent: "space-around" }}>
                        <TextInput
                            placeholder="password"
                            placeholderTextColor={"grey"}
                            value = {Password}
                            style={{ width: "90%", height: "100%", color: "black" }}
                            secureTextEntry={true}
                        />
                        <Image source={eyeoff} style={{ width: "10%", height: "60%" }}  />

                    </View>
                    <View style={{ borderWidth: 1, width: "90%", height: "10%", borderRadius: 5, padding: 8,  marginTop: "10%", marginLeft: "5%", flexDirection: "row", justifyContent: "space-around" }}>
                        <TextInput
                            placeholder="Confirm password"
                            value={ConfirmPassword}
                            placeholderTextColor={"grey"}
                            style={{ width: "90%", height: "100%", color: "black" }}
                            secureTextEntry={true}
                        />
                        <Image source={eyeoff} style={{ width: "10%", height: "60%" }}  />

                    </View>


                    <View style={{ width: "90%", height: "10%", flexDirection: "row", justifyContent: "space-around" }}>
                        <TouchableOpacity style={{ padding: 14, width: "60%", marginTop: "5%", height: "100%", backgroundColor: "#379AE1", borderRadius: 50 }}><Text style={{ color: "white", textAlign: "center", fontSize: 20, fontWeight: "bold" }} onPress={() => navigation.navigate("login")}>Register</Text></TouchableOpacity>

                    </View>
                    <View style={{ width: "50%", height: "5%", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "5%", marginLeft: "20%" }}>
                        <Text style={{color: "grey"}}>Already have an account?</Text>
                        <Text style={{ color: "#379AE1" }} onPress={() => navigation.navigate("login")}> Login</Text>
                    </View>
                </ScrollView>
            </View>




        </View>

    )


    }


export default RegisterScreen;