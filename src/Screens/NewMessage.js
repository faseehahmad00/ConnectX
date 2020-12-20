import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, View, FlatList} from "react-native";
import {StatusBar} from "expo-status-bar";
import ChatItem from "../Components/ChatItem";

import {db} from '../firebase';

export default function NewMessgae() {
  const [contacts, setContacts] = useState([]);

  db
      .collection('users')
      .onSnapshot((snap) => {
        const msgs = snap.docs
            .map(d => ({...d.data(), id: d.id}))
            .sort((a, b) => a.name.localeCompare(b.name));
        setContacts(() => msgs);
      });

  return (
      <View style={styles.container}>
        <StatusBar style='light'/>
        <View style={styles.body}>
          <FlatList
              data={contacts}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                  <TouchableOpacity style={styles.chatitem}>
                    <ChatItem
                        avatar={require('../assets/avtr.png')}
                        title={item.name}
                        subtitle={item.status}
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
    backgroundColor: '#000000',
  },
  body: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#000",
  },
  chatitem: {
    marginVertical: 1,
  },
});
