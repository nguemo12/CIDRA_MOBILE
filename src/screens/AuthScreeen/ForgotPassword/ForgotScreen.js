import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from 'react-native';
import forgot from '../../../../assets/images/forgot.jpeg'
import PrimaryButton from "../../../Components/PrimaryButton";
import {
    getAuthUser, setAuthToken, setAuthUser
} from '../../../services/AsyncStorageMethods.js'
import Toast from 'react-native-toast-message'
import {
    sendOTPAction
} from '../../../services/methods/authentication.js'
import Loader from "../../../Components/Loader"
import SendOtp from '../../../Components/SendOtp';
const ForgotScreen = ({
        navigation
    }) => {
        const [email, setEmail] = useState('')
        const [medium, setMedium] = useState('email')
        const [contact, setContact] = useState('')
        const [errors, setErrors] = useState([])
        const [loading, setLoading] = useState(false)
        useEffect(() => {
            async function fetchData() {
                let response = await getAuthUser()
                setEmail(response.email)
                setContact(response.tel)
            }
            fetchData()
        }, [])
        const showErrorMessages = () => {
            errors.forEach((error) => {
                Toast.show({
                    type: 'error',
                    text1: error.msg,
                });
            })
        }
        const onSuccess = () => {
            navigation.push(AppRoutes.RecoveryScreen)
        }
    return(
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Loader loading={loading} />
            
            <View  style={{ zIndex: 1000 }}>
                <Toast />
            </View>
            <View style={{ width: "100%", height: "50%" }} >
                <Image source={forgot} style={{ width: "80%", height: "100%", alignSelf: 'center' }} resizeMode='center' />
            </View>
            <SendOtp
                email={email}
                medium={medium}
                contact={contact}
                showErrorMessages={showErrorMessages}
                setErrors={setErrors}
                setLoading={setLoading}
                setMedium={setMedium}
                navigation={navigation}
                onSuccess={onSuccess} />
        </View>
    )
};

export default ForgotScreen;
