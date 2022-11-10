
import React, { useRef, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Pressable, StyleSheet, TextInput } from "react-native"
import calenda from "../../../assets/icons/calendar10.png"
import qrcode from "../../../assets/icons/qrcode.png"

import chart from "../../../assets/icons/plus.png"
import coins from "../../../assets/icons/cash.png";
import fine from "../../../assets/icons/f.png";
import dot from "../../../assets/icons/dot.png";
import DRT2 from "../../../assets/images/medical.jpg";
import hospital4 from "../../../assets/images/hospital4.jpg"
const DrugListScreen = ({
        navigation
    }) => {
    return (
        <View style={{ flex: 1, marginTop: "8%", }}>
            <ScrollView style={{ height: "100%" }}>
                <Text style={{ color: "black", marginLeft: "5%", fontSize: 20, fontWeight: 'bold', marginVertical: '3%', }}> Drug of the day!</Text>
                <View style={{ height: "100%", width: "80%",  backgroundColor: "white", marginLeft: '5%', }}>
                    <View style={{ height: "42%", width: "95%", padding: 4, flexDirection: 'row', justifyContent: "space-between",borderRadius: 50, }}>
                        <View>
                            <Image source={DRT2} style={{ width: 80, height: 80, resizeMode: "cover" }} />
                            <Text style={{ fontSize: 18, color: "black", fontWeight: "bold" }}>Hydrochiarth</Text>
                            <Text style={{ fontSize: 14, color: "black" }}>Dermatologist</Text>
                        </View>
                        <View>
                            <Image source={hospital4} style={{ width: 80, height: 80, resizeMode: "cover", borderRadius: 50 }} />
                            <Text style={{ fontSize: 18, color: "black", fontWeight: "bold" }}>Pharmacy</Text>
                            <Text style={{ fontSize: 14, color: "black" }}>La perseverance</Text>
                        </View>


                    </View>

                    <View style={{ height: "3%", width: "95%", padding: 4, flexDirection: 'row', justifyContent: "space-around", flex:1 }}>

                        <Image source={fine} style={{ width: 15, height: 15 }} />
                        <Text style={{ fontSize: 10, color: "black" }}>10000</Text>
                        <Image source={coins} style={{ width: 15, height: 15 }} />

                        <Text style={{ fontSize: 10, color: "black" }}>Tablets</Text>
                        <Image source={dot} style={{ width: 10, height: 10 }} />
                        <Text style={{ fontSize: 10, color: "black" }}>paid</Text>


                    </View>
                    <View style={{ height: "60%", width: "100%", flexDirection: 'row', justifyContent: "space-around", backgroundColor: "#09b2c3" }}>

                        <View>
                        <Image source={qrcode} style={{ width: 80, height: 80, alignSelf:"center", marginTop:"2%" }} />
                        <Text style={{color:"black", fontWeight:"bold"}}>Scan to see record</Text>
                        </View>
                       


                    </View>
                </View>


            </ScrollView>

        </View>
    );
};
const styles = StyleSheet.create({
    button: {
        backgroundColor: "#09b2c3",
        width: 56,
        height: 56,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20
    }
});
export default DrugListScreen;