import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import SettingManager from "./SettingManager";
import ChatHandler from "./ChatHandler";

export default function App() {
    const Drawer = createDrawerNavigator();
    const drawercontentstyle = {
        inactiveTintColor: "#ffffff",
        activeTintColor: 'goldenrod',
        itemStyle: {marginVertical: 6},
    }

    return (
            <Drawer.Navigator
                initialRouteName="My Profile"
                drawerStyle={{backgroundColor: "#444"}}
                drawerContentOptions={drawercontentstyle}>
                <Drawer.Screen name="Chats" component={ChatHandler}/>
                <Drawer.Screen name="Settings" component={SettingManager}/>
            </Drawer.Navigator>

    );
}
