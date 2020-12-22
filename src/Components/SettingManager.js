import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from "../Screens/Profile";
import License from "../Screens/License";
import About from "../Screens/About";
import Settings from "../Screens/Settings";
import {Button, Icon} from "native-base";

const Stack = createStackNavigator();


export default function SettingManager({navigation}) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Settings" component={Settings} options={{
                headerStyle: {
                    backgroundColor: '#000000',
                },
                headerTintColor: '#fff',
                headerLeft: () => (
                    <Button onPress={() => navigation.openDrawer()} iconleft small dark>
                        <Icon name='menu'/>
                    </Button>

                ),
            }}

            />
            <Stack.Screen name="Profile" component={Profile} options={{
                headerStyle: {
                    backgroundColor: '#000000',
                },
                headerTintColor: '#fff',
            }}/>
            <Stack.Screen name="License" component={License} options={{
                headerStyle: {
                    backgroundColor: '#000000',
                },
                headerTintColor: '#fff',
            }}/>
            <Stack.Screen name="About" component={About} options={{
                headerStyle: {
                    backgroundColor: '#000000',
                },
                headerTintColor: '#fff',
            }}/>
        </Stack.Navigator>

    );
}
