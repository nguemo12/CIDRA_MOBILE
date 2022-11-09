import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Pressable, Button } from 'react-native';
import logo from "../../../../assets/images/cidrablue.png"
import back from "../../../../assets/images/back.png"
import fprint from "../../../../assets/images/fingerprint.jpeg"
const FingerPrintScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ width: "95%", height: "20%", justifyContent: "space-between", flexDirection: "row",  }}>

              
               <Text style={{fontSize:1}} onPress={()=>navigation.navigate("login")}>back</Text>

                <Image source={logo} style={{ width: "30%", height: "80%", alignSelf: "center", borderRadius: 50, resizeMode: "cover" }} />

            </View>
            <View style={{ backgroundColor: "white", width: "100%", height: "70%" }}>
               
                    <Text style={{ color: "#379AE1", fontWeight: "bold", fontSize: 30, marginLeft: "5%" }} >Log-in</Text>
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 20, marginTop: "2%", marginLeft: "5%" }} >with your fingerprint scanner</Text>
                    <Text style={{ color: "grey", fontWeight: "bold", fontSize: 20, marginLeft: "5%" }} >Use touch ID for {"\n"} faster & easy access to your account</Text>
                    <Image source={fprint} style={{ width: "50%", height: "39%", alignSelf: "center", marginVertical: '10%', resizeMode:"cover" }} />
                    <Text style={{ color: "#003D79", fontWeight: "bold", fontSize: 30,  textAlign: "center" }} >62%</Text>
                    <Text style={{ color: "black", fontWeight: "bold",  textAlign: "center" }} >scanning...</Text>
                    <Text style={{ color: "#379AE1", fontWeight: "bold", marginLeft: "5%", marginTop: "1%", }}>_____________________________________</Text>
              
            </View>
            <View style={{ backgroundColor: "#003D79", width: "100%", height: "20%" }}>

            </View>


        </View>
    );
};

export default FingerPrintScreen;