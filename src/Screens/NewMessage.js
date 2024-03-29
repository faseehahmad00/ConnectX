import React, {useEffect, useState, useCallback} from 'react';
import {TouchableOpacity, StyleSheet, View, FlatList} from "react-native";
import {StatusBar} from "expo-status-bar";
import ChatItem from "../Components/ChatItem";
import {db} from '../firebase';


export default function NewMessgae({navigation}) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    db
        .collection('users')
        .onSnapshot((snap) => {
          const msgs = snap.docs
              .map(d => ({...d.data(), id: d.id}))
              .sort((a, b) => a.name.localeCompare(b.name));
          setContacts(() => msgs);
        });
  }, [])

  const onStartNewChat = useCallback(async (user) => {
    const snap = await db.collection(`chats/`)
        .where('participants', '==', ['nmanumr', user.id])
        .get();

    if (snap.docs.length > 0) {
      const chat = {
        ...snap.docs[0].data(),
        id: snap.docs[0].id,
      }
      navigation.navigate('Username', {chat: chat, title: chat.title});
      return;
    }

    const chat = await db.collection(`/chats/`).add({
      lastMessage: null,
      title: user.name,
      // todo: fix current user id
      participants: ['nmanumr', user.id],
      uread: {
        'nmanumr': 0,
        [user.id]: 0,
      }
    });

    navigation.navigate('Username', {chat: chat, title: user.name})
  }, []);

  function randomURI(){
    let rand1 = 100+Math.floor(Math.random() * 101);
    return "https://source.unsplash.com/random/"+rand1+"x"+rand1+5;
  }
  return (
      <View style={styles.container}>
        <StatusBar style='dark'/>
        <View style={styles.body}>
          <FlatList
              data={contacts}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                  <TouchableOpacity
                      activeOpacity={0.9}
                      style={styles.chatitem}
                      onPress={() => onStartNewChat(item)}
                  >
                    <ChatItem
                        avatar={{uri:randomURI()}}
                        title={item.name}
                        subtitle={item.subtitle}
                    />
                  </TouchableOpacity>
              )}/>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  body: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  chatitem: {
    marginVertical: 0.5,
  },
});
