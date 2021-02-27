import React from 'react'
import { View ,Text,StyleSheet} from 'react-native'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
backgroundColor:'red',
alignItems:'center',
flex:1  },

});