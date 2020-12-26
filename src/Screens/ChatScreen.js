import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from "react-native";
import {StatusBar} from 'expo-status-bar';
import ChatItem from "../Components/ChatItem";
import {Fab, Icon} from 'native-base';
import {db} from '../firebase';

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
        <StatusBar backgroundColor="#000000" style='light'/>
        <View style={styles.body}>
          <FlatList
              data={chats}
              // inverted ={true}
              // initialScrollIndex={(chats.length)-1}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                  <TouchableOpacity style={styles.chatitem}
                                    onPress={() => navigation.navigate('Username', {
                                      chat: item,
                                      title: item.title
                                    })}
                  >
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
        <Fab
            active={false}
            containerStyle={{}}
            style={{backgroundColor: '#444', opacity: 0.95}}
            position="bottomRight"
            onPress={() => navigation.navigate('NewMessage')}>
          <Icon name="chatbubbles" style={{fontSize: 30, color: 'white',}}/>
        </Fab>
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
    backgroundColor: "#222",
  },
  chatitem: {
    marginVertical: 1,
  },
  img: {
    flex: 1,
  }


});
