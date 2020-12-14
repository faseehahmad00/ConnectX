import React from 'react';
import {Image,FlatList,TouchableOpacity,StyleSheet,View} from "react-native";
import { Icon,Button,Container, Text} from 'native-base';
import { StatusBar } from 'expo-status-bar';
import { ChatItem } from 'react-chat-elements/native';
import ChatData from "../../Data/ChatData";
import IndividualChatData from "../../Data/IndividualChatData";

export default function ChatScreen({ navigation }) {
    return (
            <View style={styles.container}>
            <StatusBar backgroundColor="#000000" style='light' />
            <View style={styles.body}>
                <FlatList
                    data={ChatData}
                    keyExtractor={item => item.title}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.chatitem} onPress={()=>navigation.navigate('Username',{params:IndividualChatData})}>
                        <ChatItem
                            avatar={require('../../assets/favicon.png')}
                            alt={item.alt}
                            title={item.title}
                            subtitle={item.subtitle}
                            date={item.date}
                            unread={item.unread}
                            statusColor={item.statusColor}/>
                        </TouchableOpacity>
                    )}/>
            </View>
</View>
    );}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    body:{
        flex:1,
        backgroundColor:"#666666",
    },
    chatitem:{
        marginVertical:1,
    },
    img:{
        flex:1,
    }


});
