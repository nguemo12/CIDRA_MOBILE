import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import MessageComponent from './MessageComponent'

function getMessageStyles(props) {
    
}

function getMessageGroupStyles(props) {
    var messageGroupStyles = [styles.messagesGroup]

    if ( props.isSent ) {
        messageGroupStyles.push(styles.sentMessages)
    } else {
        messageGroupStyles.push(styles.receivedMessages)
    }

    return messageGroupStyles
}

const MessageGroupComponent = (props) => {

// expected props
// isSent -> bool
// messages -> array of message objects
// message -> object: {
//                      messageContent: string,
                        // timeSent: date
                //    }
    // const messages = props.messages;
    var messageComponents = []

    props.messages.map( (item, index) => {
        messageComponents.push(
            <MessageComponent
                isSent={props.isSent} 
                timeSent={item.timeSent}
                messageContent={item.messageContent}
                lastInGroup={ index === props.messages.length - 1 }
            />
        )
    } )
  return (
    <View style={getMessageGroupStyles(props)}>
        <View>
            { messageComponents }
            
            {/* <MessageComponent
                isSent={props.isSent} 
                timeSent={new Date()}
                messageContent={"Aliqua excepteur amet quis officia deserunt do ipsum ut laborum deserunt. Mollit esse adipisicing voluptate adipisicing cupidatat anim consectetur veniam ea. Ipsum adipisicing fugiat exercitation nostrud aute cillum do laborum dolor quis anim aliquip fugiat."}
                lastInGroup={true}
            /> */}
        </View>
    </View>
  )
}

export default MessageGroupComponent

const styles = StyleSheet.create({
    messagesGroup: {
        display: 'flex',
        paddingHorizontal: 8,
        flexDirection: 'row',
        width: '100%'
    },
    sentMessages: {
        justifyContent: 'flex-end'
    },
    receivedMessages: {
        justifyContent: 'flex-start'
    }
})