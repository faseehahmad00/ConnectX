import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, View, FlatList} from "react-native";
import {StatusBar} from "expo-status-bar";
import ChatItem from "../Components/ChatItem";

import {db} from '../firebase';


export default function NewMessgae({navigation}) {
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
                  <TouchableOpacity style={styles.chatitem}
                                    // onPress={()=>{
                                    //     // if(!ChatData.find((a)=> a.id===item.id ))
                                    //     //     ChatData.push(item);
                                    //     navigation.navigate('Username',{title:item.title});
                                    // }}
                      >
                    <ChatItem
                        avatar={require('../assets/avtr2.png')}
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
    backgroundColor: '#000000',
  },
  body: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#111",
  },
  chatitem: {
    marginVertical: 0.5,
  },
});
