import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';

import MainComponent, { LoginStack } from "./Components/MainComponent";
import { checkLogin, getFood, getTime } from "./src/components/call";


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
  const [food, setFood] = useState({});
  const [load, setLoad] = useState(true);
  const [user, setUser] = useState({});


  useEffect(() => {
    ApiCall()
        // return () => {

    // };
  }, [ApiCall])

  const ApiCall = async () => {
    try {
      const token = await checkLogin();
      const time = await getTime();
      const food = await getFood("rice_based");
      setFood(food);
      setTime(time)
      setLoad(false);
      // console.log(token, "token")
    } catch (error) {
      alert(error)
    }

  }

  if (!user.loggedIn) {
    return (
      <NavigationContainer>
        <LoginStack state={setUser} />
      </NavigationContainer>
    )
  }

  // console.log(food)
  return (
    <NavigationContainer>
      <MainComponent time={time} food={food} />
    </NavigationContainer>
  )
}


export default App;
