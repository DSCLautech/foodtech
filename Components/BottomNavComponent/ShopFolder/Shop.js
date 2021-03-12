import React from 'react'
import { Text, View, Image, Divider } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

export default function Shop() {
    return (
        <ScrollView>
            <View style={{ alignItems: 'center', flex: 1, }}>

                <TouchableOpacity>
                    <Image
                        source={require('../../../assets/a.jpg')}
                        style={{ width: 380, height: 150, }}
                    />
                    <Text style={{ fontSize: 17, textAlign: 'center' }}> Lagos Kitchen</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('../../../assets/b.jpg')}
                        style={{ width: 380, height: 150, marginTop: 20 }}
                    />
                    <Text style={{ fontSize: 17, textAlign: 'center' }}> Derek Food</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('../../../assets/c.jpg')}
                        style={{ width: 380, height: 150, marginTop: 20 }}
                    />
                    <Text style={{ fontSize: 17, textAlign: 'center' }}> Amazing Food</Text>
                </TouchableOpacity>

                <Image
                    source={require('../../../assets/d.jpg')}
                    style={{ width: 380, height: 150, marginTop: 20 }}
                />
                <Text style={{ fontSize: 17, textAlign: 'center' }}> Alice Food</Text>

                <TouchableOpacity>
                    <Image
                        source={require('../../../assets/a.jpg')}
                        style={{ width: 380, height: 150, marginTop: 20 }}
                    />
                    <Text style={{ fontSize: 17, textAlign: 'center' }}> Oasis Food</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}
