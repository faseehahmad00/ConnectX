import React, {useState, useCallback,useEffect} from 'react';
import {StyleSheet, View} from "react-native";
import {GiftedChat} from 'react-native-gifted-chat'
import IndividualChatData from "../Data/IndividualChatData";
// import {db} from '../firebase';
// import {usersStore} from "../usersStore";
//
// async function sendMessage(message, chatId) {
//     console.log(doc.id);
//     const doc = await db.collection(`/chats/${chatId}/messages/`).add({
//         text: message.text,
//         sender: message.user._id,
//         createdAt: message.createdAt,
//     });
//     console.log(doc.id);
// }

export default function IndividualChat({route,navigation}) {
    // navigation.setOptions(()=>{title:'hello'});
    const [messages, setMessages] = useState([]);
    // const {chat} = route.params;

    useEffect(() => {
        setMessages(IndividualChatData)
        navigation.setOptions({title:route.params.title});
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    // navigation.setOptions({title: chat.title});

    // db
    //     .collection(`/chats/${chat.id}/messages/`)
    //     .orderBy('createdAt', 'desc')
    //     .onSnapshot(async (snap) => {
    //         const msgs = snap.docs.map(d => ({
    //             ...d.data(),
    //             _id: d.id,
    //             createdAt: d.data().createdAt.toDate(),
    //         }));
    //         for (let message of msgs) {
    //             message.user = await usersStore.getData(message.sender);
    //         }
    //         setMessages(() => msgs);
    //     });
    //
    // const onSend = useCallback(async (messages = []) => {
    //     for (let message of messages) {
    //         console.log("started");
    //         const doc = await db.collection(`/chats/${chat.id}/messages/`).add({
    //             text: message.text,
    //             sender: message.user._id,
    //             createdAt: message.createdAt,
    //         });
    //         console.log("done");
    //     }
    //     setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    // }, [])
    //
    // console.log(messages);
    return (
        <View style={styles.container}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: "1",
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
});
