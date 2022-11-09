import axiosInstance from "../axios/axiosInstance"

export async function loginAction(postData) {
    try {
        
    } catch (error) {
        
    }
}

export const registerAction = async (postData) => {
    try {
        console.log(postData)
        let response = await axiosInstance.post('user/create', postData)
        return response
    } catch (error) {
        throw error
    }
}

