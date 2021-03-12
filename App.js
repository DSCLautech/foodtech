import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';

import MainComponent, { LoginStack } from "./Components/MainComponent";
import { checkLogin, getFoods, getTime } from "./src/components/call";
import { Loading } from "./src/components/loading";




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
      setUser(checkUser);
      const time = await getTime();
      const food = await getFoods("rice_based");
      setFood(food);
      setTime(time);
      setLoad(false);

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
        <MainComponent time={time} food={food} user={user} load={load}/>
      </NavigationContainer>
    )
  }

  return (
    <Loading />
  )

  // console.log(user)
 
}


export default App;
