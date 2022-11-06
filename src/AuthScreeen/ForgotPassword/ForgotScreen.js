import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import forgot from '../../../assets/images/forgot.jpeg'

const ForgotScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ width: "100%", height: "50%" }} >
                
                <Image source={forgot} style={{ width: "80%", height: "100%" }} />
            </View>
            <View style={{ width: "100%", height: "50%" }}>
                <Text style={{ fontSize: 28, fontWeight: "bold", color: "#379AE1", textAlign: "center", marginTop: "10%" }}>OTP Verification</Text>
                <Text style={{ textAlign: "center", color: "black" }}>We will send a one Time Password {"\n"} to the following mobile phone number </Text>
                <Text style={{ marginLeft: "5%", marginTop: "2%", color: "grey" }}>Enter phone number :</Text>
                <TextInput
                    placeholder="+237"
                    placeholderTextColor={"grey"}
                    style={{ borderBottomWidth: 1, width: "90%", height: "15%", borderRadius: 5, marginTop: "2%", marginLeft: "5%", padding: 16, color: "black" }}

                />
                <View style={{ width: "100%", height: "15%", flexDirection: "row", justifyContent: "space-around" }}>
                    <TouchableOpacity style={{ padding: 16, width: "60%", marginTop: "5%", height: "100%", backgroundColor: "#379AE1", borderRadius: 50, alignSelf:"center" }}><Text style={{ color: "white", textAlign: "center", fontSize: 20, fontWeight: "bold" }} onPress= {()=>navigation.navigate("Recovery")}>Send OTP</Text></TouchableOpacity>

                </View>
            </View>

        </View>
    );
};

export default ForgotScreen;