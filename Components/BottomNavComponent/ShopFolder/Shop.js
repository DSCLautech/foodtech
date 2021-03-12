import React from 'react'
import { Text, View, Image, Divider } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

export default function Shop() {
    return (
        <ScrollView>
            <View style={{ alignItems: 'center', flex: 1, }}>

                <TouchableOpacity>
                    <Image
                        source={require('../../../assets/a.jfif')}
                        style={{ width: 380, height: 170, }}
                    />
                    <Text style={{ fontSize: 17, textAlign: 'center' }}> Lagos Kitchen</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('../../../assets/b.jfif')}
                        style={{ width: 380, height: 170, marginTop: 20 }}
                    />
                    <Text style={{ fontSize: 17, textAlign: 'center' }}> derek Food</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('../../../assets/c.jfif')}
                        style={{ width: 380, height: 170, marginTop: 20 }}
                    />
                    <Text style={{ fontSize: 17, textAlign: 'center' }}> Amazing Food</Text>
                </TouchableOpacity>

                <Image
                    source={require('../../../assets/d.jfif')}
                    style={{ width: 380, height: 170, marginTop: 20 }}
                />
                <Text style={{ fontSize: 17, textAlign: 'center' }}> Alice Food</Text>

                <TouchableOpacity>
                    <Image
                        source={require('../../../assets/a.jfif')}
                        style={{ width: 380, height: 170, }}
                    />
                    <Text style={{ fontSize: 17, textAlign: 'center' }}> Oasis Food</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}
