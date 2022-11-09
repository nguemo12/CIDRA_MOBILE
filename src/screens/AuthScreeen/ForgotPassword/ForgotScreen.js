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
            navigation.navigate("Recovery",{
                paramKey:email,
            });
        }
    }

        return (
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <View style={{ width: "100%", height: "50%" }} >

                    <Image source={forgot} style={{ width: "80%", height: "100%", alignSelf: 'center' }} resizeMode='center' />
                </View>
                <ScrollView style={{height:"50%"}}>
                <View style={{ width: "100%", height: "120%" }}>
                    <Text style={{ fontSize: 28, color: "#379AE1", textAlign: "center", marginTop: "10%", fontFamily: 'NunitoSans-Black' }}>OTP Verification</Text>
                    <Text style={{ textAlign: "center", color: "black", fontFamily: 'NunitoSans-Bold'}}>We will send a one Time Password {"\n"} to the following email </Text>
                    <Text style={{ marginLeft: "5%", marginTop: "8%", color: "grey", fontFamily: 'NunitoSans-Regular' }}>Enter Email :</Text>
                    
                    {/* {
                        isEmailEmpty ?
                            <Text style={{ display: "flex", color: '#F8AE1E', marginLeft: 270, marginTop: 20 }}>*required</Text>
                            : null
                    } */}
                    <TextInput
                        value={email}
                        placeholder="Email"
                        placeholderTextColor={"grey"}
                        onChangeText={(text) => setEmail(text)}
                        
                        style={{ borderBottomWidth: 1, width: "90%", height: "15%", borderRadius: 5, marginTop: "2  %", marginLeft: "5%", padding: 16, color: "black", fontFamily: 'NunitoSans-SemiBold' }}

                    />
                    <View style={{ width: "100%", height: "15%", flexDirection: "row", justifyContent: "space-around", marginTop: 15 }}>
                        <TouchableOpacity style={{ padding: 16, width: "60%", marginTop: "5%", height: "100%", backgroundColor: "#379AE1", borderRadius: 50, alignSelf: "center" }}>
                            <Text 
                            style={{ 
                                color: "white", 
                                textAlign: "center", 
                                fontSize: 20, 
                                fontFamily: 'NunitoSans-Black'
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