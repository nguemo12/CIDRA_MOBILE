import React from 'react';
import {View, Text} from 'react-native'
const WebSockets = () => {
    var ws = new WebSocket('ws://host.com/path');

    ws.onopen = () => {
      // connection opened
      ws.send('something'); // send a message
    };
    
    ws.onmessage = (e) => {
      // a message was received
      console.log(e.data);
    };
    
    ws.onerror = (e) => {
      // an error occurred
      console.log(e.message);
    };
    
    ws.onclose = (e) => {
      // connection closed
      console.log(e.code, e.reason);
    };
    return (
        <View>
            
        </View>
    );
};

export default WebSockets;