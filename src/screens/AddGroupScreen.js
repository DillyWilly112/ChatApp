import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

function AddGroupScreen() {
return(
<View style={styles.container}>
<Text style={styles.text}> AddGroupScreen</Text>
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

export default AddGroupScreen