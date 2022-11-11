import React, {
    useEffect,
    useState,
    useRef
} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import recovery from '../../../../assets/images/recovery.jpeg'
import Toast from 'react-native-toast-message'
import Loader from '../../../Components/Loader';
import { getAuthUser, setAuthToken, setAuthUser } from '../../../services/AsyncStorageMethods';
import KeycodeInput from '../../../Components/keyCodeInput'
import PrimaryButton from '../../../Components/PrimaryButton';
import SendOtp from '../../../Components/SendOtp';
import {
    verifyOTPAction
} from '../../../services/methods/authentication';
import {
    login
} from "../../../stores/reducers/user.reducer";
import {
    useDispatch
} from "react-redux";

const RecoveryScreen = ({ navigation, route }) => {
    const [email, setEmail] = useState('')
    const [medium, setMedium] = useState('email')
    const [contact, setContact] = useState('')
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(false)
    const [otp, setOtp] = useState("")
    const [time, setTime] = useState(60);
    let timerRef = useRef(time);
    const dispatch = useDispatch();
    
    useEffect(() => {
        startTimer()

        async function fetchData() {
            let response = await getAuthUser()
            setEmail(response.email)
            setContact(response.tel)
        }

        fetchData()
    }, [])

    const startTimer = () => {
        const timerId = setInterval(() => {
            timerRef.current -= 1;
            if (timerRef.current < 0) {
                clearInterval(timerId);
            } else {
                setTime(timerRef.current);
            }
        }, 1000);

        return () => {
            clearInterval(timerId);
        };

    }

    const showErrorMessages = () => {
        errors.forEach((error) => {
            Toast.show({
                type: 'error',
                text1: error.msg,
            });
        })
    }
    const onVerify = () => {
        if (otp.length == 4) {
            const postData = {
                otp_code: otp,
                email: email
            }
            setLoading(true);
            verifyOTPAction(postData)
                .then((response) => {
                    dispatch(login(response.data.data.user))
                }).catch((error) => {
                    if (error.response.status == 422) {
                        setErrors([{
                            msg: error.response.data.message
                        }])
                        showErrorMessages();
                        
                    } else {
                        setErrors([{
                            msg: 'Server Error'
                        }])
                        showErrorMessages();
                    }
                }).finally(() => {
                    setLoading(false)
            })
        } else {
            setErrors([{
                msg: 'Enter OTP Code'
            }])
            showErrorMessages();
        }
    }


    const goLogin = async () => {
        await setAuthUser(null)
        await setAuthToken(null)
        navigation.push(AppRoutes.LoginScreen)
    }
    
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
                <Loader loading={loading} />
                
                <View  style={{ zIndex: 1000 }}>
                    <Toast />
                </View>
           
        <View style={{ width: "100%", height: "50%" }} >
            <Image source={recovery} style={{ width: "100%", height: "80%" }} resizeMode='contain' />
        </View>
            
        
        {time == 0 ? (
            <SendOtp
                email={email}
                medium={medium}
                contact={contact}
                showErrorMessages={showErrorMessages}
                setErrors={setErrors}
                setLoading={setLoading}
                setMedium={setMedium}
                navigation={navigation}
                onSuccess={() => {
                    timerRef.current = 60
                    startTimer()
                    setOtp("")
                }} />
            ) : (
                <>
                <View style={{ width: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "5%", alignSelf: 'center' }}>
                    <Text style={{ color: "grey", fontFamily: 'NunitoSans-Black' }} >Code expire in {time} seconds</Text>
                </View>
                    
                <View style={{ width: "100%", height: "50%" }}>
                    <Text style={{ fontSize: 28, fontWeight: "bold", color: "#379AE1", textAlign: "center", marginTop: "10%" }}>OTP Verification</Text>
                    <Text style={{ textAlign: "center", color: "black" }}> Enter the OTP code sent to {email}</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                            
                        <KeycodeInput
                            numeric
                            value={otp}
                            onChange={setOtp}
                            barStyle={{
                                height: 2,
                                width: 24,
                            }}
                            textStyle={{
                                fontSize: 28,
                                marginLeft: -2,
                                width: 20,
                            }}
                            inputStyle={{
                                width: 1,
                                height: 1,
                                position: 'absolute'
                            }}
                        />
                    </View>
                        
                    <View style={{bottom: 9}}>
                        <PrimaryButton width="60%" text="Verify" onClick={() => onVerify()} /> 
                    </View>
                        
                    <View style={{ width: "50%", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "5%", alignSelf: 'center' }}>
                        <Text style={{ color: "grey", fontFamily: 'NunitoSans-Black' }} >Want to change credentials?</Text>
                        <Text style={{ color: "#379AE1", fontFamily: 'NunitoSans-Black' }} onPress={() => goLogin()}> Login</Text>
                    </View>
                </View>
                </>
            )
        }

    </View>
    );
}


const styles = StyleSheet.create({
    selectContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    }
})

export default RecoveryScreen;
