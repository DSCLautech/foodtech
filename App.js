import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';


import MainComponent from "./Components/MainComponent";
import Axios from "axios";


// const App = createAppContainer(MainNavigator, {
//   initialRouteName: "Veggiepe",
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: "#f4511e"
//     },
//     headerTintColor: "#fff",
//     headerTitleStyle: {
//       fontWeight: "bold"
//     }
//   }
// });
// Axios.get('https://timezoneapi.io/api/ip/?token=akefGSZHPzSUlQMnKmGB/')
//   .then((r) => {
//     console.log(r.data.data.datetime.timeday_gen, r.data.data.city, r.data.data.country);
//   })
//   .catch((e) => {
//     console.log(e)
//   })

const App = () => {
  const [time, setTime] = useState({});
  const [food, setFood] = useState({})

  useEffect(() => {
    getTime();
    getFood("rice_based");
    // return () => {

    // };
  }, [getTime, getFood])

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const getTime = async () => {
    let response = await Axios.get('https://timezoneapi.io/api/ip/?token=akefGSZHPzSUlQMnKmGB/')

    setTime({
      dayTime: response.data.data.datetime.timeday_gen, city: response.data.data.city,
      country: response.data.data.country, preciseTime: response.data.data.datetime.timeday_spe
    })

  }

  const getFood = async (category) => {
    let response = await Axios.get(`https://nigerianfoods.herokuapp.com/api/food_category/${category}`);

    let l = response.data[category].length

    let r = randomNumber(0, l);

    let foodObj = response.data[category][r];
    let objArr = Object.keys(foodObj);

    // console.log(objArr[0])
    setFood({
      foodName: objArr[0],
      details: response.data[category][r][objArr[0]]
    })

  }

  // console.log(food)
  return (
    <NavigationContainer>
      <MainComponent time={time} food={food} />
    </NavigationContainer>
  )
}


export default App;
