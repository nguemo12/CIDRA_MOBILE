import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import category from "../../assets/images/category.png";
import profile from "../../assets/images/profile.jpg";
import arrow from "../../assets/icons/person1.png";
import icon from "../../assets/icons/calendar10.png";
import icon1 from "../../assets/icons/plus.png";
import search from "../../assets/icons/search.png"
import user from "../../assets/icons/user.png";
import users from "../../assets/icons/account.png";
import textfile from "../../assets/icons/hosticon.jpeg"
import time from "../../assets/icons/time.png"
import chart from "../../assets/icons/barc.png"
import calenda from "../../assets/icons/calenda.png"
import graph from "../../assets/icons/graph.png"
const Dashbaord = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: "100%", height: "25%", backgroundColor: "#003D79" }}>
                <Text style={{ color: "#379AE1", fontSize: 18, textAlign: "center" }}>Hello, Mr Agbor A.</Text>
                <View style={{ width: "95%", height: "40%", flexDirection: "row", justifyContent: "space-around" }}>
                    <Image source={category} style={{ width: "10%", height: "50%" }} />
                    <Text style={{ fontSize: 22, color: "white", fontWeight: "bold" }}>Dashbaord</Text>
                    <Image source={profile} style={{ width: "15%", height: "70%", borderRadius: 50, resizeMode: "cover" }} />
                    <View style={{ width: "5%", height: "25%", borderRadius: 50, backgroundColor: "red", marginLeft: -130 }}><Text style={{ textAlign: "center", color: "white" }}>5</Text></View>
                </View>
                <View style={{ width: "95%", height: "50%", flexDirection: "row", justifyContent: "space-around", marginTop: "2%" }}>
                    <Image source={search} style={{ width: "7%", height: "30%" }} />
                    <Text style={{ color: "white", fontSize: 28, fontWeight: "bold", textAlign: "center" }}>...</Text>
                    <Image source={icon} style={{ width: "7%", height: "30%" }} />
                    <Image source={user} style={{ width: "7%", height: "30%" }} />
                    <Image source={users} style={{ width: "7%", height: "30%" }} />
                    <Image source={icon1} style={{ width: "7%", height: "30%" }} />
                </View>
            </View>

            <ScrollView style={{ height: "100%", width: "100%", marginTop: "5%" }}>

                <ScrollView horizontal scrollEnabled style={{ height: 290, width: "100%" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: 1000, }}>
                        <View style={{ height: "85%", width: 300, borderRadius: 25, backgroundColor: "#1F2397" }}>
                            <View style={{ height: "30%", width: "95%", flexDirection: "row", justifyContent: "space-around", marginTop: "2%", }} >
                                <View style={{ height: "50%", width: "70%", borderRadius: 10, backgroundColor: "#005A9C" }}>
                                    <Text style={{ color: "white", padding: 4, fontSize: 18, fontWeight: "bold", textAlign: "center" }}>Appointments</Text>
                                </View>
                                <TouchableOpacity><Text style={{ color: "white", justifyContent: "center" }} onPress = {()=>navigation.navigate("Appointment")}>See All</Text></TouchableOpacity>

                            </View>
                            <View style={{ height: "60%", width: "95%", flexDirection: "row", justifyContent: "space-around", marginTop: -20, }} >
                                <View style={{ width: "40%", height: "100%", marginLeft: "4%", }}>
                                    <View style={{ height: "50%", width: "90%", borderRadius: 10, backgroundColor: "#379AE1" }}>
                                        <View style={{ height: "50%", width: "95%", justifyContent: "space-between", marginHorizontal: "2%", flexDirection: "row" }}>
                                            <Image source={time} style={{ width: 30, height: 30 }} />
                                            <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>10</Text>
                                        </View>
                                        <Text style={{ color: "white", fontSize: 10 }}>All Appointments made</Text>
                                    </View>
                                    <View style={{ height: "50%", width: "90%", borderRadius: 10, backgroundColor: "#379AE1", marginTop: "10%" }}>
                                        <View style={{ height: "50%", width: "95%", justifyContent: "space-between", marginHorizontal: "2%", flexDirection: "row" }}>
                                            <Image source={time} style={{ width: 30, height: 30 }} />
                                            <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>06</Text>
                                        </View>
                                        <Text style={{ color: "white", fontSize: 10 }}>All Appointments pending</Text>
                                    </View>
                                </View>
                                <View style={{ height: "110%", width: "60%", borderRadius: 10, backgroundColor: "#379AE1" }}>
                                    <Text style={{ color: "white", fontSize: 14, marginLeft: "5%", marginVertical: '3%', fontWeight: 'bold' }}>Upcoming appointment</Text>
                                    <Image source={arrow} style={{ width: 30, height: 30, borderRadius: 5, marginLeft: "3%", marginVertical: "5%" }} />
                                    <Text style={{ color: "white", fontSize: 14, marginLeft: "5%", marginTop: '2%', fontWeight: 'bold' }}>Dr. Johnny Sins</Text>
                                    <Text style={{ color: "grey", fontSize: 14, marginLeft: "5%", fontWeight: 'bold' }}>Osteopathic specialist</Text>
                                    <View style={{ height: "15%", width: "95%", marginHorizontal: "5%", flexDirection: "row" }}>
                                        <Image source={calenda} style={{ width: 16, height: 16 }} />
                                        <Text style={{ color: "white", fontSize: 10 }}>   Tomorrow (sat, Oct 30)</Text>
                                    </View>
                                    <View style={{ height: "15%", width: "95%", marginHorizontal: "5%", flexDirection: "row" }}>
                                        <Image source={chart} style={{ width: 16, height: 16 }} />
                                        <Text style={{ color: "white", fontSize: 10 }}>   9:00  --- 10:00</Text>
                                    </View>
                                </View>


                            </View>

                        </View>
                        <View style={{ height: "85%", width: 300, borderRadius: 25, backgroundColor: "#1F2397" }}>
                            <View style={{ height: "30%", width: "95%", flexDirection: "row", justifyContent: "space-around", marginTop: "2%", }} >
                                <View style={{ height: "50%", width: "70%", borderRadius: 10, backgroundColor: "#005A9C" }}>
                                    <Text style={{ color: "white", padding: 4, fontSize: 18, fontWeight: "bold", textAlign: "center" }}>Hospitals Visited</Text>
                                </View>
                                <TouchableOpacity><Text style={{ color: "white", justifyContent: "center" }}>See All</Text></TouchableOpacity>

                            </View>
                            <View style={{ height: "60%", width: "95%", flexDirection: "row", justifyContent: "space-around", marginTop: -20, }} >
                                <View style={{ width: "40%", height: "100%", marginLeft: "4%", }}>
                                    <View style={{ height: "50%", width: "90%", borderRadius: 10, backgroundColor: "#379AE1" }}>
                                        <View style={{ height: "50%", width: "95%", justifyContent: "space-between", marginHorizontal: "2%", flexDirection: "row" }}>
                                            <Image source={icon1} style={{ width: 30, height: 30 }} />
                                            <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>10</Text>
                                        </View>
                                        <Text style={{ color: "white", fontSize: 10 }}>Total Hospitals {"\n"} Visited</Text>
                                    </View>
                                    <View style={{ height: "50%", width: "90%", borderRadius: 10, backgroundColor: "#379AE1", marginTop: "10%" }}>
                                        <View style={{ height: "50%", width: "95%", justifyContent: "space-between", marginHorizontal: "2%", flexDirection: "row" }}>
                                            <Image source={icon1} style={{ width: 30, height: 30 }} />
                                            <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>06</Text>
                                        </View>
                                        <Text style={{ color: "white", fontSize: 10 }}>Total Hospitals pending visit</Text>
                                    </View>
                                </View>
                                <View style={{ height: "110%", width: "60%", borderRadius: 10, backgroundColor: "#379AE1" }}>
                                    <Text style={{ color: "white", fontSize: 14, marginLeft: "5%", marginVertical: '3%', fontWeight: 'bold' }}>Upcoming appointment {"\n"} venue </Text>
                                    <Image source={textfile} style={{ width: 30, height: 30, borderRadius: 5, marginLeft: "3%", marginVertical: "2%" }} />
                                    <Text style={{ color: "white", fontSize: 14, marginLeft: "5%", marginTop: '2%', fontWeight: 'bold' }}>Bethany Clinic</Text>
                                    <Text style={{ color: "grey", fontSize: 14, marginLeft: "5%", fontWeight: 'bold' }}>Nkolanga'a District</Text>
                                    <View style={{ height: "15%", width: "95%", marginHorizontal: "5%", flexDirection: "row" }}>
                                        <Image source={calenda} style={{ width: 16, height: 16 }} />
                                        <Text style={{ color: "white", fontSize: 10 }}>   Tomorrow (sat, Oct 30)</Text>
                                    </View>
                                    <View style={{ height: "15%", width: "95%", marginHorizontal: "5%", flexDirection: "row" }}>
                                        <Image source={chart} style={{ width: 16, height: 16 }} />
                                        <Text style={{ color: "white", fontSize: 10 }}>   9:00  --- 10:00</Text>
                                    </View>
                                </View>


                            </View>

                        </View>
                        <View style={{ height: "85%", width: 300, borderRadius: 25, backgroundColor: "#1F2397" }}>
                            <View style={{ height: "30%", width: "95%", flexDirection: "row", justifyContent: "space-around", marginTop: "2%", }} >
                                <View style={{ height: "50%", width: "70%", borderRadius: 10, backgroundColor: "#005A9C" }}>
                                    <Text style={{ color: "white", padding: 4, fontSize: 18, fontWeight: "bold", textAlign: "center" }}>Pharmacies Visited</Text>
                                </View>
                                <TouchableOpacity><Text style={{ color: "white", justifyContent: "center" }}>See All</Text></TouchableOpacity>

                            </View>
                            <View style={{ height: "60%", width: "95%", flexDirection: "row", justifyContent: "space-around", marginTop: -20, }} >
                                <View style={{ width: "40%", height: "100%", marginLeft: "4%", }}>
                                    <View style={{ height: "50%", width: "90%", borderRadius: 10, backgroundColor: "#379AE1" }}>
                                        <View style={{ height: "50%", width: "95%", justifyContent: "space-between", marginHorizontal: "2%", flexDirection: "row" }}>
                                            <Image source={time} style={{ width: 30, height: 30 }} />
                                            <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>10</Text>
                                        </View>
                                        <Text style={{ color: "white", fontSize: 10 }}>Total Pharmacies Visited</Text>
                                    </View>
                                    <View style={{ height: "50%", width: "90%", borderRadius: 10, backgroundColor: "#379AE1", marginTop: "10%" }}>
                                        <View style={{ height: "50%", width: "95%", justifyContent: "space-between", marginHorizontal: "2%", flexDirection: "row" }}>
                                            <Image source={time} style={{ width: 30, height: 30 }} />
                                            <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>06</Text>
                                        </View>
                                        <Text style={{ color: "white", fontSize: 10 }}>Total Pharmacies {"\n"} pending Visit</Text>
                                    </View>
                                </View>
                                <View style={{ height: "110%", width: "60%", borderRadius: 10, backgroundColor: "#379AE1" }}>
                                    <Text style={{ color: "white", fontSize: 14, marginLeft: "5%", marginVertical: '3%', fontWeight: 'bold' }}>Pharmacies to Visit</Text>
                                    <Image source={arrow} style={{ width: 30, height: 30, borderRadius: 5, marginLeft: "3%", marginVertical: "2%" }} />
                                    <Text style={{ color: "white", fontSize: 14, marginLeft: "5%", marginTop: '2%', fontWeight: 'bold' }}>Pharmacy la perseverance</Text>
                                    <Text style={{ color: "grey", fontSize: 14, marginLeft: "5%", fontWeight: 'bold' }}>Awae Concorde</Text>
                                    <View style={{ height: "15%", width: "95%", marginHorizontal: "5%", flexDirection: "row" }}>
                                        <Image source={calenda} style={{ width: 16, height: 16 }} />
                                        <Text style={{ color: "white", fontSize: 10 }}>   Tomorrow (sat, Oct 30)</Text>
                                    </View>
                                    <View style={{ height: "15%", width: "95%", marginHorizontal: "5%", flexDirection: "row" }}>
                                        <Image source={chart} style={{ width: 16, height: 16 }} />
                                        <Text style={{ color: "white", fontSize: 10 }}>   9:00  --- 10:00</Text>
                                    </View>
                                </View>


                            </View>

                        </View>
                        
                    </View>
                 
                </ScrollView>
             <View style={{height:190, width:"100%"}}>
             <Image source={graph} style={{width:300, height:"100%", alignSelf:"center"}}/>
             </View>

 
            </ScrollView>



        </View>
    );
};

export default Dashbaord;