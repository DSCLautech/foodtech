import Axios from "axios";
import { firebase } from '../../firebase/config'
export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export const getTime = async () => {
    try {
        let response = await Axios.get('https://timezoneapi.io/api/ip/?token=akefGSZHPzSUlQMnKmGB/')

        return ({
            dayTime: response.data.data.datetime.timeday_gen, city: response.data.data.city,
            country: response.data.data.country, preciseTime: response.data.data.datetime.timeday_spe
        });
    } catch (error) {
        throw error;
    }


}

export const getFood = async (category) => {
    try {
        let response = await Axios.get(`https://nigerianfoods.herokuapp.com/api/food_category/${category}`);

        let l = response.data[category].length

        let r = randomNumber(0, l);

        let foodObj = response.data[category][r];
        let objArr = Object.keys(foodObj);

        // console.log(objArr[0])
        return ({
            foodName: objArr[0],
            details: response.data[category][r][objArr[0]],
            load: false
        })
    } catch (error) {
        throw error
    }
}

export const checkLogin = async () => {
    let uid;

    try {
        firebase.auth().onAuthStateChanged(function (userauth) {
            if (userauth.uid) {
                uid = userauth.uid;
            }
        });

        // console.log(uid)
        const usersRef = firebase.firestore().collection('users')
        if (uid) {
            const firestoreDocument = await usersRef.doc(uid).get()
            if (!firestoreDocument.exists) {
                return ({ loggedIn: false })
            }
            const user = firestoreDocument.data()
            // navigation.navigate('Home', { user: user })
            return ({ loggedIn: true, user })
        }
       
       
    else {
        // No user is signed in.
        return ({ loggedIn: false })
    }

} catch (error) {
    throw error
}



}