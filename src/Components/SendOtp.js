import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrimaryButton from './PrimaryButton'
import { sendOTPAction } from '../services/methods/authentication'
import { setAuthToken, setAuthUser } from '../services/AsyncStorageMethods'

const SendOtp = ({
        medium,
        email,
        contact,
        setMedium,
        showErrorMessages,
        setErrors,
        setLoading,
        navigation,
        onSuccess
    }) => {

    const onSendCode = () => {
        if (medium == "contact") { 
            setErrors([{
                msg: 'Chose email address'
            }])
            showErrorMessages();
        } else {
            setLoading(true);
            const postData = {
                email: email,
                medium: medium
            }
            sendOTPAction(postData)
                .then((response) => {
                    onSuccess()
                }).catch((error) => {
                    setErrors([{
                        msg: 'Server Error check your connection'
                    }])
                    showErrorMessages();
                }).finally(() => {
                    setLoading(false);
            })
        }

    }
    const goLogin = async () => {
        await setAuthUser(null)
        await setAuthToken(null)
        navigation.push(AppRoutes.LoginScreen)
    }

    return (
        <View>
                <ScrollView style={{ height: "50%" }}>
                    
                <View style={styles.selectContainer}>
                    <PrimaryButton width="20%" text="Email" onClick={() => setMedium("email")} /> 
                    <PrimaryButton width="20%" text="Phone" onClick={() => setMedium("contact")} /> 
                </View>
                <View style={{ width: "100%", height: "120%" }}>
                    <Text style={{ fontSize: 28, color: "#379AE1", textAlign: "center", marginTop: "10%", fontFamily: 'NunitoSans-Black' }}>OTP Verification</Text>
                    <Text style={{ textAlign: "center", color: "black", fontFamily: 'NunitoSans-Bold'}}>We will send a one Time OTP Code {"\n"} to the following {medium == "email" ? "email": "contact"} and last for 1 min</Text>
                    <Text style={{ fontSize: 20, textAlign: "center", marginTop: "4%", color: "grey", fontFamily: 'NunitoSans-Regular' }}>{medium == "email" ? `Email : ${email}`: `Contact : ${contact}`}</Text>
                    {medium == "contact" ?
                        (
                            <Text style={{  textAlign: "center", fontSize: 20, color: "red", fontFamily: 'NunitoSans-Regular' }}>Otp by phone is not yet Available !!!!</Text>
                        ): (
                            null
                        )
                    }
                    
                        
                    <View style={{bottom: 9}}>
                        <PrimaryButton width="60%" text="Send code" onClick={() => onSendCode()} /> 
                    </View>
                        
                    <View style={{ width: "50%", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "5%", alignSelf: 'center' }}>
                        <Text style={{ color: "grey", fontFamily: 'NunitoSans-Black' }} >Want to change credentials?</Text>
                        <Text style={{ color: "#379AE1", fontFamily: 'NunitoSans-Black' }} onPress={() => goLogin()}> Login</Text>
                    </View>
                    
                </View>
                </ScrollView>
        </View>
        );
}

export default SendOtp
    const styles = StyleSheet.create({
        selectContainer: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
        }
    })