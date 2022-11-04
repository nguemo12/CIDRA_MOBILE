// React Native Date Picker – To Pick the Date using Native Calendar
// https://aboutreact.com/react-native-datepicker/
 
// import React in our code
import React, {useState} from 'react';
 
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View, TouchableHighlight
} from 'react-native';
import moment from 'moment';
 
//import DatePicker from the package we installed
import DateTimePicker from "@react-native-community/datetimepicker"

const DatePick = (props) => {
const {textStyle} = props
  return (
    <TouchableHighlight
    activeOpacity={0}
    onPress = {()=>console.log("open datepicker")}
    >
      <Text style={textStyle}>{moment().format("YYYY-MM-DD")}</Text>

    </TouchableHighlight>
   
  );
};
DatePick.defaultProps ={
  
};


 
export default DatePick;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});