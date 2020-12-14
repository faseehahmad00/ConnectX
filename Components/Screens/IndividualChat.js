import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, View} from "react-native";
import {GiftedChat} from 'react-native-gifted-chat'

export default function ChatScreen({route}) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages(route.params.params)
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <View style={styles.container}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 2,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#666666',
    },


});
