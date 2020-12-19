// In App.js in a new project

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from "./Screens/Profile";
import License from "./Screens/License";
import About from "./Screens/About";
import Settings from "./Screens/Settings";

const Stack = createStackNavigator();


export default function SettingManager() {
    return (
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="License" component={License} />
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator>

    );
}
