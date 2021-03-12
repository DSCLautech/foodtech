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
      const checkUser = await checkLogin();
      const time = await getTime();
      const food = await getFood("rice_based");
      setFood(food);
      setTime(time);
      setUser(checkUser);
      setLoad(false);
    } catch (error) {
      console.log(error, "An Error Occured", )
      alert("An Error Occured")
    }

  }

  if (!user.loggedIn) {
    return (
      <NavigationContainer>
        <LoginStack state={setUser} />
      </NavigationContainer>
    )
  }

  // console.log(user)
  return (
    <NavigationContainer>
      <MainComponent time={time} food={food} user={user} load={load}/>
    </NavigationContainer>
  )
}


export default App;
