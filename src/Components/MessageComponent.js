import { StyleSheet, Text, View } from 'react-native'
import React from 'react'



const MESSAGE_BORDER_RADIUS = 8
const colors ={

    
}

function getMessageStyles(props) {
    // receives the message props and returns the styles for those props
    var messageStyles = [styles.message]

    if ( props.isSent ) {
        messageStyles.push(styles.sentMessage)

        if (props.lastInGroup) {
            messageStyles.push(styles.lastMessageSentInGroup)
        }
    } else {
        messageStyles.push(styles.receivedMessage)

        if (props.lastInGroup) {
            messageStyles.push(styles.lastMessageReceivedInGroup)
        }
    }

    return messageStyles;
}

function getMessageTextStyles(props) {
    var messageStyles = [styles.messageText]

    if (props.isSent) {
        messageStyles.push(styles.sentMessageText)
    } else {
        messageStyles.push(styles.receivedMessageText)
    }

    return messageStyles
}

function formatDate(date) {
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let hoursString = hours >= 10 ? `${hours}` : `0${hours}`
    let minutesString = minutes >= 10 ? `${minutes}` : `0${minutes}`

    return `${hoursString}:${minutesString}`
}

const MessageComponent = (props) => {
    // expected props: 
    // isSent -> boolean
    // lastInGroup -> boolean
    // messageContent -> string
    // timeSent -> Date

  return (
    <View style={getMessageStyles(props)}>
      <View>
        <Text style={getMessageTextStyles(props)}>
            {props.messageContent}
        </Text>
      </View>

      <View style={styles.dateContainer}>
        <View>
            <Text style={getMessageTextStyles(props)}>
                {formatDate(props.timeSent)}
            </Text>
        </View>
      </View>
    </View>
  )
}

export default MessageComponent

const styles = StyleSheet.create({
    message: {
        borderRadius: MESSAGE_BORDER_RADIUS,
        paddingHorizontal: 16,
        width: '80%',
        padding: 8,
        marginTop: 8
    },
    messageDate: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end'
    },
    sentMessage: {
        backgroundColor: colors.accent,
        color: colors.white,
        display: 'flex',
        justifyContent: 'flex-end'
    },
    receivedMessage: {
        backgroundColor: colors.getLightBackgroundColor(),
        color: colors.getLightColor(),
        borderColor: colors.getMessageBorderColor(),
        borderWidth: 1
    },
    messageText: {
        width: '100%'
    },  
    sentMessageText: {
        color: colors.white
    },
    receivedMessageText: {
        color: colors.getLightColor()
    },
    lastMessageSentInGroup: {
        // the style for the last message sent after a stack of messages sent in the same minute
        borderBottomRightRadius: 0
    },
    lastMessageReceivedInGroup: {
        borderBottomLeftRadius: 0
    },
    dateContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'row'
    }
})