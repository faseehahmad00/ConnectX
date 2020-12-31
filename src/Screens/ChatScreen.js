import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from "react-native";
import {StatusBar} from 'expo-status-bar';
import ChatItem from "../Components/ChatItem";
import {db} from '../firebase';
import {Ionicons} from "@expo/vector-icons";

export default function ChatScreen({navigation}) {
    const [chats, setChat] = useState([]);

    useEffect(() => {
        navigation.setOptions({ headerLeft: () => (
                <TouchableOpacity style={{flex:1,justifyContent:"center",marginLeft:10}} onPress={() => navigation.openDrawer()}>
                    <Ionicons name='menu' style={{color:'black',fontSize:24}}/>
                </TouchableOpacity>
            ),})
    }, []);
    useEffect(() => {
        navigation.setOptions({title:"CHATS"})
        return db
            .collection('chats')
            // todo: set userid
            .where('participants', 'array-contains', 'nmanumr')
            .orderBy('lastMessageDate', 'desc')
            .onSnapshot((snap) => {
                setChat(() => snap.docs.map(d => ({...d.data(), id: d.id})));
            });
    }, []);

    function randomURI(){
        let rand1 = 100+Math.floor(Math.random() * 101);
        return "https://source.unsplash.com/random/"+rand1+"x"+rand1+5;
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#fff" style='dark'/>
            <View style={styles.body}>
                <FlatList
                    data={chats}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <TouchableOpacity style={styles.chatitem}
                                          onPress={() => navigation.navigate('Chat', {
                                              chat: item,
                                              title: item.title
                                          })}>
                            <ChatItem
                                avatar={{uri:randomURI()}}
                                alt={item.alt}
                                title={item.title}
                                subtitle={item.lastMessage.text}
                                date={item.lastMessage.createdAt.toDate()}
                                unread={item.unread}
                                statusColor={
                                    item.lastMessage.createdAt.toDate().getTime() > (new Date().getTime() - 6000000)
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
        backgroundColor: '#3f3d56',
        borderRadius: 100,
    },


});
