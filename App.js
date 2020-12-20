import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from './Screens/Login';
import MainApp from './Components/MainApp'

export default function App() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="LoginManager" component={MainApp} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}
