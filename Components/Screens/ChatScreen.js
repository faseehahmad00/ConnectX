import React from 'react';
import {TouchableOpacity,StyleSheet,View} from "react-native";
import { Icon,Button,Container, Text} from 'native-base';
import { StatusBar } from 'expo-status-bar';

export default function ChatScreen({ navigation }) {
    return (
            <View style={styles.container}>
            <StatusBar backgroundColor="#000000" style='light' />
                <View style={styles.body}>
                <TouchableOpacity onPress={()=>navigation.navigate('Username')}>
                <Text style={styles.bodytext}>
                    All Chats here-- (click for chat)!
                </Text>
                </TouchableOpacity>
           </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    btn:{
        flex:1,
        margin:2,
        backgroundColor:"#000000",
    },
    title:{
        fontSize:22,
        fontWeight:"bold",
        marginLeft:10,
        flex:7,
        color:"#ffffff",
    },
    body:{
        flex:0.95,
        backgroundColor:"#666666",
        alignItems: "center",
    },
    bodytext:{
        paddingTop:250,
        fontSize:22,
        fontWeight:"bold",
        marginLeft:10,
        color:"#DDDDDD",
    },

});