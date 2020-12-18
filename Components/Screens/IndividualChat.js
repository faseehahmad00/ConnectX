import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, View} from "react-native";
import {GiftedChat} from 'react-native-gifted-chat'
import IndividualChatData from "../../Data/IndividualChatData";

export default function ChatScreen() {
    // componentDidMount(){
    //     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    // }
    //
    // componentWillUnmount(){
    //     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    // }
    //
    // handleBackButton(){
    //     ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
    //     return true;
    // }

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages(IndividualChatData)
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
        backgroundColor: '#777777',
    },


});
