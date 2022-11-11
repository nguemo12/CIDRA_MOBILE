import { setAuthToken, setAuthUser } from "../AsyncStorageMethods";
import axiosInstance from "../axios/axiosInstance"

export async function loginAction(postData) {
    try {
        let response = await axiosInstance.post('login', postData)
        await setAuthUser(response.data.data.user)
        await setAuthToken(response.data.data.apiToken.accessToken)
        return response
    } catch (error) {
        if (error.response.status == 403) {
            await setAuthUser(error.response.data.data)
        }
        throw error
    }
}

export async function registrationAction(postData) {
    try {
        let response = await axiosInstance.post('user/create', postData)
        return response
    } catch (error) {
        throw error
    }
}

export async function logoutAction() {
    try {
         await setAuthUser(null)
         await setAuthToken(null)
        console.log("login out")
         return true;
    } catch (error) {
        throw error
    }
}
export async function sendOTPAction(postData) {
    try {
        let response = await axiosInstance.post('user/send-otpcode', postData)
        return response
    } catch (error) {
        throw error
    }
}
export async function verifyOTPAction(postData) {
        console.log("postData", postData)

    try {
        let response = await axiosInstance.post('user/verify-code', postData)
        await setAuthUser(response.data.data.user)
        await setAuthToken(response.data.data.apiToken.accessToken)
        return response
    } catch (error) {
        throw error
    }
}
