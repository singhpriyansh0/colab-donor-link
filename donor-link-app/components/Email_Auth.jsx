import React from 'react'
import {Link} from "expo-router"
import { Text, View ,TextInput, TouchableOpacity } from 'react-native'

const Email_Auth = () => {

  const [otp_1, setOtp_1] = React.useState('');
  const [otp_2, setOtp_2] = React.useState('');
  const [otp_3, setOtp_3] = React.useState('');
  const [otp_4, setOtp_4] = React.useState('');

  return (
    
    <View style={{ alignItems:'center'}}>
        <Text style={{ fontSize: 18 ,  fontWeight:600, marginTop:125}}>Verify your Email</Text>
        <Text style={{ fontSize: 14, margin:5 }}>Enter the verification code send to your email</Text>
        <View>
          <div style={{ position:'relative', marginTop:30}}>
          <TextInput
          style={{width:72 , height:107, margin:10, borderRadius:6, borderWidth:1, fontSize:50, paddingLeft:20}}
          onChangeText={setOtp_1}
          value={otp_1}
          keyboardType="numeric"
          maxLength={1}
          />
          <TextInput
          style={{width:72 , height:107, margin:10, borderRadius:6, borderWidth:1 ,fontSize:50, paddingLeft:20}}
          onChangeText={setOtp_2}
          value={otp_2}
          keyboardType="numeric"
          maxLength={1}
          />
          <TextInput
          onChangeText={setOtp_3}
          style={{ width:72 , height:107 , margin:10, borderRadius:6, borderWidth:1, fontSize:50, paddingLeft:20}}
          value={otp_3}
          keyboardType="numeric"
          maxLength={1}
          />
          <TextInput
          style={{ width:72 , height:107,  margin:10, borderRadius:6, borderWidth:1, fontSize:50, paddingLeft:20}}
          onChangeText={setOtp_4}
          value={otp_4}
          keyboardType="numeric"
          maxLength={1}
          />
        </div>
        </View>
        
          <View>
          <Text style={{ fontSize: 14, margin:5 }}>Didn’t Receive a code? <Text style={{color:"blue"}}>Resend Code</Text></Text>
          </View>
        <View>
        <Link href='\donor_Resp_Selection'>           
         <TouchableOpacity style={{backgroundColor:'#E0E0E0', height:40 , width:361, marginLeft:3, marginTop:200, borderRadius:6 , alignItems:'center', paddingTop:10 }}><Text style={{fontSize:14, fontWeight:700}}> Verify </Text></TouchableOpacity>
         </Link>

        </View>
    </View>
  )
}

export default Email_Auth