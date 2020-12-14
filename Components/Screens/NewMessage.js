import React from 'react';
import {TouchableOpacity, StyleSheet, View, FlatList} from "react-native";
import { Icon,Button,Container, Text} from 'native-base';
import {StatusBar} from "expo-status-bar";
import Constants from 'expo-constants';
import ChatData from "../../Data/ChatData";
import {ChatItem} from "react-chat-elements/native";
import ContactData from "../../Data/ContactData";
export default function NewMessgae({navigation}) {
    return (
        <View style={styles.container}>
            <StatusBar style='light'/>
            <View style={styles.body}>
                <FlatList
                    data={ContactData}
                    keyExtractor={item => item.title}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.chatitem} >
                            <ChatItem
                                avatar={require('../../assets/favicon.png')}
                                alt={item.alt}
                                title={item.title}
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
    body:{
        flexDirection: "row",
        flex:1,
        backgroundColor:"#666666",
        alignItems: "center",
    },
    chatitem:{
      marginVertical:1,
    },


});
