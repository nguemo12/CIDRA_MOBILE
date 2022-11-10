import React, { useRef, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Pressable, StyleSheet, TextInput } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import category from "../../../assets/images/category.png";
import profile from "../../../assets/images/profile.jpg";
import arrow from "../../../assets/icons/person1.png";

import icon from "../../../assets/icons/calendar10.png";
import icon1 from "../../../assets/icons/plus.png";
import search from "../../../assets/icons/search.png"
import user from "../../../assets/icons/user.png";
import users from "../../../assets/icons/account.png";
import textfile from "../../../assets/icons/hosticon.jpeg"
import time from "../../../assets/icons/time.png"
import chart from "../../../assets/icons/barc.png"
import calenda from "../../../assets/icons/calenda.png"
import laughbeam from "../../../assets/icons/laughbeam.png";
import send from "../../../assets/icons/send.png";
import camera from "../../../assets/icons/camera4.png";
import BottomSheet from "react-native-gesture-bottom-sheet";
import paperclip from "../../../assets/icons/paperclip1.png";
import microphone from "../../../assets/icons/microphone8.png";
import graph from "../../../assets/icons/graph.png"
import comment from "../../../assets/icons/chat.png"
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    selectUser
} from "../../stores/reducers/user.reducer";


const DashbaordScreen = ({ navigation }) => {
    const authUser = useSelector(selectUser);
    const dispatch = useDispatch();
    const bottomSheet = useRef();
    const [message, setMessage] = useState('');
    console.log("authUser", authUser)

    return (

        <View style={{ flex: 1 }}>

            <ScrollView style={{ height: "100%", width: "100%", marginTop: "5%" }}>

                <ScrollView horizontal scrollEnabled style={{ height: 290, width: "100%" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: 1000,  }}>
                        <View style={{ height: "85%", width: 300, borderRadius: 25, backgroundColor: "#1F2397",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 8,
                        height: 16,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,
                    
                    elevation: 24, }}>
                            <View style={{ height: "30%", width: "95%", flexDirection: "row", justifyContent: "space-around", marginTop: "2%", }} >
                                <View style={{ height: "50%", width: "70%", borderRadius: 10, backgroundColor: "#005A9C" }}>
                                    <Text style={{ color: "white", padding: 4, fontSize: 18, fontWeight: "bold", textAlign: "center" }}>Appointments</Text>
                                </View>
                                <TouchableOpacity><Text style={{ color: "white", justifyContent: "center" }} onPress={() => navigation.navigate("AppointmentList")}>See All</Text></TouchableOpacity>

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
                        <View style={{ height: "85%", width: 300, borderRadius: 25, backgroundColor: "#1F2397",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 8,
                        height: 16,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,
                    
                    elevation: 24, }}>
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
                        <View style={{ height: "85%", width: 300, borderRadius: 25, backgroundColor: "#1F2397", 
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 8,
                        height: 16,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,
                    
                    elevation: 24, }}>
                            <View style={{ height: "30%", width: "95%", flexDirection: "row", justifyContent: "space-around", marginTop: "2%", }} >
                                <View style={{ height: "50%", width: "70%", borderRadius: 10, backgroundColor: "#005A9C" }}>
                                    <Text style={{ color: "white", padding: 4, fontSize: 18, fontWeight: "bold", textAlign: "center" }}>Drugs Prescribed</Text>
                                </View>
                                <TouchableOpacity><Text style={{ color: "white", justifyContent: "center" }} onPress={()=>navigation.navigate("DrugList")}>See All</Text></TouchableOpacity>

                            </View>
                            <View style={{ height: "60%", width: "95%", flexDirection: "row", justifyContent: "space-around", marginTop: -20, }} >
                                <View style={{ width: "40%", height: "100%", marginLeft: "4%", }}>
                                    <View style={{ height: "50%", width: "90%", borderRadius: 10, backgroundColor: "#379AE1" }}>
                                        <View style={{ height: "50%", width: "95%", justifyContent: "space-between", marginHorizontal: "2%", flexDirection: "row" }}>
                                            <Image source={time} style={{ width: 30, height: 30 }} />
                                            <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>10</Text>
                                        </View>
                                        <Text style={{ color: "white", fontSize: 10 }}>Total drugs Paid</Text>
                                    </View>
                                    <View style={{ height: "50%", width: "90%", borderRadius: 10, backgroundColor: "#379AE1", marginTop: "10%" }}>
                                        <View style={{ height: "50%", width: "95%", justifyContent: "space-between", marginHorizontal: "2%", flexDirection: "row" }}>
                                            <Image source={time} style={{ width: 30, height: 30 }} />
                                            <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>06</Text>
                                        </View>
                                        <Text style={{ color: "white", fontSize: 10 }}>Total drugs {"\n"} not paid</Text>
                                    </View>
                                </View>
                                <View style={{ height: "110%", width: "60%", borderRadius: 10, backgroundColor: "#379AE1" }}>
                                    <Text style={{ color: "white", fontSize: 14, marginLeft: "5%", marginVertical: '3%', fontWeight: 'bold' }}>Drug to intake</Text>
                                    <Image source={arrow} style={{ width: 30, height: 30, borderRadius: 5, marginLeft: "3%", marginVertical: "2%" }} />
                                    <Text style={{ color: "white", fontSize: 14, marginLeft: "5%", marginTop: '2%', fontWeight: 'bold' }}>Pharmacy la perseverance</Text>
                                    <Text style={{ color: "grey", fontSize: 14, marginLeft: "5%", fontWeight: 'bold' }}>paracetamol</Text>
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
                <View style={{ height: 190, width: "100%" }}>
                    <Image source={graph} style={{ width: 300, height: "100%", alignSelf: "center" }} />
                </View>


            </ScrollView>
            <View>
                <BottomSheet hasDraggableIcon ref={bottomSheet} height={400} width={360} sheetBackgroundColor={"#09b2c3"} >
                    <View style={{ width: "100%", height: "100%" }}>
                        <ScrollView style={{ height: "100%" }}>
                            <View style={{ width: "100%", height: 800 }}>
                                <View style={{ width: "50%", height: "10%", padding: 8, margin: 10, borderRadius: 25, backgroundColor: "lightblue", marginRight: "50%" }} ><Text>Welcome to the chatbot consultation enter your symptoms</Text></View>
                                <View style={{ width: "50%", height: "10%", padding: 8, margin: 10, borderRadius: 25, backgroundColor: "lightgrey", marginLeft: "50%" }} ><Text>Fine and you ?</Text></View>
                                <View style={{ width: "50%", height: "10%", padding: 8, margin: 10, borderRadius: 25, backgroundColor: "lightblue", marginRight: "50%" }} ><Text>Come to the meeting</Text></View>
                                <View style={{ width: "50%", height: "10%", padding: 8, margin: 10, borderRadius: 25, backgroundColor: "lightgrey", marginLeft: "50%" }} ><Text>Sure i will</Text></View>
                                <View style={{ width: "50%", height: "10%", padding: 8, margin: 10, borderRadius: 25, backgroundColor: "lightblue", marginRight: "50%" }} ><Text>Welcome to chatPay</Text></View>
                                <View style={{ width: "50%", height: "10%", padding: 8, margin: 10, borderRadius: 25, backgroundColor: "lightgrey", marginLeft: "50%" }} ><Text>Weshare is good.</Text></View>


                            </View>
                        </ScrollView>
                        <View style={styles.container}>

                            <View style={styles.mainContainer}>
                                <Image source={laughbeam} style={styles.icons} />
                                <TextInput
                                    placeholder={"Type a Message..."}
                                    style={styles.textInput}
                                    multiline
                                    value={message}
                                    onChangeText={setMessage}

                                />

                                <Image source={paperclip} style={{ width: 30, height: 30 }} />
                                {!message && <Image source={camera} style={{ width: 30, height: 30 }} />}


                            </View>


                            <View style={styles.buttonContainer}>

                                {!message
                                    ? <Image source={microphone} style={{ width: 30, height: 30, marginHorizontal: 10, }} />
                                    : <Image source={send} style={{ width: 30, height: 30, marginHorizontal: 10, }} />
                                }

                            </View>
                        </View>
                    </View>

                </BottomSheet>

                <Pressable
                    style={styles.button}
                    onPress={() => bottomSheet.current.show()}
                >
                    <Image source={comment} style={{ width: 30, height: 30 }} />
                </Pressable>
            </View>



        </View>
    );
};
const styles = StyleSheet.create({
    button: {
        backgroundColor: "#1F2397",
        width: 56,
        height: 56,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    container: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'flex-end',
        width: "80%",
        flex: 1,
        height: "20%",
        backgroundColor: "white"

    },
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: "lightblue",
        padding: 8,
        borderRadius: 25,
        marginRight: 10,


        alignItems: 'flex-end'
    },
    textInput: {

        marginHorizontal: 10,
        tintColor: "black",
        height:"10%"
    },
    icons: {
        marginHorizontal: 10,

    },
    buttonContainer: {
        backgroundColor: "lightblue",
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DashbaordScreen;