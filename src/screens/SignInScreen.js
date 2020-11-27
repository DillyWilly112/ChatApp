import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

function SignInScreen() {
return(
<View style={styles.container}>
<Text style={styles.text}> SignInScreen</Text>
</View>
)
}


const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignContent: 'center',
backgroundColor: '#66ff66',
},
text: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
}
})

export default SignInScreen