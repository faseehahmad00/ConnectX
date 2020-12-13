import React from 'react';
import {TouchableOpacity,StyleSheet,View} from "react-native";
import { Icon,Button,Container, Text} from 'native-base';
import { StatusBar } from 'expo-status-bar';
import { ChatItem } from 'react-chat-elements/native';

export default function ChatScreen({ navigation }) {
    return (
            <View style={styles.container}>
            <StatusBar backgroundColor="#000000" style='light' />
            <View style={styles.body}>
                <ChatItem
                    avatar={'../assets/favicon.png'}
                    alt={'Reactjs'}
                    title={'USER TEST'}
                    subtitle={'What are you doing?'}
                    date={new Date()}
                    unread={1}
                    statusColor="red"/>
                <ChatItem
                    avatar={'./assets/favicon.png'}
                    alt={'Reactjs'}
                    title={'USER 1'}
                    subtitle={'What are you doing?'}
                    date={new Date()}
                    unread={2}
                    statusColor="lightgreen"/>
                <ChatItem
                    avatar={'./assets/favicon.png'}
                    alt={'Reactjs'}
                    title={'USER 1'}
                    subtitle={'What are you doing?'}
                    date={new Date()}
                    unread={3}
                    statusColor="red"/>
                <ChatItem
                    avatar={'./assets/favicon.png'}
                    alt={'Reactjs'}
                    title={'USER 1'}
                    subtitle={'What are you doing?'}
                    date={new Date()}
                    unread={2}
                    statusColor="lightgreen"/>
                <ChatItem
                    avatar={'./assets/favicon.png'}
                    alt={'Reactjs'}
                    title={'USER 1'}
                    subtitle={'What are you doing?'}
                    date={new Date()}
                    unread={7}
                    statusColor="red"/>
                <ChatItem
                    avatar={'./assets/favicon.png'}
                    alt={'Reactjs'}
                    title={'USER 1'}
                    subtitle={'What are you doing?'}
                    date={new Date()}
                    unread={4}
                    statusColor="red"/>
           </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    body:{
        flex:1,
        backgroundColor:"#666666",
    },


});
