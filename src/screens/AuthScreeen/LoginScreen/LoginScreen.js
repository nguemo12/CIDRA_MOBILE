import React, { useContext, useState } from "react";

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
import PrimaryButton from "../../../Components/PrimaryButton";
import Loader from "../../../Components/Loader"
import { loginAction } from "../../../services/methods/authentication";
import { AppContext } from "../../../context/AppContext";
import {
    NativeModules
} from "react-native";

const LoginScreen = ({ navigation }) => {

    const { setStoredToken, setAuthUser } = useContext(AppContext);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(false)

    const checkValidEmail = (input) => {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (input.match(validRegex)) {
            return true;
        } else {
            return false;
        }
    }
    const checkEmptyText = () => {
        if (email == "") {
            return true;
        }
       
        if (password == "" && password.length < 8) {
            return true;
        }
    }
    const showErrorMessages = () => {
        errors.forEach((error) => {
            Toast.show({
                type: 'error',
                text1: error.msg,
            });
        })
    }
    
    const login = () => {
        if (!checkEmptyText()) {
            if (checkValidEmail(email)) {
                setLoading(true)
                const postData = {
                    'email': email,
                    'password': password,
                }
                loginAction(postData)
                    .then((response) => {
                        if (response) {
                            setAuthUser({
                                name: "Patien",
                                email: "patien@gmail.com",
                                id: "fkasjdflkajsdlfkjalksdfj"
                            })
                            setStoredToken("fasdklfjaklsfdjklajsdfkljasklfdjklasdjflk")
                            navigation.push(AppRoutes.RootStack)
                            // NativeModules.DevSettings.reload();
                        } else {
                            setErrors([{
                                msg: 'Server error'
                            }])
                            showErrorMessages();
                        }
                    }).catch((error) => {
                        console.log("error", error)
                    }).finally(() => {
                        setLoading(false)
                    })

            } else {
                setErrors([{
                    msg: 'confirmPassword Does Not match'
                }])
                showErrorMessages();
            }
        } else {
            setErrors([{
                msg: 'All fields are required'
            }])
            showErrorMessages();
        }
    }

   
    
    return (
        <View style={{ flex: 1, backgroundColor: "#379AE1" }}>
            <Loader loading={loading} />
            
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
                    
                    <InputField placeholder="Email" onChangeText={setEmail} value={email} secureTextEntry={false} keyboardType="email-address" />                    
                    <InputField placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry={true} keyboardType="default" />


                    <Text style={{ alignSelf: "flex-end", fontSize: 14, marginVertical: "2%", color: "black", marginRight: "5%", fontFamily: 'NunitoSans-Bold' }} onPress={() => navigation.navigate(AppRoutes.ForgotScreen)}>Forgot Password?</Text>

                    
                    <View style={{bottom: 9}}>
                        <PrimaryButton width="60%" text="Login" onClick={() => login()} /> 
                    </View>
                    <View style={{ width: "50%", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "10%", alignSelf: 'center' }}>
                        <Text style={{ color: "grey", fontFamily: 'NunitoSans-Black' }} >Not having an account?</Text>
                        <Text style={{ color: "#379AE1", fontFamily: 'NunitoSans-Black' }} onPress={() => navigation.navigate(AppRoutes.RegisterScreen)}> Register</Text>
                    </View>
                </ScrollView>
            </View>




        </View>
    )



}



export default LoginScreen