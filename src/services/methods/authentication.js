// import axiosInstance from "../axios/axiosInstance"
import axios from 'axios'

export async function loginAction(postData) {
    try {
        
    } catch (error) {
        
    }
}

export const registerAction = async (postData) => {
    try {
        console.log(postData)
        let response = await axios.post('user/create', postData)
        return response
    } catch (error) {
        throw error
    }
}

