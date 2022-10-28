import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import recovery from '../../../assets/images/recovery.jpeg'

const RecoveryScreen =({navigation}) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
           
        <View style={{ width: "100%", height: "50%" }} >
            <Image source={recovery} style={{ width: "100%", height: "80%" }} />
        </View>
        <View style={{ width: "100%", height: "50%" }}>
            <Text style={{ fontSize: 28, fontWeight: "bold", color: "#379AE1", textAlign: "center", marginTop: "10%" }}>OTP Verification</Text>
            <Text style={{ textAlign: "center", color: "black" }}> Enter the OTP code sent to +237******** </Text>
         <View style={{ flexDirection:"row", justifyContent:"space-around"}}>
            <TextInput
                placeholder="8"
                placeholderTextColor={"grey"}
                style={{ borderBottomWidth: 1, width: "15%", height: "80%", borderRadius: 5, marginTop: "2%", marginLeft: "5%", padding: 16, color: "black", fontSize:22 }}

            />
                       <TextInput
                placeholder="8"
                placeholderTextColor={"grey"}
                style={{ borderBottomWidth: 1, width: "15%", height: "80%", borderRadius: 5, marginTop: "2%", marginLeft: "5%", padding: 16, color: "black", fontSize:22 }}

            />
          <TextInput
                placeholder="8"
                placeholderTextColor={"grey"}
                style={{ borderBottomWidth: 1, width: "15%", height: "80%", borderRadius: 5, marginTop: "2%", marginLeft: "5%", padding: 16, color: "black", fontSize:22 }}

            />
                      <TextInput
                placeholder="8"
                placeholderTextColor={"grey"}
                style={{ borderBottomWidth: 1, width: "15%", height: "80%", borderRadius: 5, marginTop: "2%", marginLeft: "5%", padding: 16, color: "black", fontSize:22 }}

            />
            </View>
            <View style={{flexDirection:"row", justifyContent:"center", marginTop: "5%"}}>
                <Text style={{color:"black"}} >Didn't recieve the code?</Text>
                <Text style={{color:"#379AE1"}} > Resend code</Text>

            </View>
            <View style={{ width: "90%", height: "15%", flexDirection: "row", justifyContent: "space-around" }}>
                <TouchableOpacity style={{ padding: 16, width: "60%", marginTop: "5%", height: "90%", backgroundColor: "#379AE1", borderRadius: 50 }}><Text style={{ color: "white", textAlign: "center", fontSize: 20, fontWeight: "bold" }}>Verify</Text></TouchableOpacity>

            </View>
        </View>

    </View>
    );
}

export default RecoveryScreen;