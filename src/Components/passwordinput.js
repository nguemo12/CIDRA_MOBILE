import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { TextInput } from 'react-native-paper'
import { useTheme } from 'react-native-paper'
import { colors } from '../../assets/colors/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function CustomPasswordInput({ value, onChangeText, placeholder, autoCorrect }) {

    const theme = useTheme()

    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    function handleInputFocus() {
        setIsFocused(true);
      }
    
    function handlePasswordVisibilityChange() {        
        setIsPasswordVisible(prevState => !prevState);
    }

  return (
    <View style={styles.container}>
    
        <TextInput 
            mode='outlined'
            placeholder= {placeholder}
            onFocus={handleInputFocus}
            value={value}
            textContentType='newPassword'
            secureTextEntry={isPasswordVisible} 
            autoCorrect={autoCorrect}
            activeOutlineColor={(isFocused || isFilled) ? colors.lightBlue : colors.darkBlue}
            onChangeText={onChangeText}
            style={{backgroundColor: 'white',fontFamily: 'NunitoSans-Regular', fontSize: 14, marginBottom: 20}}
            right={<TextInput.Icon name={ isPasswordVisible ? 'eye-outline' : 'eye-off' } 
                        color={(isFocused || isFilled) ? colors.lightBlue : colors.darkBlue}
                        onPress={()=> handlePasswordVisibilityChange() }
                    />}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        justifyContent: 'flex-start',
        alignSelf: 'center',
    },
    head: {
        fontFamily: 'NunitoSans-Black',
        fontSize: 15,
        color: 'black',
    }
})