import React, {useState} from 'react';
import {FlatList, TouchableOpacity, StyleSheet, View, Text} from "react-native";
import {StatusBar} from 'expo-status-bar';
import ChatItem from "../Components/ChatItem";
import {Icon, Fab} from 'native-base';
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
              // inverted ={true}
              // initialScrollIndex={(chats.length)-1}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                  <TouchableOpacity style={styles.chatitem}
                                    onPress={() => navigation.navigate('Username', {chat: item, title: item.title})}
                  >
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
            style={{backgroundColor: '#444',opacity:0.95}}
            position="bottomRight"
            onPress={() => navigation.navigate('NewMessage', {params: ContactData})}>
          <Icon name="chatbubbles" style={{fontSize:30,color:'white',}}/>
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
