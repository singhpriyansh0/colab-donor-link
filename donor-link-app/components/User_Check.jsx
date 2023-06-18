import React from 'react'
import {Link} from "expo-router"
import { Text, View, TouchableOpacity } from 'react-native'

const User_Check = () => {



  return (
    
    <View style={{ alignItems:'center'}}>
        <Text style={{ fontSize: 18 ,  fontWeight:600, marginTop:125, }}>Are you creating this account for</Text>
        <Text style={{alignItems:'center', fontSize: 18 ,  fontWeight:600}} >yourself or on the behalf of a recipient?</Text>
        <div style={{alignItems:"center", marginLeft:3}}>
       <Link href='/recepent/process_info'>
        <View>
          <TouchableOpacity style={{backgroundColor:'white', borderWidth:1, height:88 , width:361, marginLeft:3, marginTop:125, borderRadius:6 , alignItems:'center', paddingTop:10 }}><Text style={{fontSize:14, fontWeight:700, marginTop:23}}> For Myself</Text></TouchableOpacity>
        </View>
        </Link>
        <Link href='/recepent/process_info'>
        <View>
          <TouchableOpacity style={{backgroundColor:'white', borderWidth:1, height:88 , width:361, marginLeft:3, marginTop:15, borderRadius:6 , alignItems:'center', paddingTop:10 }}><Text style={{fontSize:14, fontWeight:700, marginTop:23}}> On Behalf of Someone Else </Text></TouchableOpacity>
        </View>
        </Link>
        </div>
        <View>
        </View> 
    </View>
  )
}

export default User_Check