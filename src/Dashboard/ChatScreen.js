import { Text, StyleSheet, View } from 'react-native'
import React from 'react'

const ChatScreen = () => {
  
    const [message,setMessage] =useState('');
    return(
        <View style={{width:"100%", height:"100%"}}>
            <View style={{height:"10%", width:"100%", backgroundColor:"blue", }}>
                <View style={{width:"100%", flexDirection:"row", margin:10 }}>
                    <MaterialCommunityIcons name="arrow-left" size={24} color="white" onPress={()=>navigation.navigate("ChatPay")}/>
                    <Text style={{fontSize:20, fontWeight:"bold", color:"white", marginLeft:"2%" }}>Nadine </Text>
                    <View style={{width:"80%", flexDirection:"row"}}></View>
                </View>
            </View>

            <View style={{width:"50%", height:"5%", padding:8, margin:10, borderRadius:25, backgroundColor:"lightblue", marginRight:"50%"}} ><Text>Hey, how are you doing ?</Text></View>
            <View style={{width:"50%", height:"5%", padding:8, margin:10, borderRadius:25, backgroundColor:"lightgrey", marginLeft:"50%"}} ><Text>Fine and you ?</Text></View>
            <View style={{width:"50%", height:"5%", padding:8, margin:10, borderRadius:25, backgroundColor:"lightblue", marginRight:"50%"}} ><Text>Come to the meeting</Text></View>
            <View style={{width:"50%", height:"5%", padding:8, margin:10, borderRadius:25, backgroundColor:"lightgrey", marginLeft:"50%"}} ><Text>Sure i will</Text></View>
            <View style={{width:"50%", height:"5%", padding:8, margin:10, borderRadius:25, backgroundColor:"lightblue", marginRight:"50%"}} ><Text>Welcome to chatPay</Text></View>
            <View style={{width:"50%", height:"5%", padding:8, margin:10, borderRadius:25, backgroundColor:"lightgrey", marginLeft:"50%"}} ><Text>Weshare is good.</Text></View>
        <View style={styles.container}>
           
        <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color="grey"  />
        <TextInput 
        placeholder={"Type a Message..."}
        style={styles.textInput}
        multiline
        value={message}
        onChangeText={setMessage}
       
        />
        
        <FontAwesome5 name="paperclip" size={24} color="grey" style={styles.icons}/>
        {!message &&<Fontisto name="camera" size={24} color="grey" style={styles.icons}/>}
        <Pressable>
        <FontAwesome5 name="dollar-sign" size={28} color="green" style={styles.icons} />
        </Pressable>
        
        </View>
   
        <View style={styles.buttonContainer}>
            
            {!message
            ?<MaterialCommunityIcons name="microphone" size={30} color="white"/>
            :<MaterialIcons name="send" size={30} color="white"/>
            }
            
        </View>
    </View>
    </View>
    )
}
const styles =StyleSheet.create({

    container:{
        flexDirection:'row',
        margin:10,
        alignItems:'flex-end',
        marginTop:"65%"
        

    },
    mainContainer:{
flexDirection:'row',
backgroundColor:"lightblue",
padding:10,
borderRadius:25,
marginRight:10,
flex:1,
alignItems:'flex-end'
    },
    textInput:{
flex:1,
marginHorizontal:10 
    },
    icons:{
        marginHorizontal:10,
    
    },
    buttonContainer:{
        backgroundColor:"lightblue", 
        borderRadius:50,
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center',
         },
    
})
  


export default ChatScreen;

