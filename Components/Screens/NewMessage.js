import React from 'react';
import {TouchableOpacity,StyleSheet,View} from "react-native";
import { Icon,Button,Container, Text} from 'native-base';
import {StatusBar} from "expo-status-bar";
import Constants from 'expo-constants';

export default function NewMessgae({navigation}) {
    return (
        <View style={styles.container}>
            <StatusBar style='light'/>
            <View style={styles.body}>
                <Text style={styles.bodytext}>
                    User Profile appears here !
                </Text>

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
    body:{
        flexDirection: "row",
        flex:1,
        backgroundColor:"#666666",
        alignItems: "center",
    },
    bodytext:{
        fontSize:22,
        fontWeight:"bold",
        marginLeft:10,
        flex:7,
        color:"#DDDDDD",
        textAlign: "center",
    },

});
