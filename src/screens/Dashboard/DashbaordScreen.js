import React, { useRef, useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Pressable, StyleSheet, TextInput } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import category from "../../../assets/images/category.png";
import profile from "../../../assets/images/profile.jpg";
import arrow from "../../../assets/icons/person1.png";
import  MessageGroupComponent  from "../../Components/MessageGroupComponent"

import { NlpManager } from 'node-nlp-rn';
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
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
const DashbaordScreen = ({ navigation }) => {
    const bottomSheet = useRef();
    const manager = new NlpManager({ languages: ['en'], forceNER: true });

    const [managerIsTrained, setManagerIsTrained] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState("");

    // Adds the utterances and intents for the NLP
    manager.addDocument('en', 'goodbye for now', 'greetings.bye');
    manager.addDocument('en', 'bye bye take care', 'greetings.bye');
    manager.addDocument('en', 'bye', 'greetings.bye');
    manager.addDocument('en', 'goodbye', 'greetings.bye');
    manager.addDocument('en', 'okay see you later', 'greetings.bye');
    manager.addDocument('en', 'bye for now', 'greetings.bye');
    manager.addDocument('en', 'i must go', 'greetings.bye');
    manager.addDocument('en', 'hello', 'greetings.hello');
    manager.addDocument('en', 'hi', 'greetings.hello');
    manager.addDocument('en', 'howdy', 'greetings.hello');
    manager.addDocument('en', "i am not in the best of health.", "health.bad")
    manager.addDocument('en', "i am not in the best of health", "health.bad")
    manager.addDocument('en', "i am not feeling fine.", "health.bad")
    manager.addDocument('en', "i am not feeling fine", "health.bad")
    manager.addDocument('en', "i am not fine", "health.bad")
    manager.addDocument('en', "i am fine, thank you. how about you?", "greetings_response.good_andyou")
    manager.addDocument('en', "i am fine, and you?", "greetings_response.good_andyou")
    manager.addDocument('en', "hi i am not feeling fine.", "greetings.hello.bad")
    manager.addDocument('en', "i have a mild headache", "health.headache")



    // Train also the NLG
    manager.addAnswer('en', 'greetings.bye', 'Till next time');
    manager.addAnswer('en', 'greetings.bye', 'see you soon!');
    manager.addAnswer('en', 'greetings.hello', 'Hey there. How are you doing?');
    manager.addAnswer('en', 'greetings.hello', 'Greetings. How are you feeling today?');
    manager.addAnswer('en', 'health.bad', "I'm sorry to hear that, what are your symptoms? (Please input symptoms in the following format: (adjective) (symptom) e.g. mild headache, sweating")
    manager.addAnswer('en', 'health.bad', "I'm sorry to hear that, what's wrong?")
    manager.addAnswer('en', 'heatlh.headache', "If it's just a headache try taking some paracetamol or ibuprofen")


    useEffect(() => {
        const train = async () => {
            console.log("Training the model")
            await manager.train();
            // manager.save()
            setManagerIsTrained(true);
            console.log("Done training the model")
        }

        train()
            .catch((reason) => {
                console.log("Error training the model. Error")
                console.log(reason)
            })
    }, [])

    useEffect(() => {
        console.log("The messages state variable has changed. It's value is")
        console.log(messages)
    }, [messages])

    var messageGroupComponents = [];

    const _textInput = useRef(1);

    const sendMessage = (message) => {
        const dummy = messages

        dummy.push({
            isSent: true,
            lastInGroup: true,
            messageContent: message,
            timeSent: new Date(),
            key: dummy.length
        })

        setMessages(dummy)

        setInputText("")

        replyMessage(message)
    }

    const replyMessage = async (message) => {
        if (managerIsTrained) {
            const response = await manager.process('en', message.toLowerCase())

            const dummy = messages

            const messageContent = response.answer ? response.answer : "The model couldn't compute a response"

            if (!response.answer) {
                console.log(`The model couldn't compute an answer. The message is: ${message}. The response gotten`)
                console.log(response)
            }

            dummy.push({
                isSent: false,
                lastInGroup: true,
                messageContent: messageContent,
                timeSent: new Date(),
                key: dummy.length
            })

            setMessages(dummy)
        } else {
            const dummy = messages

            dummy.push({
                isSent: false,
                lastInGroup: true,
                messageContent: "The model has not yet been trained",
                timeSent: new Date(),
                key: dummy.length
            })

            setMessages(dummy)
        }
    }
    const [message, setMessage] = useState('');
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
                        <View style={{
                            height: "85%", width: 300, borderRadius: 25, backgroundColor: "#1F2397",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 8,
                                height: 16,
                            },
                            shadowOpacity: 0.58,
                            shadowRadius: 16.00,

                            elevation: 24,
                        }}>
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
                        <View style={{
                            height: "85%", width: 300, borderRadius: 25, backgroundColor: "#1F2397",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 8,
                                height: 16,
                            },
                            shadowOpacity: 0.58,
                            shadowRadius: 16.00,

                            elevation: 24,
                        }}>
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
                        <View style={{
                            height: "85%", width: 300, borderRadius: 25, backgroundColor: "#1F2397",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 8,
                                height: 16,
                            },
                            shadowOpacity: 0.58,
                            shadowRadius: 16.00,

                            elevation: 24,
                        }}>
                            <View style={{ height: "30%", width: "95%", flexDirection: "row", justifyContent: "space-around", marginTop: "2%", }} >
                                <View style={{ height: "50%", width: "70%", borderRadius: 10, backgroundColor: "#005A9C" }}>
                                    <Text style={{ color: "white", padding: 4, fontSize: 18, fontWeight: "bold", textAlign: "center" }}>Drugs Prescribed</Text>
                                </View>
                                <TouchableOpacity><Text style={{ color: "white", justifyContent: "center" }} onPress={() => navigation.navigate("DrugList")}>See All</Text></TouchableOpacity>

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
                    <View>
                        <Text>Health status line Chart</Text>
                        <LineChart
                            data={{
                                labels: ["January", "February", "March", "April", "May", "June"],
                                datasets: [
                                    {
                                        data: [
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100
                                        ]
                                    }
                                ]
                            }}
                            width={300} // from react-native
                            height={220}
                            yAxisLabel="$"
                            yAxisSuffix="k"
                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={{
                                backgroundColor: "#09b2c3",
                                backgroundGradientFrom: "#09b2c3",
                                backgroundGradientTo: "#1F2397",
                                decimalPlaces: 2, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                },
                                propsForDots: {
                                    r: "6",
                                    strokeWidth: "2",
                                    stroke: "#ffa726"
                                }
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 16
                            }}
                        />
                    </View>
                </View>


            </ScrollView>
            <View>
                <BottomSheet hasDraggableIcon ref={bottomSheet} height={400} width={360} sheetBackgroundColor={"#09b2c3"} >
                    <View style={{ width: "100%", height: "100%" }}>
                        <ScrollView style={{ height: "100%" }}>



                            <View style={{ width: "100%", height: 800 }}>
                                {
                                    messages.map((message, index) => {
                                        return <MessageGroupComponent
                                            isSent={message.isSent}
                                            messages={[message]}
                                            key={message.key}
                                        />
                                    })
                                }


                            </View>
                        </ScrollView>
                        <View style={styles.container}>

                            <View style={styles.mainContainer}>
                                <Image source={laughbeam} style={styles.icons} />
                                <TextInput
                                    placeholder={"Type a Message..."}
                                    style={styles.textInput}
                                    multiline
                                    // value={message}
                                    value={inputText}
                                    onChangeText={
                                        (text) => {
                                            setInputText(text)
                                        }
                                    }
                                    autoFocus={true}
                                    autoCorrect={false}
                                    
                                    ref={_textInput}

                                />

                                <Image source={paperclip} style={{ width: 30, height: 30 }} />
                                {!message && <Image source={camera} style={{ width: 30, height: 30 }} />}


                            </View>

                      <Pressable   onPress={
                        () => {
                            sendMessage(inputText)
                        }
                    }>
                            <View style={styles.buttonContainer}>
                                    <Image source={send} style={{ width: 30, height: 30, marginHorizontal: 10, }} />
                            </View>
                            </Pressable>
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
        height: "10%"
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