import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Quiz from '../screens/quiz';
import Result from '../screens/result';
import LoginScreen from '../screens/loginScreen';
import RagisterScreen from '../screens/RegisterScreen';



const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: '#1c6355' },
  headerTitleStyle: { color: 'white' },
  headerTintColor: "white",
}


function MyStack() {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions} >
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RagisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
      />
      <Stack.Screen
        name="Result"
        component={Result}
      />

    </Stack.Navigator>
  );
}

export default MyStack;
