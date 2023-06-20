import React from 'react'
import {Link} from "expo-router"
import { Text, View , TouchableOpacity, Image} from 'react-native'


const Resp_info = () => {

  

  return (
    
    <View style={{ alignItems:'center'}}>
        <Text style={{ fontSize: 18 ,  fontWeight:600, marginTop:125, }}>The Process </Text>
        <Text style={{alignItems:'center', fontSize: 18 ,  fontWeight:600}} >recipient?</Text>
        <View ><Image    source={require('../assets/Process12.png')} /></View>
        <img src='C:\Users\priya\Downloads\colab-donor-link-main (1)\colab-donor-link-main\donor-link-app\assets\Process12.png'></img>
        <div style={{alignItems:"center", marginLeft:3}}>
       <Link href='/'>
        <View>
          <TouchableOpacity style={{backgroundColor:'white', borderWidth:1, height:88 , width:361, marginLeft:3, marginTop:125, borderRadius:6 , alignItems:'center', paddingTop:10 }}><Text style={{fontSize:14, fontWeight:700, marginTop:23}}> Donor </Text></TouchableOpacity>
        </View>
        </Link>
        <Link href='/recepent/conformation'>
        <View>
          <TouchableOpacity style={{backgroundColor:'white', borderWidth:1, height:88 , width:361, marginLeft:3, marginTop:15, borderRadius:6 , alignItems:'center', paddingTop:10 }}><Text style={{fontSize:14, fontWeight:700, marginTop:23}}> Recipent </Text></TouchableOpacity>
        </View>
        </Link>
        </div>
        <View>
        </View>
    </View>
  )
}

export default Resp_info