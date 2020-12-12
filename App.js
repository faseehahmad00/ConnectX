import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Settings from "./Components/Screens/Settings";
import ChatHandler from "./Components/ChatHandler";

export default function App() {
  const Drawer = createDrawerNavigator();
    const drawercontentstyle = {
        inactiveTintColor: "#ffffff",
        activeTintColor: '#add8e6',
        itemStyle: { marginVertical: 6 },}

  return (
      <NavigationContainer>
          <Drawer.Navigator
              initialRouteName="My Profile"
              drawerStyle={{ backgroundColor: "#666666" }}
              drawerContentOptions={drawercontentstyle} >
          <Drawer.Screen name="Chats" component={ChatHandler} />
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}
