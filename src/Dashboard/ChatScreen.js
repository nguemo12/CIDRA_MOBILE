import React, { useState } from "react"
import { Text, View, TextInput, Pressable, StyleSheet, Image, ScrollView } from "react-native";
import laughbeam from "../../assets/icons/laughbeam.png";
import send from "../../assets/icons/send.png";
import camera from "../../assets/icons/camera4.png";
import videocall from "../../assets/icons/videocall.png";
import phone from "../../assets/icons/phone.png";
import DRT2 from "../../assets/images/dr2.jpg";
import paperclip from "../../assets/icons/paperclip1.png";
import microphone from "../../assets/icons/microphone8.png";


const ChatScreen = ({ navigation }) => {

    const [message, setMessage] = useState('');
    return (
        <View style={{ width: "100%", height:"100%"  }}>
             <ScrollView style={{ height:"100%" }}>
            
                <View style={{ width: "100%", flexDirection: "row", justifyContent:"space-evenly", height:"10%", flex:1, marginLeft:"50%" }}>
                    <View style= {{marginHorizontal: '3%',}}>
                    <Image source={DRT2} style={{width:80, height:80, borderRadius: 50, resizeMode:"cover" }} />
                    <Text style={{ fontSize: 20, fontWeight: "bold",  marginLeft: "3%", color:"black" }}>Nadine </Text>
                    <Text style={{    marginLeft: "3%", color:"black" }}>online </Text>
                    </View>
                    <View style={{ width: "80%", flexDirection: "row", marginHorizontal: '3%' }}>
                        <Image source={phone} style={{width:30, height:30, marginHorizontal: '3%'}} />
                        <Image source={videocall} style={{width:50, height:30, marginHorizontal: '3%'}} />

                    </View>
                
                 </View>
           
        <View style={{width:"100%", height:800}}>
            <View style={{ width: "50%", height: "10%", padding: 8, margin: 10, borderRadius: 25, backgroundColor: "lightblue", marginRight: "50%" }} ><Text>Hey, how are you doing ?</Text></View>
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

                    <Image source={paperclip} style={{width:30, height:30}} />
                    {!message && <Image source={camera} style={{width:30, height:30}} />}


                </View>
               

                <View style={styles.buttonContainer}>

                    {!message
                        ? <Image source={microphone} style={{width:30, height:30, marginHorizontal: 10,}} />
                        : <Image source={send} style={{width:30, height:30 , marginHorizontal: 10,}} />
                    }

                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'flex-end',
        width:"80%",
        flex:1,
        height:"20%",
        backgroundColor:"white"

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
        tintColor:"black", 
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

})



export default ChatScreen;

