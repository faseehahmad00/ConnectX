import React from 'react';
import {Image, FlatList, TouchableOpacity, StyleSheet, View} from "react-native";
import {StatusBar} from 'expo-status-bar';
import ChatItem from "../ChatItem";
import ChatData from "../../Data/ChatData";
import IndividualChatData from "../../Data/IndividualChatData";
import {Icon, Fab} from 'native-base';
import ContactData from "../../Data/ContactData";

export default function ChatScreen({navigation}) {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#000000" style='light'/>
            <View style={styles.body}>
                <FlatList
                    data={ChatData}
                    keyExtractor={item => item.title}
                    renderItem={({item}) => (
                        <TouchableOpacity style={styles.chatitem}
                                          onPress={() => navigation.navigate('Username', {params: IndividualChatData})}>
                            <ChatItem
                                avatar={require('../../assets/avtr2.png')}
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
