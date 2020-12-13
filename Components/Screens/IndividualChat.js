import React,{useState} from 'react';
import {TextInput,TouchableOpacity,StyleSheet,View} from "react-native";
import { Icon,Button,Text} from 'native-base';
import { MessageList } from 'react-chat-elements/native';
import IndividualChatData from '../../Data/IndividualChatData';

export default function ChatScreen() {
    let [data,setdata] =useState(IndividualChatData);
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <MessageList dataSource={IndividualChatData}/>
            </View>
            <View style={styles.inputview}>
                <TextInput style={styles.input}
                defaultValue='Enter Meaage Here...'
                />
                <Button iconLeft dark>
                    <Icon name='paper-plane' onPress={()=>setdata(IndividualChatData.push(   {
                        position: 'left',
                        type: 'text',
                        text: 'new message',
                        date: new Date(),
                    }))}/>
                </Button>
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
        flex:0.93,
        backgroundColor:"#666666",
        alignItems: "center",
    },
    inputview:{
        flexDirection:"row",
        flex:0.07,
        backgroundColor:"#000000",

    },
    input:{
        flex:1,
        backgroundColor:"#000000",
        color:"#fff",
    },



});
