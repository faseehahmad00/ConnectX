import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from "react-native";
import Profile from "../Screens/Profile";
import License from "../Screens/License";
import About from "../Screens/About";
import Settings from "../Screens/Settings";
import {Ionicons} from "@expo/vector-icons";

const Stack = createStackNavigator();


export default function SettingManager({navigation}) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Settings" component={Settings} options={{
                headerStyle: {
                    backgroundColor: '#fff',
                },
                headerTintColor: '#000',
                headerLeft: () => (
                    <TouchableOpacity style={{flex:1,justifyContent:"center",marginLeft:10}} onPress={() => navigation.openDrawer()}>
                        <Ionicons name='menu' style={{color:'black',fontSize:24}}/>
                    </TouchableOpacity>
                ),
            }}

            />
            <Stack.Screen name="Profile" component={Profile} options={{
                headerStyle: {
                    backgroundColor: '#fff',
                },
                headerTintColor: '#000',
            }}/>
            <Stack.Screen name="License" component={License} options={{
                headerStyle: {
                    backgroundColor: '#fff',
                },
                headerTintColor: '#000',
            }}/>
            <Stack.Screen name="About" component={About} options={{
                headerStyle: {
                    backgroundColor: '#fff',
                },
                headerTintColor: '#000',
            }}/>
        </Stack.Navigator>

    );
}
