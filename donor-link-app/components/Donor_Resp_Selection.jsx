import React from 'react'
import {Link} from "expo-router"
import { Text, View , TouchableOpacity } from 'react-native'

const Donor_resp_selection = () => {

  

  return (
    
    <View style={{ alignItems:'center'}}>
        <Text style={{ fontSize: 18 ,  fontWeight:600, marginTop:125, }}>Are you a potential donor or are you a  </Text>
        <Text style={{alignItems:'center', fontSize: 18 ,  fontWeight:600}} >recipient?</Text>
        <View style={{display:'flex', alignItems:'center'}} >
          
          <View style={{alignItems:'center'}}>
          <Link href='/'>
          <TouchableOpacity style={{backgroundColor:'white', borderWidth:1, height:88 , width:361, marginTop:125, borderRadius:6 , alignItems:'center', paddingTop:10 }}><Text style={{fontSize:14, fontWeight:700, marginTop:23}}> Donor </Text></TouchableOpacity>
          </Link>
          </View>
          
          
          <View>
          <Link href='/recepent/conformation'>
          <TouchableOpacity style={{backgroundColor:'white', borderWidth:1, height:88 , width:361, marginTop:15, borderRadius:6 , alignItems:'center', paddingTop:10 }}><Text style={{fontSize:14, fontWeight:700, marginTop:23}}> Recipent </Text></TouchableOpacity>
          </Link>
          </View>
          
        </View>
        <View>
        </View>
    </View>
  )
}

export default Donor_resp_selection