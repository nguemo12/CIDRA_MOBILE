import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import forgot from '../../../../assets/images/forgot.jpeg'

const ForgotScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')

    const [isEmailEmpty, setIsEmailEmpty] = useState(false)

    const checkEmailText = () => {
        if (email == "") {
            setIsEmailEmpty(true)
            return
        } else{
            navigation.navigate("Recovery");
        }
    }

        return (
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <View style={{ width: "100%", height: "50%" }} >

                    <Image source={forgot} style={{ width: "80%", height: "100%" }} />
                </View>
                <ScrollView style={{height:"50%"}}>
                <View style={{ width: "100%", height: "120%" }}>
                    <Text style={{ fontSize: 28, fontWeight: "bold", color: "#379AE1", textAlign: "center", marginTop: "10%" }}>OTP Verification</Text>
                    <Text style={{ textAlign: "center", color: "black" }}>We will send a one Time Password {"\n"} to the following email </Text>
                    <Text style={{ marginLeft: "5%", marginTop: "2%", color: "grey" }}>Enter Email :</Text>
                    
                    {
                        isEmailEmpty ?
                            <Text style={{ display: "flex", color: '#F8AE1E', marginLeft: 270, marginTop: 20 }}>*required</Text>
                            : null
                    }
                    <TextInput
                        value={email}
                        placeholder="Email"
                        placeholderTextColor={"grey"}
                        onChange={(text) => setEmail(text)}
                        
                        style={{ borderBottomWidth: 1, width: "90%", height: "15%", borderRadius: 5, marginTop: "5%", marginLeft: "5%", padding: 16, color: "black" }}

                    />
                    <View style={{ width: "100%", height: "15%", flexDirection: "row", justifyContent: "space-around" }}>
                        <TouchableOpacity style={{ padding: 16, width: "60%", marginTop: "5%", height: "100%", backgroundColor: "#379AE1", borderRadius: 50, alignSelf: "center" }}>
                            <Text 
                            style={{ 
                                color: "white", 
                                textAlign: "center", 
                                fontSize: 20, 
                                fontWeight: "bold" 
                            }} 
                            onPress={()=> checkEmailText()}>Send OTP</Text>
                        </TouchableOpacity>

                    </View>
                    
                </View>
                </ScrollView>
            </View>
        );
    };

    export default ForgotScreen;