import React from 'react';
import {TouchableOpacity,StyleSheet,View} from "react-native";
import { Icon,Button,Text} from 'native-base';



export default function ChatScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.bodytext}>
                    This is individual Chat !
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
    title:{
        fontSize:22,
        fontWeight:"bold",
        marginLeft:10,
        flex:7,
        color:"#ffffff",
    },
    titlebox:{
        flexDirection:"row",
        flex:0.05,
        justifyContent:"flex-start",
        backgroundColor:"#000000",
    },
    body:{
        flexDirection: "row",
        flex:0.95,
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
