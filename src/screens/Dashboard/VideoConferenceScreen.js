import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import { icons } from '../../../assets/icons'
import { colors } from '../../../assets/colors/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MovableView from 'react-native-movable-view'

const VideoConferenceScreen = () => {

  const localView = require('../../../assets/images/profile1.jpg');
  const remoteView = require('../../../assets/images/profile2.jpg');
  const [viewDefault, setDefault] = useState(true);

  const handleSwap = ()=> {
    setDefault(prevstate=> setDefault(!prevstate))
  }

  return (
    <View style={styles.container}>
      <View style={styles.status} />
      <View style={styles.statusInner}>
          <View>
            <Text style={styles.statusText}>Online</Text>
          </View>
          <View style={styles.badge}/>
      </View>

      <View style={styles.doctorInfo}>
         <Text style={styles.doctorName}>Dr Johnny Sins</Text>
         <Text style={styles.doctorDept}>Optamologist</Text>
      </View>
      
      
      <MaterialCommunityIcons name={icons.backArrow} size={35} style={styles.backArrow} color='grey'/>

      <MovableView></MovableView>
        <TouchableOpacity
        style={[styles.localView, {bottom: 35}]}
        onPress={()=> handleSwap()}
        >
          <Image source={
            viewDefault?
              localView:
              remoteView          
          }
          style={styles.localView}
          resizeMode='cover'
          />

        </TouchableOpacity>
        <Chatbot/>

      <ImageBackground source={
          viewDefault?
          remoteView:
          localView  
        }
        style={styles.remoteView}
        />
          <View style={styles.blur} />
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name={icons.chat} size={30} style={styles.menuIcons} color='grey'/>
            <MaterialCommunityIcons name={icons.mute} size={30} style={styles.menuIcons} color='grey'/>
            <MaterialCommunityIcons name={icons.video} size={30} style={styles.menuIcons} color='grey'/>
            <MaterialCommunityIcons name={icons.hangup} size={30} style={styles.menuIcons} color='red'/>
          </View>

    </View>
  )
}

export default VideoConferenceScreen

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: 'white'
 },
 backArrow: {
    margin: 10,
    padding: 5,
    backgroundColor: 'white',
    position: 'absolute',
    elevation: 5,
    borderRadius: 5,
    zIndex: 999
 },
 swap: {
  margin: 10,
  padding: 5,
  backgroundColor: 'white',
  position: 'absolute',
  elevation: 5,
  borderRadius: 5,
  zIndex: 999,
  right: 0,
  bottom: -20
},
 localView: {
    width: 100,
    height: 120,
    alignSelf: 'flex-end',
    borderRadius: 10,
    marginRight: 10,
    zIndex: 999,
    marginTop: 30,
 },
 remoteView: {
  
  ...StyleSheet.absoluteFill
  
 },
 status: {
    width: "100%", 
    height: 100, 
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    backgroundColor: 'white',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    opacity: 0.6
 },
 statusInner: {
    top: 25,
    alignSelf: 'center',
    width: 100, 
    backgroundColor: colors.grey, 
    height: 25, 
    borderRadius: 5, 
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-around', 
    zIndex: 999,
    elevation: 2
 },
 doctorInfo: {
  top: 20,
  width: "100%", 
  height: 25, 
  borderRadius: 5, 
  zIndex: 999,
  marginTop: 10
},
doctorName: {    
  color: 'black',
  fontFamily: 'NunitoSans-Black',
  textAlign: 'center', 
  fontSize: 16
},
doctorDept: {    
  color: 'black',
  fontFamily: 'NunitoSans-Regular',
  textAlign: 'center', 
  fontSize: 14
},
 badge: {
    padding: 8,
    backgroundColor: 'green',
    borderRadius: 100
 },
 statusText: {
    color: 'white',
    fontFamily: 'NunitoSans-Black'
 },
 blur: {
    width: "90%", 
    height: 80, 
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    backgroundColor: 'white',
    opacity: 0.5,
    bottom: 15,
    alignSelf: 'center',
    borderRadius: 10
 },
 iconContainer: {
    width: "90%", 
    height: 80, 
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-around',
    zIndex: 999,
    bottom: 15,
    alignSelf: 'center',
    flexDirection: 'row'
 },
 menuIcons: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 100
 }
})