import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import ProfileScreen from "./Components/Screens/ProfileScreen";
import Settings from "./Components/Screens/Settings";
import ChatHandler from "./Components/ChatHandler";

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="My Profile">
          <Drawer.Screen name="Chats" component={ChatHandler} />
          <Drawer.Screen name="My Profile" component={ProfileScreen}/>
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}
