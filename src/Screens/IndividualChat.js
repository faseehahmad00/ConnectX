import React, {useState, useCallback, useEffect} from 'react';
import {StyleSheet, View, Text, Image,TouchableOpacity} from "react-native";
import {InputToolbar,Bubble,GiftedChat} from 'react-native-gifted-chat'
import {db} from '../firebase';
import {usersStore} from "../usersStore";
import Ionicons from "@expo/vector-icons";
import Avatar from "../Components/Avatar";


export default function IndividualChat({route, navigation}) {
  const [messages, setMessages] = useState([]);
  const {chat} = route.params;

    useEffect(() => {
        navigation.setOptions({ headerLeft: () => (
            <TouchableOpacity  style={{flexDirection:"row",justifyContent:'center',borderRadius:100}} onPress={()=>navigation.goBack()}>
                    <Image source={require('../assets/left.png')}
                           style={{marginLeft:2,marginTop:5,height:20,width:50}}/>
                    <Image style={{height:30,width:30,position:"absolute",left:30,borderRadius:100,}} source={{uri:"https://source.unsplash.com/random/500x200"}}/>
            </TouchableOpacity>
                    ),})
    });

    function renderInputToolbar (props) {
            return(
              <InputToolbar
                  {...props}
                  containerStyle={{backgroundColor:"#666",
                      marginHorizontal:0,borderTopEndRadius:15,borderTopStartRadius:15,}}
              />
            );
    }
    function renderBubble (props) {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#3f3d56'
                    },
                    left:{
                        backgroundColor:'#6C63FF'
                    }

                }}
            />
        )
    }
  useEffect(() => {
    navigation.setOptions({title: route.params.title});
    return db
        .collection(`/chats/${chat.id}/messages/`)
        .orderBy('createdAt', 'desc')
        .onSnapshot(async (snap) => {
          const msgs = snap.docs.map(d => ({
            ...d.data(),
            _id: d.id,
            createdAt: d.data().createdAt.toDate(),
          }));
          for (let message of msgs) {
            message.user = await usersStore.getData(message.sender);
          }
          setMessages(() => msgs);
        });
  }, []);

  const onSend = useCallback(async (messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    let messageDoc;
    for (let message of messages) {
      messageDoc = await db.collection(`/chats/${chat.id}/messages/`).add({
        text: message.text,
        sender: message.user._id,
        createdAt: message.createdAt,
      });
    }

    if (messages[messages.length - 1]) {
      await db.doc(`/chats/${chat.id}`).update({
        lastMessage: {
          id: messageDoc.id,
          text: messages[messages.length - 1].text,
          sender: messages[messages.length - 1].user._id,
          createdAt: messages[messages.length - 1].createdAt,
        },
        lastMessageDate: messages[messages.length - 1].createdAt,
      });
    }
  }, [])

  // todo: fix current user id
  return (
      <View style={styles.container}>
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
              _id: "LkYParmtrmR8VOVxX5EG",
            }}
            renderBubble={renderBubble}
            renderInputToolbar={renderInputToolbar}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
