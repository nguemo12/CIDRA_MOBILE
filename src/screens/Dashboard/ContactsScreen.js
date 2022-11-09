import React from 'react';
import { Text, StyleSheet, View, ScrollView, Pressable, Image, TextInput } from 'react-native'

import search from "../../../assets/icons/search24.png"

import DR1T from "../../../assets/images/dr1.jpg"
import DR2T from "../../../assets/images/dr2.jpg"
import DR4T from "../../../assets/images/dr4.jpg"
import olivia from "../../../assets/images/pro.jpg"
import profile1 from '../../../assets/images/profile1.jpg'
import profile2 from '../../../assets/images/profile2.jpg'
import profile3 from '../../../assets/images/profile3.jpg'
import profile4 from '../../../assets/images/profile4.png'
const ContactsScreen = ({navigation}) => {
    const contentdoctors = [
        {
            image: DR2T,
            text: "Dr Noudem",
            text2: "last seen",
            text3: "20mins"
        },
        {
            image: DR1T,
            text: "Dr linus",
            text2: "last seen",
            text3: "20mins"
        },
        {
            image: DR4T,
            text: "Dr Maelle",
            text2: "last seen",
            text3: "20mins"
        },
        {
            image: DR2T,
            text: "Dr Noudem",
            text2: "Optalmalogist"
        },
        {
            image: DR1T,
            text: "Dr linus",
            text2: "last seen",
            text3: "20mins"
        },
        {
            image: DR4T,
            text: "Dr Maelle",
            text2: "last seen",
            text3: "20mins"
        },
        {
            image: DR2T,
            text: "Dr Noudem",
            text2: "last seen",
            text3: "20mins"
        },
        {
            image: DR1T,
            text: "Dr linus",
            text2: "last seen",
            text3: "20mins"
        },
        {
            image: DR4T,
            text: "Dr Maelle",
            text2: "last seen",
            text3: "20mins"
        },



    ]
    return (
        <View style={{ flex: 1 }}>
           <ScrollView >
           <View style={{  width: "90%", height: "8%", borderRadius: 5,  marginTop: "5%", marginLeft: "5%", flexDirection: "row", justifyContent: "space-around" , backgroundColor:"whitesmoke" }}>
                        <TextInput
                            placeholder="search doctors..."
                            placeholderTextColor={"grey"}
                            style={{ width: "90%", height: "90%", color: "black", padding:16 }}
                            secureTextEntry={true}
                            
                        />
                        <Image source={search} style={{ width: "10%", height: "60%" }} />

                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: "black", marginLeft: "3%" }}>Recent</Text>
  
                <ScrollView horizontal={true} style={{ marginLeft: "3%" }}>
                    {
                        contentdoctors.map((item, index) => {
                            return (
                                <Pressable key={index} style={{ height: "80%", width: 120, marginBottom: "15%", borderRadius: 25, marginHorizontal: 12, flex: 1 }} >
                                    <Image source={item.image} style={{ width: "85%", height: "50%", borderRadius: 50, resizeMode:'cover' }} />
                                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>{item.text}</Text>
                                    <Text style={{ color: "black" }}>{item.text2}</Text>
                                    <Text style={{ color: "black" }}>{item.text3}</Text>
                                </Pressable>
                            )
                        })

                    }
                </ScrollView>
                <Pressable onPress={() => navigation.navigate("Messages")} >
                    <View style={styles.container}>
                        <View style={styles.leftContainer}>
                            <Image source={olivia} style={styles.avatar} />
                            <View style={styles.midContainer}>


                                <Text style={styles.username}>Jasmine</Text>
                                <Text style={styles.lastMessage} >Hey good morning weshare is good</Text>
                            </View>

                        </View>
                        <Text style={styles.time}>19:30</Text>
                    </View>
                </Pressable>
                <Pressable  >
                    <View style={styles.container}>
                        <View style={styles.leftContainer}>
                            <Image source={olivia} style={styles.avatar} />
                            <View style={styles.midContainer}>


                                <Text style={styles.username}>Nadine</Text>
                                <Text style={styles.lastMessage} >Hey good morning weshare is good</Text>
                            </View>

                        </View>
                        <Text style={styles.time}>19:30</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={styles.container}>
                        <View style={styles.leftContainer}>
                            <Image source={profile4} style={styles.avatar} />
                            <View style={styles.midContainer}>


                                <Text style={styles.username}>Olivia</Text>
                                <Text style={styles.lastMessage} >Hey good morning weshare is good</Text>
                            </View>

                        </View>
                        <Text style={styles.time}>19:30</Text>
                    </View>
                </Pressable>
                <Pressable  >
                    <View style={styles.container}>
                        <View style={styles.leftContainer}>
                            <Image source={profile3} style={styles.avatar} />
                            <View style={styles.midContainer}>


                                <Text style={styles.username}>Tatiana</Text>
                                <Text style={styles.lastMessage} >Hey good morning weshare is good</Text>
                            </View>

                        </View>
                        <Text style={styles.time}>19:30</Text>
                    </View>
                </Pressable>
                <Pressable  >
                    <View style={styles.container}>
                        <View style={styles.leftContainer}>
                            <Image source={profile2} style={styles.avatar} />
                            <View style={styles.midContainer}>


                                <Text style={styles.username}>Audrey</Text>
                                <Text style={styles.lastMessage} >Hey good morning weshare is good</Text>
                            </View>

                        </View>
                        <Text style={styles.time}>19:30</Text>
                    </View>
                </Pressable>
                <Pressable  >
                    <View style={styles.container}>
                        <View style={styles.leftContainer}>
                            <Image source={profile1} style={styles.avatar} />
                            <View style={styles.midContainer}>


                                <Text style={styles.username}>Jasmine</Text>
                                <Text style={styles.lastMessage} >Hey good morning weshare is good</Text>
                            </View>

                        </View>
                        <Text style={styles.time}>19:30</Text>
                    </View>
                </Pressable>
                <Pressable  >
                    <View style={styles.container}>
                        <View style={styles.leftContainer}>
                            <Image source={profile4} style={styles.avatar} />
                            <View style={styles.midContainer}>


                                <Text style={styles.username}>Jasmine</Text>
                                <Text style={styles.lastMessage} >Hey good morning weshare is good</Text>
                            </View>

                        </View>
                        <Text style={styles.time}>19:30</Text>
                    </View>
                </Pressable>
                <Pressable  >
                    <View style={styles.container}>
                        <View style={styles.leftContainer}>
                            <Image source={profile2} style={styles.avatar} />
                            <View style={styles.midContainer}>


                                <Text style={styles.username}>Jasmine</Text>
                                <Text style={styles.lastMessage} >Hey good morning weshare is good</Text>
                            </View>

                        </View>
                        <Text style={styles.time}>19:30</Text>
                    </View>
                </Pressable>
                <Pressable  >
                    <View style={styles.container}>
                        <View style={styles.leftContainer}>
                            <Image source={profile1} style={styles.avatar} />
                            <View style={styles.midContainer}>


                                <Text style={styles.username}>Jasmine</Text>
                                <Text style={styles.lastMessage} >Hey good morning weshare is good</Text>
                            </View>

                        </View>
                        <Text style={styles.time}>19:30</Text>
                    </View>
                </Pressable>
            </ScrollView>
            
        </View>
    );
};
const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        width: "90%",
        justifyContent: 'space-between',
        padding: 10,
    },
    leftContainer: {
        flexDirection: 'row',
    },
    midContainer: {
        justifyContent: 'space-around',
    },
    avatar: {
        width: "15%",
        height: "100%",
        marginRight: 10,
        borderRadius: 50,
        resizeMode:"cover"
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
        color:"black"
    },
    lastMessage: {
        fontSize: 16,
        color: "grey",

    },
    time: {
        fontSize: 14,
        color: "grey",
    }

});
export default ContactsScreen;