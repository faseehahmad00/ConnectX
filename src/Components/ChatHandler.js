import React from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from "../Screens/ChatScreen";
import IndividualChat from "../Screens/IndividualChat";
import NewMessage from '../Screens/NewMessage'
import {Ionicons} from "@expo/vector-icons";

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
                        <TouchableOpacity style={{flex:1,justifyContent:"center",marginLeft:10}} onPress={() => navigation.openDrawer()}>
                            <Ionicons name='menu' style={{color:'white',fontSize:24}}/>
                        </TouchableOpacity>

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
