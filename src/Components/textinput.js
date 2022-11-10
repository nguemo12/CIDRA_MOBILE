import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { TextInput } from 'react-native-paper'
import { useTheme } from 'react-native-paper'
import { colors } from '../../assets/colors/colors'

export default function CustomTextInput({ value, onChangeText, icon, placeholder, label, keyboardType, autoCorrect, maxlength }) {

    const theme = useTheme()

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    function handleInputFocus() {
        setIsFocused(true);
      }
    
    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!value)
      }

  return (
    <View style={styles.container}>
       
        <TextInput 
            mode='outlined'
            placeholder= {placeholder}
            onFocus={handleInputFocus}
            maxLength={maxlength}
            value={value}
            label={label}
            textContentType='emailAddress'
            autoCorrect={autoCorrect}
            keyboardType={keyboardType}
            activeOutlineColor={(isFocused || isFilled) ? colors.lightBlue : colors.darkBlue}
            onChangeText={onChangeText}
            style={{backgroundColor: 'white', height: 50, fontSize: 14}}
            right={<TextInput.Icon name={icon} 
                        color={(isFocused || isFilled) ? theme.colors.notification : theme.colors.onSurface}
                    />}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        justifyContent: 'flex-start',
        alignSelf: 'center'
    },
    head: {
        fontFamily: 'NunitoSans-Black',
        fontSize: 15,
        color: 'black',
    }
})