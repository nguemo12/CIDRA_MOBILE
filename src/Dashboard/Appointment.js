import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from "react-native"
import { ScrollView } from 'react-native';
import search from "../../assets/icons/search24.png"
import hospital2 from "../../assets/images/hospital2.jpg"
import hospital from "../../assets/images/hospital.jpg"
import hospital4 from "../../assets/images/hospital4.jpg"
import DR1T from "../../assets/images/dr1.jpg"
import DR2T from "../../assets/images/dr2.jpg"
import DR4T from "../../assets/images/dr4.jpg"
const Appointment = ({ navigation }) => {
    const content = [
        {
            image: hospital2,
            text: "Bethany clinic",
            text2: "Nkolanga'a District"
        },
        {
            image: hospital,
            text: "Bethany clinic",
            text2: "Nkolanga'a District"
        },
        {
            image: hospital4,
            text: "Bethany clinic",
            text2: "Nkolanga'a District"
        },
        {
            image: hospital2,
            text: "Bethany clinic",
            text2: "Nkolanga'a District"
        },
        {
            image: hospital,
            text: "Bethany clinic",
            text2: "Nkolanga'a District"
        },
        {
            image: hospital4,
            text: "Bethany clinic",
            text2: "Nkolanga'a District"
        },
        {
            image: hospital2,
            text: "Bethany clinic",
            text2: "Nkolanga'a District"
        },

    ]
    const contentdoctors = [
        {
            image: DR2T,
            text: "Linus",
            text2: "Optalmalogist"
        },
        {
            image: DR1T,
            text: "Claire",
            text2: "Optalmalogist"
        },
        {
            image: DR4T,
            text: "Noudem",
            text2: "Optalmalogist"
        },
        {
            image: DR2T,
            text: "Linus",
            text2: "Optalmalogist"
        },
        {
            image: DR1T,
            text: "Claire",
            text2: "Optalmalogist"
        },
        {
            image: DR4T,
            text: "Noudem",
            text2: "Optalmalogist"
        },
        {
            image: DR2T,
            text: "Linus",
            text2: "Optalmalogist"
        },
        {
            image: DR1T,
            text: "Claire",
            text2: "Optalmalogist"
        },
        {
            image: DR4T,
            text: "Noudem",
            text2: "Optalmalogist"
        },


    ]
    return (
        <View style={{ flex: 1, marginTop: 90, }}>
            <View style={{ width: "80%", height: "6%", justifyContent: "space-between", flexDirection: "row", backgroundColor: "whitesmoke", borderRadius: 10, padding: 8, marginLeft: "10%", }}>
                <Text style={{ fontSize: 16, color: "black" }}>Search doctors, hospitals...</Text>
                <Image source={search} style={{ width: 30, height: 30 }} />
            </View>
            <ScrollView style={{ maxHeight: "100%", maxWidth: "100%" }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: "black" }}>Recommended Hospitals</Text>
                <Text style={{color:"black"}}>Based on location</Text>
                <ScrollView horizontal={true} style={{ marginLeft: "3%" }}>
                    {
                        content.map((item, index) => {
                            return (
                                <Pressable key={index} style={{ height: "50%", width: 120, marginBottom: "15%", borderRadius: 25, marginHorizontal: 12, flex: 1 }} >
                                    <Image source={item.image} style={{ width: "90%", height: "70%", borderRadius: 20, }} />
                                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>{item.text}</Text>
                                    <Text style={{ color: "black" }}>{item.text2}</Text>
                                </Pressable>
                            )
                        })

                    }
                </ScrollView>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: "black", marginLeft: "3%"  }}>Doctors</Text>
                <Text style={{color:"black", marginLeft: "3%" }}>Recommended based on hospital choice</Text>
                <ScrollView horizontal={true} style={{ marginLeft: "3%" }}>
                    {
                        contentdoctors.map((item, index) => {
                            return (
                                <Pressable key={index} style={{ height: "50%", width: 120, marginBottom: "15%", borderRadius: 25, marginHorizontal: 12, flex: 1 }} >
                                    <Image source={item.image} style={{ width: "90%", height: "70%", borderRadius: 20, }} />
                                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>{item.text}</Text>
                                    <Text style={{ color: "black" }}>{item.text2}</Text>
                                </Pressable>
                            )
                        })

                    }
                </ScrollView>

            </ScrollView>

        </View>
    );
};

export default Appointment;