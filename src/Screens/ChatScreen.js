import React, {useState} from 'react';
import {FlatList, TouchableOpacity, StyleSheet, View, Text} from "react-native";
import {StatusBar} from 'expo-status-bar';
import ChatItem from "../Components/ChatItem";
import {Icon, Fab} from 'native-base';
import ContactData from "../Data/ContactData";
import ChatData from "../Data/ChatData";
import {db} from '../firebase';

export default function ChatScreen({navigation}) {
  // const [chats, setChat] = useState([]);
    const [chats, setChat] = useState(ChatData);
  // db
  //     .collection('chats')
  //     .where('participants', 'array-contains', 'nmanumr')
  //     .onSnapshot((snap) => {
  //       setChat(() => snap.docs.map(d => ({...d.data(), id: d.id})));
  //     });

  return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#000000" style='light'/>
          <View style={styles.body}>
          <FlatList
              data={chats}
              inverted ={true}
              initialScrollIndex={ChatData.length-1}
              keyExtractor={item => item.title}
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
    backgroundColor: "#111",
  },
  chatitem: {
    marginVertical: 1,
  },
  img: {
    flex: 1,
  }


});
