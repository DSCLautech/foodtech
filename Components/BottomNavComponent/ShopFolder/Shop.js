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
                    style={{ width: 380, height: 170, }}
                />
                <Text style={{ fontSize: 20 }}> Organic Appetisers</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image
                    source={require('../../../assets/b.jpg')}
                    style={{ width: 380, height: 170, marginTop: 20 }}
                />
                <Text style={{ fontSize: 20,  }}> Get Rids of Free RAdicals</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image
                    source={require('../../../assets/c.jpg')}
                    style={{ width: 380, height: 170, marginTop: 20  }}
                />
                <Text style={{ fontSize: 20 }}> Best Meal</Text>
            </TouchableOpacity>

            <Image
                source={require('../../../assets/d.jpg')}
                style={{ width: 380, height: 170, marginTop: 20 }}
            />
                <Text style={{ fontSize: 20 }}> Best Meal</Text>

                <TouchableOpacity>
                <Image
                    source={require('../../../assets/a.jpg')}
                    style={{ width: 380, height: 170, }}
                />
                <Text style={{ fontSize: 20 }}> Organic Appetisers</Text>
            </TouchableOpacity>

        </View>
        </ScrollView>
    )
}
