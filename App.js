import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import LoginScreen from './components/screens/LoginScreen';
import LoginSignup from './components/screens/LoginSignup';


const Stack = createNativeStackNavigator();

 export default function () {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name='loginSignup'
         component={LoginSignup}
         options={{title:"Welcome Screen"}}/>
        <Stack.Screen 
         name='LoginScrn'
         component={LoginScreen}
         options={{title:"Login Screen"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
