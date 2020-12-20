import React, {useState} from 'react';
import {FlatList, TouchableOpacity, StyleSheet, View} from "react-native";
import {StatusBar} from 'expo-status-bar';
import ChatItem from "../Components/ChatItem";
import {Icon, Fab} from 'native-base';
import ContactData from "../Data/ContactData";

import {db} from '../firebase';

export default function ChatScreen({navigation}) {
  const [chats, setChat] = useState([]);

  db
      .collection('chats')
      .where('participants', 'array-contains', 'nmanumr')
      .onSnapshot((snap) => {
        setChat(() => snap.docs.map(d => ({...d.data(), id: d.id})));
      });

  return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#000000" style='light'/>
        <View style={styles.body}>
          <FlatList
              data={chats}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                  <TouchableOpacity style={styles.chatitem}
                                    onPress={() => navigation.navigate('Username', {chat: item, title: 'Nauman Umer'})}>
                    <ChatItem
                        avatar={require('../assets/avtr2.png')}
                        alt={item.alt}
                        title={item.title}
                        subtitle={item.subtitle}
                        date={item.date}
                        unread={item.unread}
                        statusColor={item.statusColor}/>
                  </TouchableOpacity>
              )}/>
        </View>
        <Fab
            active={false}
            containerStyle={{}}
            style={{backgroundColor: '#000'}}
            position="bottomRight"
            onPress={() => navigation.navigate('NewMessage', {params: ContactData})}>
          <Icon name="chatbubbles"/>
        </Fab>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  body: {
    flex: 1,
    backgroundColor: "black",
  },
  chatitem: {
    marginVertical: 2,
    marginHorizontal: 2,
  },
  img: {
    flex: 1,
  }


});
