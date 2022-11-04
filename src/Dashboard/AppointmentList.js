
import React, { useRef, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Pressable, StyleSheet, TextInput } from "react-native"
import calenda from "../../assets/icons/calendar10.png"
import time from "../../assets/icons/time.png"

import chart from "../../assets/icons/plus.png"
import profile from "../../assets/images/profile.jpg";
import dot from "../../assets/icons/dot.png";
import DRT2 from "../../assets/images/dr2.jpg";
import hospital4 from "../../assets/images/hospital4.jpg"
const AppointmentList = ({navigation}) => {
    return (
        <View style={{ flex: 1, marginTop: "8%", }}>
            <ScrollView style={{ height: "100%" }}>
                <Text style={{ color: "black", marginLeft: "5%", fontSize: 20, fontWeight: 'bold', marginVertical: '3%', }}> Appointment of the day!</Text>
                <View style={{ height: "22%", width: "80%", borderRadius: 10, backgroundColor: "#1F2397", marginLeft: '5%', }}>
                    <View style={{ height: "30%", width: "95%", padding: 4, flexDirection: 'row', justifyContent: "space-between" }}>
                        <View>
                            <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>Dr. Johnny Sins</Text>
                            <Text style={{ fontSize: 12, color: "white" }}>Dermatologist</Text>
                        </View>
                        <Image source={DRT2} style={{ width: 50, height: 50, borderRadius: 50, resizeMode: "cover" }} />

                    </View>
                    <View style={{ height: "30%", width: "95%", padding: 4, flexDirection: 'row', justifyContent: "space-between" }}>
                        <View>
                            <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>Bethany Hospital</Text>
                            <Text style={{ fontSize: 12, color: "white" }}>Nkolanga'a District</Text>
                        </View>
                        <Image source={hospital4} style={{ width: 50, height: 50, borderRadius: 50, resizeMode: "cover" }} />

                    </View>
                    <View style={{ height: "10%", width: "95%", padding: 4, flexDirection: 'row', justifyContent: "space-around" }}>

                        <Image source={calenda} style={{ width: 15, height: 15 }} />
                        <Text style={{ fontSize: 10, color: "white" }}>11/03/2022</Text>
                        <Image source={time} style={{ width: 15, height: 15 }} />

                        <Text style={{ fontSize: 10, color: "white" }}>11:30 AM</Text>
                        <Image source={dot} style={{ width: 10, height: 10 }} />
                        <Text style={{ fontSize: 10, color: "white" }}>Confirmed</Text>


                    </View>
                </View>
                <Text style={{ color: "black", marginLeft: "5%", fontSize: 20, fontWeight: 'bold', marginVertical: '3%', }}>Recent Appointments!</Text>
                <ScrollView horizontal scrollEnabled style={{ height: 250, width: "100%" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: 1200, }}>
                        <View style={{ height: "100%", width: "30%", borderRadius: 10, backgroundColor: "#1F2397", marginHorizontal: '5%',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 8,
                        height: 16,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,
                    
                    elevation: 24, }}>
                            <View style={{ height: "30%", width: "95%", padding: 4, flexDirection: 'row', justifyContent: "space-between" }}>
                                <View>
                                    <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>Dr. Johnny Sins</Text>
                                    <Text style={{ fontSize: 12, color: "white" }}>Dermatologist</Text>
                                </View>
                                <Image source={DRT2} style={{ width: 50, height: 50, borderRadius: 50, resizeMode: "cover" }} />

                            </View>
                            <View style={{ height: "30%", width: "95%", padding: 4, flexDirection: 'row', justifyContent: "space-between" }}>
                                <View>
                                    <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>Bethany Hospital</Text>
                                    <Text style={{ fontSize: 12, color: "white" }}>Nkolanga'a District</Text>
                                </View>
                                <Image source={hospital4} style={{ width: 50, height: 50, borderRadius: 50, resizeMode: "cover" }} />

                            </View>
                            <View style={{ height: "10%", width: "95%", padding: 4, flexDirection: 'row', justifyContent: "space-around" }}>

                                <Image source={calenda} style={{ width: 15, height: 15 }} />
                                <Text style={{ fontSize: 10, color: "white" }}>11/03/2022</Text>
                                <Image source={time} style={{ width: 15, height: 15 }} />

                                <Text style={{ fontSize: 10, color: "white" }}>11:30 AM</Text>
                                <Image source={dot} style={{ width: 10, height: 10 }} />
                                <Text style={{ fontSize: 10, color: "white" }}>Confirmed</Text>


                            </View>
                        </View>
                        <View style={{ height: "100%", width: "30%", borderRadius: 10, backgroundColor: "#1F2397", marginHorizontal: '5%',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 8,
                        height: 16,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,
                    
                    elevation: 24, }}>
                            <View style={{ height: "30%", width: "95%", padding: 4, flexDirection: 'row', justifyContent: "space-between" }}>
                                <View>
                                    <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>Dr. Johnny Sins</Text>
                                    <Text style={{ fontSize: 12, color: "white" }}>Dermatologist</Text>
                                </View>
                                <Image source={DRT2} style={{ width: 50, height: 50, borderRadius: 50, resizeMode: "cover" }} />

                            </View>
                            <View style={{ height: "30%", width: "95%", padding: 4, flexDirection: 'row', justifyContent: "space-between" }}>
                                <View>
                                    <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>Bethany Hospital</Text>
                                    <Text style={{ fontSize: 12, color: "white" }}>Nkolanga'a District</Text>
                                </View>
                                <Image source={hospital4} style={{ width: 50, height: 50, borderRadius: 50, resizeMode: "cover" }} />

                            </View>
                            <View style={{ height: "10%", width: "95%", padding: 4, flexDirection: 'row', justifyContent: "space-around" }}>

                                <Image source={calenda} style={{ width: 15, height: 15 }} />
                                <Text style={{ fontSize: 10, color: "white" }}>11/03/2022</Text>
                                <Image source={time} style={{ width: 15, height: 15 }} />

                                <Text style={{ fontSize: 10, color: "white" }}>11:30 AM</Text>
                                <Image source={dot} style={{ width: 10, height: 10 }} />
                                <Text style={{ fontSize: 10, color: "white" }}>Confirmed</Text>


                            </View>
                        </View>
                        <View style={{ height: "100%", width: "30%", borderRadius: 10, backgroundColor: "#1F2397", marginHorizontal: '5%',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 8,
                        height: 16,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,
                    
                    elevation: 24, }}>
                            <View style={{ height: "30%", width: "95%", padding: 4, flexDirection: 'row', justifyContent: "space-between" }}>
                                <View>
                                    <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>Dr. Johnny Sins</Text>
                                    <Text style={{ fontSize: 12, color: "white" }}>Dermatologist</Text>
                                </View>
                                <Image source={DRT2} style={{ width: 50, height: 50, borderRadius: 50, resizeMode: "cover" }} />

                            </View>
                            <View style={{ height: "30%", width: "95%", padding: 4, flexDirection: 'row', justifyContent: "space-between" }}>
                                <View>
                                    <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>Bethany Hospital</Text>
                                    <Text style={{ fontSize: 12, color: "white" }}>Nkolanga'a District</Text>
                                </View>
                                <Image source={hospital4} style={{ width: 50, height: 50, borderRadius: 50, resizeMode: "cover" }} />

                            </View>
                            <View style={{ height: "10%", width: "95%", padding: 4, flexDirection: 'row', justifyContent: "space-around" }}>

                                <Image source={calenda} style={{ width: 15, height: 15 }} />
                                <Text style={{ fontSize: 10, color: "white" }}>11/03/2022</Text>
                                <Image source={time} style={{ width: 15, height: 15 }} />

                                <Text style={{ fontSize: 10, color: "white" }}>11:30 AM</Text>
                                <Image source={dot} style={{ width: 10, height: 10 }} />
                                <Text style={{ fontSize: 10, color: "white" }}>Confirmed</Text>


                            </View>
                        </View>
                        
                       
                    

                    </View>
                </ScrollView>
                <Text style={{ color: "black", marginLeft: "5%", fontSize: 20, fontWeight: 'bold', marginVertical: '3%', }}>Pending Appointments!</Text>
                <ScrollView horizontal scrollEnabled style={{ height: 250, width: "100%" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: 1200, }}>
                        <View style={{ height: "100%", width: "30%", borderRadius: 10, backgroundColor: "#1F2397", marginHorizontal: '5%',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 8,
                        height: 16,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,
                    
                    elevation: 24, }}>
                            <View style={{ height: "30%", width: "95%", padding: 4, flexDirection: 'row', justifyContent: "space-between" }}>
                                <View>
                                    <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>Dr. Johnny Sins</Text>
                                    <Text style={{ fontSize: 12, color: "white" }}>Dermatologist</Text>
                                </View>
                                <Image source={DRT2} style={{ width: 50, height: 50, borderRadius: 50, resizeMode: "cover" }} />

                            </View>
                            <View style={{ height: "30%", width: "95%", padding: 4, flexDirection: 'row', justifyContent: "space-between" }}>
                                <View>
                                    <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>Bethany Hospital</Text>
                                    <Text style={{ fontSize: 12, color: "white" }}>Nkolanga'a District</Text>
                                </View>
                                <Image source={hospital4} style={{ width: 50, height: 50, borderRadius: 50, resizeMode: "cover" }} />

                            </View>
                            <View style={{ height: "10%", width: "95%", padding: 4, flexDirection: 'row', justifyContent: "space-around" }}>

                                <Image source={calenda} style={{ width: 15, height: 15 }} />
                                <Text style={{ fontSize: 10, color: "white" }}>11/03/2022</Text>
                                <Image source={time} style={{ width: 15, height: 15 }} />

                                <Text style={{ fontSize: 10, color: "white" }}>11:30 AM</Text>
                                <Image source={dot} style={{ width: 10, height: 10 }} />
                                <Text style={{ fontSize: 10, color: "white" }}>Confirmed</Text>


                            </View>
                        </View>
                        <View style={{ height: "100%", width: "30%", borderRadius: 10, backgroundColor: "#1F2397", marginHorizontal: '5%',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 8,
                        height: 16,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,
                    
                    elevation: 24, }}>
                            <View style={{ height: "30%", width: "95%", padding: 4, flexDirection: 'row', justifyContent: "space-between" }}>
                                <View>
                                    <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>Dr. Johnny Sins</Text>
                                    <Text style={{ fontSize: 12, color: "white" }}>Dermatologist</Text>
                                </View>
                                <Image source={DRT2} style={{ width: 50, height: 50, borderRadius: 50, resizeMode: "cover" }} />

                            </View>
                            <View style={{ height: "30%", width: "95%", padding: 4, flexDirection: 'row', justifyContent: "space-between" }}>
                                <View>
                                    <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>Bethany Hospital</Text>
                                    <Text style={{ fontSize: 12, color: "white" }}>Nkolanga'a District</Text>
                                </View>
                                <Image source={hospital4} style={{ width: 50, height: 50, borderRadius: 50, resizeMode: "cover" }} />

                            </View>
                            <View style={{ height: "10%", width: "95%", padding: 4, flexDirection: 'row', justifyContent: "space-around" }}>

                                <Image source={calenda} style={{ width: 15, height: 15 }} />
                                <Text style={{ fontSize: 10, color: "white" }}>11/03/2022</Text>
                                <Image source={time} style={{ width: 15, height: 15 }} />

                                <Text style={{ fontSize: 10, color: "white" }}>11:30 AM</Text>
                                <Image source={dot} style={{ width: 10, height: 10 }} />
                                <Text style={{ fontSize: 10, color: "white" }}>Confirmed</Text>


                            </View>
                        </View>
                        <View style={{ height: "100%", width: "30%", borderRadius: 10, backgroundColor: "#1F2397", marginHorizontal: '5%',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 8,
                        height: 16,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,
                    
                    elevation: 24, }}>
                            <View style={{ height: "30%", width: "95%", padding: 4, flexDirection: 'row', justifyContent: "space-between" }}>
                                <View>
                                    <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>Dr. Johnny Sins</Text>
                                    <Text style={{ fontSize: 12, color: "white" }}>Dermatologist</Text>
                                </View>
                                <Image source={DRT2} style={{ width: 50, height: 50, borderRadius: 50, resizeMode: "cover" }} />

                            </View>
                            <View style={{ height: "30%", width: "95%", padding: 4, flexDirection: 'row', justifyContent: "space-between" }}>
                                <View>
                                    <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>Bethany Hospital</Text>
                                    <Text style={{ fontSize: 12, color: "white" }}>Nkolanga'a District</Text>
                                </View>
                                <Image source={hospital4} style={{ width: 50, height: 50, borderRadius: 50, resizeMode: "cover" }} />

                            </View>
                            <View style={{ height: "10%", width: "95%", padding: 4, flexDirection: 'row', justifyContent: "space-around" }}>

                                <Image source={calenda} style={{ width: 15, height: 15 }} />
                                <Text style={{ fontSize: 10, color: "white" }}>11/03/2022</Text>
                                <Image source={time} style={{ width: 15, height: 15 }} />

                                <Text style={{ fontSize: 10, color: "white" }}>11:30 AM</Text>
                                <Image source={dot} style={{ width: 10, height: 10 }} />
                                <Text style={{ fontSize: 10, color: "white" }}>Confirmed</Text>


                            </View>
                        </View>
                        
                       
                    

                    </View>
                </ScrollView>
            </ScrollView>
            <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate("Appointment")}
                >
                    <Image source={chart} style={{ width: 30, height: 30 }} />
                </Pressable>
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
export default AppointmentList;