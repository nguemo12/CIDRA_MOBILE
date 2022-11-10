import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://119.13.107.181:5000/",
    headers: {
        // Accept: "application/json",
        // "Content-Type": "multipart/form-data",
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});


axiosInstance.interceptors.request.use( async (config) => {
    let token = "await AsyncStorage.getItem"
    
    token = JSON.parse(token)

    config.headers.Authorization = `Bearer ${token}`;

    return config;
}, error => Promise.reject(error));

export default axiosInstance;