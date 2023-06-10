import React from 'react'
import { Text, View ,TextInput, TouchableOpacity } from 'react-native'

const SignInForm = () => {
  return (
    <View>
        <Text>Verify your Email</Text>
        <Text>Enter the verification code send to your email</Text>
        <View>
          <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={number}
          secureTextEntry={true}
          keyboardType="numeric"
          maxLength={1}
          />
          <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={number}
          secureTextEntry={true}
          keyboardType="numeric"
          maxLength={1}
          />
          <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={number}
          secureTextEntry={true}
          keyboardType="numeric"
          maxLength={1}
          />
          <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={number}
          secureTextEntry={true}
          keyboardType="numeric"
          maxLength={1}
          />

        </View>

        <View>
            <TouchableOpacity>Verify</TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Login</Text>
      </TouchableOpacity>
        </View>
    </View>
  )
}

export default SignInForm