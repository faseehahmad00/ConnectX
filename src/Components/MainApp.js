import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import SettingManager from "./SettingManager";
import ChatHandler from "./ChatHandler";

export default function App() {
    const Drawer = createDrawerNavigator();
    const drawercontentstyle = {
        inactiveTintColor: "#000",
        activeTintColor: '#6C63FF',
        itemStyle: {marginVertical: 8,marginHorizontal:10,borderRadius:100},
    }

    return (
            <Drawer.Navigator
                initialRouteName="My Profile"
                drawerStyle={{backgroundColor: "#fff"}}
                drawerContentOptions={drawercontentstyle}
                drawerType="slide"
            >
                <Drawer.Screen name="Chats" component={ChatHandler}/>
                <Drawer.Screen name="Settings" component={SettingManager}/>
            </Drawer.Navigator>

    );
}
