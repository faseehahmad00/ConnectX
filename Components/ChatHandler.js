import React from 'react';
import {StyleSheet, View} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Icon } from 'native-base';

import ChatScreen from "./Screens/ChatScreen";
import IndividualChat from "./Screens/IndividualChat";
import NewMessage from './Screens/NewMessage'

export default function ChatHandler({ navigation }) {
    const Stack = createStackNavigator();
    return (
            <Stack.Navigator initialRouteName="Chats">
                <Stack.Screen name="Chats" component={ChatScreen} options={{
                    headerStyle: {
                        backgroundColor: '#000000',
                    },
                    headerTintColor: '#fff',
                    headerLeft: () => (
                        <Button onPress={() => navigation.openDrawer()} iconleft small dark>
                            <Icon name='menu' />
                        </Button>

                    ),
                    headerRight: () => (

                            <Button style={styles.newmessage} onPress={() => navigation.navigate('NewMessage')} iconright small dark>
                                <Icon name='chatbubbles' />
                            </Button>

                    ),
                }} />
                <Stack.Screen name="Username" component={IndividualChat}  options={{
                    headerStyle: {
                        backgroundColor: '#000000',
                    },
                    headerTintColor: '#fff',
                }}/>
                <Stack.Screen name="NewMessage" component={NewMessage}  options={{
                    headerStyle: {
                        backgroundColor: '#000000',
                    },
                    headerTintColor: '#fff',
                }}/>
            </Stack.Navigator>

    );
}
const styles = StyleSheet.create({
    titlebar: {
        flexDirection:"row",
    },
    newmessage:{

    },

});