import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from "react-native";
import {StatusBar} from 'expo-status-bar';
import ChatItem from "../Components/ChatItem";
import {db} from '../firebase';
import {Ionicons} from "@expo/vector-icons";

export default function ChatScreen({navigation}) {
    const [chats, setChat] = useState([]);

    useEffect(() => {
        return db
            .collection('chats')
            // todo: set userid
            .where('participants', 'array-contains', 'nmanumr')
            .orderBy('lastMessageDate', 'desc')
            .onSnapshot((snap) => {
                setChat(() => snap.docs.map(d => ({...d.data(), id: d.id})));
            });
    }, []);


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#fff" style='dark'/>
            <View style={styles.body}>
                <FlatList
                    data={chats}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <TouchableOpacity style={styles.chatitem}
                                          onPress={() => navigation.navigate('Username', {
                                              chat: item,
                                              title: item.title
                                          })}>
                            <ChatItem
                                avatar={require('../assets/avtr2.png')}
                                alt={item.alt}
                                title={item.title}
                                subtitle={item.lastMessage.text}
                                date={item.lastMessage.createdAt.toDate()}
                                unread={item.unread}
                                statusColor={
                                    item.lastMessage.createdAt.toDate().getTime() > (new Date().getTime() - 60000)
                                        ? 'green'
                                        : 'red'
                                }/>
                        </TouchableOpacity>
                    )}/>
            </View>
            <TouchableOpacity
                style={styles.floatingbutton}
                onPress={() => navigation.navigate('NewMessage')}>
                <Ionicons name="chatbox" style={{fontSize: 26, color: '#fff',}}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    body: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    chatitem: {
    },
    img: {
        flex: 1,
    },
    floatingbutton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        position: 'absolute',
        bottom: 30,
        right: 25,
        height:60 ,
        backgroundColor: '#000',
        borderRadius: 100,
    },


});
