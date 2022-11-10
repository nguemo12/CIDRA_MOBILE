import { setAuthToken, setAuthUser } from "../AsyncStorageMethods";
import axiosInstance from "../axios/axiosInstance"

export async function loginAction(postData) {
    try {
        // let response = await axiosInstance.post('user/create', postData)
        if (postData.email == "patient@gmail.com" && postData.password == "00000000") {
            await setAuthUser({
                name: "Patient One",
                email: "patient@gmail.com",
                id: "fkasjdflkajsdlfkjalksdfj"
            })
            await setAuthToken("fasdklfjaklsfdjklajsdfkljasklfdjklasdjflk")
            return true;
        } else {
            return false;
        }
    } catch (error) {
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

