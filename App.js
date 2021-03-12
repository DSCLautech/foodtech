import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';

import MainComponent, { LoginStack } from "./Components/MainComponent";
import { checkLogin, getFoods, getTime } from "./src/components/call";
import { Loading } from "./src/components/loading";
import { LogBox } from "react-native";

LogBox.ignoreLogs(['Setting a timer']);



const App = () => {
  const [time, setTime] = useState({});
  const [food, setFood] = useState({});
  const [load, setLoad] = useState(true);
  const [user, setUser] = useState({});


  useEffect(() => {
    ApiCall()
  }, [ApiCall])

  const ApiCall = async () => {
    try {
      const checkUser = await checkLogin();
      setUser(checkUser);
      const time = await getTime();
      const food = await getFoods(checkUser.user.pref);
      // console.log(food, checkUser)

      setFood(food);
      setTime(time);
      setLoad(false);
      console.log(load, "me in app")
    } catch (error) {
      console.log(error, "An Error Occured", )
      alert("An Error Occured")
    }

  }

  if (user.loggedIn == false) {
    return (
      <NavigationContainer>
        <LoginStack state={setUser} />
      </NavigationContainer>
    )
  }

  else if (user.loggedIn == true) {
    return (
      <NavigationContainer>
        <MainComponent time={time} food={food} user={user} setUser={setUser} load={load}/>
      </NavigationContainer>
    )
  }

  return (
    <Loading />
  )

  // console.log(user)
 
}


export default App;
