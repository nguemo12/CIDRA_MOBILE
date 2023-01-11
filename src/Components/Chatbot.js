import React from 'react';
import ChatBot from 'react-native-chatbot';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView , StyleSheet} from "react-native"
const steps = [
    {
      id:'0',
      message:'Hello! How may I help you?',
      trigger:'1'
    },
    {
      id:'1',
      user:true,
      trigger:'2'
    },
    // {
    //   id:'2',
    //   message:'Please send the pic of your order',
    //   // trigger:'image-upload'
    //   trigger:'3'
    // },
    // {
    //   id: "image-upload",
    //   component: <CaptureImage nextTrigger ="show-message" />, 
    //   metadata: { dataType: "image-url" },
    //   trigger:'3'
    // },
    {
      id:'2',
      message:'Sorry for the inconvenience.You will get your payment back shortly',
      trigger:'4'
    },
    {
      id:'4',
      message:'Was your issue resolved?',
      trigger:'5'
    },
    {
      id: '5',
      options: [
        { value: 1, label: 'YES', trigger: '6' },
        { value: 2, label: 'NO', trigger: '8' },
      ], 
     },
     {
      id:'6',
      message:'Please rate us.',
      trigger:'9'
     },
     {
      id:'8',
      message:'You will receive call from our customer support, shortly.',
      trigger:'9'
     },
     {
       id:'9',
       message:'Thank you!!',
       end:true
     }
  
  ]
  

export default class ChatBotComponent extends React.Component {
    render(){
    return (
        <View style={{flex:1 }}>
            <ChatBot steps = {steps}/>
        </View>
    )
    }
};

