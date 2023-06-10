import React from 'react'
import { Text, View ,TextInput } from 'react-native'

const SignUpForm = () => {
  return (
    <View>
        <Text>Create an account</Text>
        <View>
          <Text>Email*</Text>
          <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          secureTextEntry={true}
          />

          <Text>Password*</Text>
          <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          secureTextEntry={true}
          />

          <Text>Verify Password*</Text>
          <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          secureTextEntry={true}
          /> 

        </View>

        <View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Create an Account</Text>
      </TouchableOpacity>
        </View>
    </View>
  )
}

export default SignUpForm