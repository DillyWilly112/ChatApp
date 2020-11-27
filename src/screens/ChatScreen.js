import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import Color from '../utils/Colors'

function ChatScreen() {
return(
<View style={styles.container}>
<Text style={styles.text}> ChatScreen</Text>
</View>
)
}


const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: Color.theme
},
text: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
}
})

export default ChatScreen