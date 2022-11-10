
import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";

import backlog from '../../../../assets/images/regiback.png'
import logo from "../../../../assets/images/cidrablue.png"
import Toast from 'react-native-toast-message'
import {
    registrationAction
} from "../../../services/methods/authentication"
import Loader from "../../../Components/Loader"
import AppRoutes from '../../../routes/routeNames'

import InputField from "../../../Components/InputField";
import PrimaryButton from "../../../Components/PrimaryButton";

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([])
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [telephone, setTelephone] = useState('')
    const [loading, setLoading] = useState(false)

    const checkEmptyText = () => {
        if (email == "") {
            return true
        }
        if (name == "") {
            return true
        }
        if (password == "" && password.length < 8) {
            return true
        }
        if (confirmPassword == "") {
            return true
        }
        if (telephone == "") {
            return true
        }

       
    }
    const checkValidEmail = (input) => {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (input.match(validRegex)) {
            return true;
        } else {
            return false;
        }
    }
    const showErrorMessages = () => {
        errors.forEach((error) => {
            Toast.show({
                type: 'error',
                text1: error.msg,
            });
        })
        setErrors([])
    }
    const register = () => {
        if (!checkEmptyText()) {
            if (checkValidEmail(email)) {
                if (password == confirmPassword) {
                    setLoading(true)
                    const postData = {
                        'email': email,
                        'password': password,
                        'telephone': telephone,
                        'name': name,
                        'confirmPassword': confirmPassword
                    }
                    registrationAction(postData)
                        .then((response) => {
                            Toast.show({
                                type: 'success',
                                text1: "user created successfully",
                            });
                            setTimeout(navigation.push(AppRoutes.LoginScreen), 5000);
                        }).catch((error) => {
                            if (error.response.status == 422) {
                                error.response.data.errors.forEach((error) => {
                                    Toast.show({
                                        type: 'error',
                                        text1: error.msg,
                                    });
                                })
                            }
                        }).finally(() => {
                            setLoading(false)
                        })
                } else {
                    setErrors([
                        {
                            msg: 'confirmPassword Does Not match'
                        }
                    ])
                    showErrorMessages();
                }
                
            } else {
                setErrors([{
                    msg: 'Email is not valid'
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
            <View style={{ width: "100%", height: "25%", backgroundColor: "#379AE1", flexDirection: "row", justifyContent: "space-around" }}>
                <Image source={backlog} style={{ width: "50%", height: "100%" }} />
                <Image source={logo} style={{ width: "30%", height: "61%", alignSelf: "center", borderRadius: 50, resizeMode: "cover" }} />
            </View>

            <View style={{
                    backgroundColor: "white",
                    height: "100%",
                    width: "100%",
                    borderTopEndRadius: 20,
                    borderTopStartRadius: 20,
                }} >
                <ScrollView>
                    <View>

                    <Text style={{ color: "#379AE1", fontSize: 30, marginTop: "1%", marginLeft: "5%", fontFamily: 'NunitoSans-Black' }} >Register</Text>
                    <Text style={{ color: "black", fontSize: 20, marginTop: "1%", marginLeft: "5%", fontFamily: 'NunitoSans-Bold' }} >Get started</Text>

                    <Text style={{ color: "grey", fontSize: 17, marginTop: "1%", marginLeft: "5%", fontFamily: 'NunitoSans-Regular' }} >Create your account to have{"\n"}access to our features</Text>
                   
                    <InputField placeholder="Name" onChangeText={setName} value={name} secureTextEntry={false} keyboardType="default" />
                    <InputField placeholder="Telephone" onChangeText={setTelephone} value={telephone} secureTextEntry={false} keyboardType="numeric" />
                    <InputField placeholder="Email" onChangeText={setEmail} value={email} secureTextEntry={false} keyboardType="email-address" />
                    <InputField placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry={true} keyboardType="default" />
                    <InputField placeholder="Confirm Password" onChangeText={setConfirmPassword} value={confirmPassword} secureTextEntry={true} keyboardType="default" />

                    

                    <View style={{bottom: 9}}>
                        <PrimaryButton width="60%" text="Register" onClick={() => register()} /> 
                    </View>
                        
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", top: 4, marginVertical: 10}}>
                        <Text style={{ color: "grey", fontFamily: 'NunitoSans-Regular'  }}>Already have an account?</Text>
                        <Text style={{ color: "#379AE1", fontFamily: 'NunitoSans-Bold'  }} onPress={()=>navigation.navigate(AppRoutes.LoginScreen)}> Login</Text>
                    </View>
                    </View>

                </ScrollView>
            </View>




        </View>

    )


}


export default RegisterScreen;