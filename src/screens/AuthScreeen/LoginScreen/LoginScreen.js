import React, { useState } from "react";

import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native"
import backlog from '../../../../assets/images/loginback.png'
import finger from '../../../../assets/images/fingerprint1.png'
import logo from "../../../../assets/images/cidrablue.png"
import eyeoff from "../../../../assets/images/eyeoff.png"
import { colors } from "../../../../assets/colors/colors";
import CustomPasswordInput from "../../../Components/passwordinput";
import InputField from "../../../Components/InputField";
import CustomTextInput from "../../../Components/textinput";
import Toast from 'react-native-toast-message'
import {
    ToastAndroid,
    Platform,
    AlertIOS,
  } from 'react-native';
import AppRoutes from "../../../routes/routeNames"

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

    const checkValidEmail = (input) => {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (input.match(validRegex)) {
            return true;
        } else {
            return false;
        }
    }
    const checkEmptyText = () => {
        console.log("checkEmptyText");
        if (email == "") {
            setIsEmailEmpty(true)
            return
        }
       
        if (password == "") {
            setIsPasswordEmpty(true)
            return
        }
        console.log("not em");
// Toast.show({
//     type: 'error',
//     text1: 'Validation Error',
// });

            // notifyMessage("hello am im")

      

        // navigation.navigate("BottomNav")
    }

   
    
    return (
        <View style={{ flex: 1, backgroundColor: "#379AE1" }}>
            
                <View  style={{ zIndex: 1000 }}>
                    <Toast />
                </View>
            <View style={{ width: "100%", height: "25%", backgroundColor: "#379AE1", flexDirection: "row" }}>

                <Image source={backlog} style={{ width: "100%", height: "100%", top: 5 }} />
                <Image source={logo} style={{ width: "30%", height: "61%", alignSelf: "center", borderRadius: 50, resizeMode: "cover", marginLeft: -150 }} />

            </View>
            <View style={{ backgroundColor: "white", width: "100%", height: "75%", borderTopEndRadius: 20, borderTopStartRadius: 20 }}>
                <ScrollView style={{ height: "100%" }}>
                    <Text style={{ color: "#379AE1", fontSize: 30, marginTop: "10%", marginLeft: "5%", fontFamily: 'NunitoSans-Black' }} >Log-in</Text>
                    <Text style={{ color: "black",  fontSize: 20, marginTop: "2%", marginLeft: "5%", fontFamily: 'NunitoSans-Bold' }} >Welcome Back!</Text>
                    <Text style={{ color: "black", fontSize: 20, marginLeft: "5%", fontFamily: 'NunitoSans-Bold'  }} >You've been missed</Text>
                    <Text style={{ color: "grey", fontSize: 18, marginTop: "2%", marginLeft: "5%", fontFamily: 'NunitoSans-Regular'  }} >Please log-in to proceed</Text>
                    {
                        isEmailEmpty ?
                            <Text style={{ display: "flex", color: '#F8AE1E', marginLeft: 270, marginTop: 20 }}>*required</Text>
                            : null
                    }
                        <View>

                     {/* <CustomTextInput value={email} autoCorrect={false} keyboardType='email-address' onChangeText={(text)=> setEmail(text)} placeholder='e.g someone@mailservice.com' icon='email-outline'/> */}
                     <InputField placeholder="Email" onChangeText={setEmail} value={email} secureTextEntry={false} keyboardType="email-address" />
                     </View>
                     {
                        isPasswordEmpty ?
                            <Text style={{ display: "flex", color: '#F8AE1E', marginLeft: 270, marginTop: 20 }}>*required</Text>
                            : null
                    }
                    <View>
                    
                    {/* <CustomPasswordInput value={password} autoCorrect={false}  onChangeText={(text) => setPassword(text)} placeholder='Enter your password'/> */}
                    <InputField placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry={true} keyboardType="default" />

                    </View>
                    <Text style={{ alignSelf: "flex-end", fontSize: 14, marginVertical: "2%", color: "black", marginRight: "5%", fontFamily: 'NunitoSans-Bold' }} onPress={() => navigation.navigate(AppRoutes.ForgotScreen)}>Forgot Password?</Text>

                    <View style={{ width: "90%", height: "10%", flexDirection: "row", justifyContent: "space-around", marginTop: 10, alignSelf: 'center' }}>
                        <TouchableOpacity style={{ padding: 8, width: "60%", height: "100%", backgroundColor: "#379AE1", borderRadius: 50 }}><Text style={{ color: "white", textAlign: "center", fontSize: 20, fontFamily: 'NunitoSans-Black' }} onPress={() => checkEmptyText() } >Login</Text></TouchableOpacity>
                        <TouchableOpacity style={{ padding: 8, width: "35%", height: "100%", backgroundColor: "#003D79", borderRadius: 50, flexDirection: "row", justifyContent: "space-between" }} onPress={()=> navigation.navigate(AppRoutes.FingerPrintScreen)}><Text style={{ color: "white", fontSize: 10, fontFamily: 'NunitoSans-Black' }} onPress={() => navigation.navigate("fingerprint")}>or with{"\n"}fingerprint</Text>
                            <Image source={finger} style={{ width: "100%", height: "100%", alignSelf: "center" }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: "50%", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "10%", alignSelf: 'center' }}>
                        <Text style={{ color: "grey", fontFamily: 'NunitoSans-Black' }} >Not having an account?</Text>
                        <Text style={{ color: "#379AE1", fontFamily: 'NunitoSans-Black' }} onPress={() => navigation.navigate(AppRoutes.RecoveryScreen)}> Register</Text>
                    </View>
                </ScrollView>
            </View>




        </View>
    )



}



export default LoginScreen