import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import styles from './styles';
import { firebase } from '../../firebase/config'
import { Loading } from '../components/loading';



export default function LoginScreen({ navigation, setUser }) {

    const [form, setForm] = React.useState({ password: '', email: '' });

    const [load, setLoad] = useState(false)

    const onFooterLinkPress = () => {
        navigation.navigate('Signup')
    }

    const onLoginPress = () => {
        setLoad(true);
        //    setForm(f => ({...f, email: f.email.trim()}))
        //    console.log(form)

        firebase
            .auth()
            .signInWithEmailAndPassword(form.email.trim(), form.password)
            .then((response) => {
                const uid = response.user.uid;

                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        // console.log(firestoreDocument)
                        setLoad(false);

                        if (!firestoreDocument.exists) {
                            alert("User does not exist.")
                            return;
                        }
                        const user = firestoreDocument.data()
                        // navigation.navigate('Home', { user: user })
                        AsyncStorage.setItem("uid", uid)
                            .then((r) => { console.log(r); setUser({ loggedIn: true, user }) })
                            .catch(e => { alert(error) })
                    })
                    .catch(error => {
                        setLoad(false);

                        alert(error)
                    });
            })
            .catch(error => {
                setLoad(false);

                alert(error)
            })
    }

    if (load) {
        return <Loading />
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../assets/a.jpg')}
                    style={{ width: 80, height: 90, marginLeft: 150, marginTop: 40 }}

                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(e) => setForm(state => ({ ...state, email: e }))}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(e) => setForm(state => ({ ...state, password: e }))}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLoginPress()}>
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>

                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {

    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    }
})