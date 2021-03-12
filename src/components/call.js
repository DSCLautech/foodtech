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
        return({
            foodName: objArr[0],
            details: response.data[category][r][objArr[0]],
            load: false
        })
    } catch (error) {
        throw error
    }
}

export const checkLogin =  () => {
    return firebase.auth().currentUser? firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        // Send token to your backend via HTTPS
        // ...
        return(idToken)

      }).catch(function(error) {
        // Handle error
        throw error
      }) : null;
}