import React from 'react'
import { Link } from 'expo-router';
import { Text, View ,TextInput , TouchableOpacity} from 'react-native'

const SignUpForm = () => {

  const [text, setText] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [verifypassword, setVerifyPassword] = React.useState('');

  return (
    <View style={{ marginTop:50, alignItems:'center'}}>
        <Text style={{ fontSize: 18 ,  fontWeight: 'bold'}}>Create an account</Text>
        <View style={{marginTop:30}}>
          <Text style={{marginLeft:'-60px', fontSize:16}}>Email*</Text>
          <TextInput
          style={{borderColor:"#899197" ,marginLeft:-60, height:30, width:300,marginRight:-76 , marginTop:5, borderRadius:8, padding:12, borderWidth:1}}
          placeholder='ex. health123@gmail.com'
          onChangeText={setText}
          value={text}
          secureTextEntry={true}
          />

          <Text style={{marginLeft:'-60px', fontSize:16,  marginTop:11}}>Password*</Text>
          <TextInput
          style={{borderColor:"#899197" ,marginLeft:-60, height:30, width:300,marginRight:-76 , marginTop:5, borderRadius:8, padding:12, borderWidth:1}}
          secureTextEntry={true}
          placeholder='Must have at least 6 characters'
          marginLeft={"-60"}
          value={password}
          onChangeText={setPassword}
          />

          <Text style={{marginLeft:'-60px', fontSize:16,  marginTop:11}}>Verify Password*</Text>
          <TextInput
          style={{borderColor:"#899197" ,marginLeft:-60, height:30, width:300,marginRight:-76 , marginTop:5, borderRadius:8, padding:12, borderWidth:1}}
          secureTextEntry={true}
          placeholder='Enter your password'
          marginLeft={"-60"}
          value={verifypassword}
          onChangeText={setVerifyPassword}
          /> 

        </View>

        <View>
        <Link href='/signIn'>
        <TouchableOpacity  style={{backgroundColor:'#E0E0E0', height:41 , width:300, marginLeft:15, marginTop:32, borderRadius:6 , alignItems:'center', paddingTop:10, fontSize:16}}>
        <Text style={{fontWeight:700}}>Create an Account</Text>
        </TouchableOpacity>
        </Link>
        </View>
        
        <View>
        <Text style={{marginTop:25}}>Already have an account ?
          <Link href='/signIn'>  
            <Text style={{color:'blue'}}> <u>Login Here</u></Text> 
          </Link>
        </Text>
        </View>
    </View>
  )
}

export default SignUpForm