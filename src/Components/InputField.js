import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputField = ({
        placeholder,
        value,
        onChangeText,
        secureTextEntry,
        keyboardType
    }) => {
  return (
      <View>
        <TextInput
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            style={styles.input}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
        />
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        width: "90%",
        borderRadius: 5,
        marginTop: "5%",
        marginLeft: "5%",
        padding: 10,
        color: "black",
        borderColor: "gray"
    }
})