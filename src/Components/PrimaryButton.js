import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const PrimaryButton = ({
    onClick, 
    text,
    width
}) => {
  return (
    <View style={styles.container}>
          <TouchableOpacity onPress={onClick} style={[styles.button, { width: width }]}><Text style={styles.text}>{text}</Text></TouchableOpacity>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 10
    },
    button: {
        padding: 5, marginTop: "5%", height: "80%", backgroundColor: "#379AE1", borderRadius: 50, justifyContent: "center"
    },
    text: {
        color: "white", textAlign: "center", fontSize: 20, fontWeight: "bold"
    }
})