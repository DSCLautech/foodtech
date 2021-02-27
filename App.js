import React from "react";
import { NavigationContainer } from '@react-navigation/native';


import MainComponent from "./Components/MainComponent";


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

const App = () => {
  return (
    <NavigationContainer>
      <MainComponent />
    </NavigationContainer>
  )
}

export default App;
