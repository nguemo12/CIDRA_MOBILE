import React, {
    useState
} from 'react'

import {
    Text,
    View,
    StyleSheet
} from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';
export default function Loader({ loading }) {
    if (loading) {
        
    return (
        <View style={styles.container}>
                <Spinner
                //visibility of Overlay Loading Spinner
                visible={loading}
                //Text with the Spinner
                textContent={'Loading...'}
                //Text style of the Spinner Text
                textStyle={styles.spinnerTextStyle}
                />
        </View>
    )
    } else {
        return null
    }

}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#7F000000",
        zIndex: 100000,
    },
    spinnerTextStyle: {
        color: "black",
    },
});