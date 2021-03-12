import AsyncStorage from "@react-native-async-storage/async-storage";
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

export const getFood =  (foods) => {
        // let response = await Axios.get(`https://nigerianfoods.herokuapp.com/api/food_category/${category}`);

        let l = foods.length

        let r = randomNumber(0, l);

        let foodObj = foods[r];
        let objArr = Object.keys(foodObj);

        return ({
            foodName: objArr[0],
            details: foods[r][objArr[0]],
        })
}

export const getFoods = async (category) => {
    try {
        let response = await Axios.get(`https://nigerianfoods.herokuapp.com/api/food_category/${category}`);
        return ({
            foods: response.data[category]
        })
    } catch (error) {
        throw error
    }
}
export const checkLogin = async () => {
    // let uid;

    try {
        let uid = await AsyncStorage.getItem("uid")
        console.log(uid)
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

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }