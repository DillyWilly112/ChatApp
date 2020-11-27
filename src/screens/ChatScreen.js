import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

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
backgroundColor: '#66ff66',
},
text: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
}
})

export default ChatScreen