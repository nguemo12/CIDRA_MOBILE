import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity, TextInput } from "react-native"
import { ScrollView } from 'react-native';
import search from "../../assets/icons/search24.png"
import hospital2 from "../../assets/images/hospital2.jpg"
import hospital from "../../assets/images/hospital.jpg"
import hospital4 from "../../assets/images/hospital4.jpg"
import DR1T from "../../assets/images/dr1.jpg"
import DR2T from "../../assets/images/dr2.jpg"
import DR4T from "../../assets/images/dr4.jpg"
import DatePicker from 'react-native-datepicker';

const Appointment = ({ navigation }) => {
    const [date, setDate] = useState('09-10-2021');

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
            text: "Noudem",
            text2: "Optalmalogist"
        },
        {
            image: DR1T,
            text: "linus",
            text2: "Optalmalogist"
        },
        {
            image: DR4T,
            text: "Maelle",
            text2: "Optalmalogist"
        },
        {
            image: DR2T,
            text: "Noudem",
            text2: "Optalmalogist"
        },
        {
            image: DR1T,
            text: "linus",
            text2: "Optalmalogist"
        },
        {
            image: DR4T,
            text: "Maelle",
            text2: "Optalmalogist"
        },
        {
            image: DR2T,
            text: "Noudem",
            text2: "Optalmalogist"
        },
        {
            image: DR1T,
            text: "linus",
            text2: "Optalmalogist"
        },
        {
            image: DR4T,
            text: "Maelle",
            text2: "Optalmalogist"
        },



    ]
    return (
        <View style={{ flex: 1, marginTop: 90, }}>
            <View style={{ width: "90%", height: "8%", borderRadius: 5, marginTop: "5%", marginLeft: "5%", flexDirection: "row", justifyContent: "space-around", backgroundColor: "whitesmoke" }}>
                <TextInput
                    placeholder="search hospitals, doctors..."
                    placeholderTextColor={"grey"}
                    style={{ width: "90%", height: "90%", color: "black", padding: 16 }}
                    secureTextEntry={true}

                />
                <Image source={search} style={{ width: "10%", height: "60%" }} />

            </View>
            <ScrollView style={{ maxHeight: "100%", maxWidth: "100%" }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: "black", marginLeft: "3%" }}>Recommended Hospitals</Text>
                <Text style={{ color: "black", marginLeft: "3%" }}>Based on location</Text>
                <ScrollView horizontal={true} style={{ marginLeft: "3%" }}>
                    {
                        content.map((item, index) => {
                            return (
                                <Pressable key={index} style={{ height: "80%", width: 120, marginBottom: "15%", borderRadius: 25, marginHorizontal: 12, flex: 1 }} >
                                    <Image source={item.image} style={{ width: "90%", height: "70%", borderRadius: 20, }} />
                                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>{item.text}</Text>
                                    <Text style={{ color: "black" }}>{item.text2}</Text>
                                </Pressable>
                            )
                        })

                    }
                </ScrollView>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: "black", marginLeft: "3%" }}>Doctors</Text>
                <Text style={{ color: "black", marginLeft: "3%" }}>Recommended based on hospital choice</Text>
                <ScrollView horizontal={true} style={{ marginLeft: "3%" }}>
                    {
                        contentdoctors.map((item, index) => {
                            return (
                                <Pressable key={index} style={{ height: "80%", width: 120, marginBottom: "15%", borderRadius: 25, marginHorizontal: 12, flex: 1 }} >
                                    <Image source={item.image} style={{ width: "90%", height: "70%", borderRadius: 20, }} />
                                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>{item.text}</Text>
                                    <Text style={{ color: "black" }}>{item.text2}</Text>
                                </Pressable>
                            )
                        })

                    }
                </ScrollView>
                <Text style={{ marginLeft: "3%", color: "black" }}>Choose an appointment date</Text>
                <Text style={{ marginLeft: "3%", color: "black", fontSize: 24, fontWeight: "bold" }}> Oct. 2022 </Text>
                <DatePicker
                    style={styles.datePickerStyle}
                    date={date}
                    mode="date"
                    placeholder="select date"
                    format="DD/MM/YYYY"
                    minDate="01-01-1900"
                    maxDate="01-01-2000"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            right: -5,
                            top: 4,
                            marginLeft: 0,
                        },
                        dateInput: {
                            borderColor: "gray",
                            alignItems: "flex-start",
                            borderWidth: 0,
                            borderBottomWidth: 1,
                        },
                        placeholderText: {
                            fontSize: 17,
                            color: "gray",
                            marginLeft: '3%'
                        },
                        dateText: {
                            fontSize: 17,
                            marginLeft: '3%'
                        }
                    }}
                    onDateChange={(date) => {
                        setDate(date);
                    }}
                />
                <TouchableOpacity style={{ padding: 8, width: "60%", height: "6%", backgroundColor: "#379AE1", borderRadius: 50, flexDirection: 'row', alignSelf: "center", marginVertical: "2%" }}>
                    <Text style={{ color: "white", textAlign: "center", fontSize: 20, fontWeight: "bold" }} >Book Appointment</Text></TouchableOpacity>
            </ScrollView>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A8E9CA',

    },
    title: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
    },
    datePickerStyle: {
        width: 230,
    },
    text: {
        textAlign: 'left',
        width: 230,
        fontSize: 16,
        color: "#000",
        marginLeft: '3%'



    }
});

export default Appointment;