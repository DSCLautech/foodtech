import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Chat() {
    return (
        <View style={{Flex:1,justifyContent:'center',alignItems:'center',paddingTop:250}}>
          <Text style={{textAlign:'center', fontSize:17}}> For A Dietician Consultation</Text>
          <TouchableOpacity 
          style={{backgroundColor:'green'}}
          onPress={ ()=> alert('Coming Soon')}>
            <Text style={{textAlign:'center',padding:17, fontSize:18,color:'white'}}>Upgrade To Premium Version</Text>
          </TouchableOpacity>
        </View>
    )
}
