import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import Button from '../components/Button'
import Strings from '../const/String'
import EmailTextField from '../components/EmailTextField'

function SignInScreen() {
return(
      <View style={styles.container}>
      <Text style={styles.text}> Rally </Text>
      <Button title = {Strings.Join} ></Button>
      <EmailTextField></EmailTextField>
</View>
)
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#66ff66',
},
text: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
}
})

export default SignInScreen