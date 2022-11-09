import AsyncStorage from '@react-native-async-storage/async-storage'

export const setVariable = async (data, name) => {
    await AsyncStorage.setItem(name, JSON.stringify(data));
}

export const getVariable = async (name) => {
    
    const infoString = await AsyncStorage.getItem(name);
    const info = JSON.parse(infoString)

    return info
}

export const setAuthUser = async (user) => {
    try {
        await AsyncStorage.setItem("cidraUserInfo", JSON.stringify(user))
        return true
    } catch (error) {
        throw error
    }
}

export const getAuthUser = async () => {
    try {
        const infoString = await AsyncStorage.getItem("cidraUserInfo");
        const info = JSON.parse(infoString)

        return info
    } catch (error) {
        throw error
    }
}

export const setAuthToken = async (token) => {
    try {
        await AsyncStorage.setItem("cidraUserToken", JSON.stringify(token))
        return true
    } catch (error) {
        throw error
    }
}

export const getAuthToken = async () => {
    try {
        const infoString = await AsyncStorage.getItem("cidraUserToken");
        const info = JSON.parse(infoString)

        return info
    } catch (error) {
        throw error
    }
}