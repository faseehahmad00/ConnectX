import React from 'react';
import {TouchableOpacity,StyleSheet,View} from "react-native";
import { Icon,Button,Text} from 'native-base';
import Constants from "expo-constants";

export default function ChatScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.titlebox}>
                <TouchableOpacity style={styles.btn}>
                    <Button icon small dark rounded onPress={()=>navigation.openDrawer()}>
                        <Icon name='menu' />
                    </Button>
                </TouchableOpacity>
                <Text style={styles.title}>Settings</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.bodytext}>
                    This is Settings TAB !
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
    stbar:{
        flex:0.05,
        backgroundColor:"#000000",
    },
    btn:{
        flex:1,
        margin:2,
        backgroundColor:"#000000",
    },
    title:{
        paddingLeft:5,
        fontSize:20,
        fontWeight:"bold",
        marginLeft:10,
        flex:7,
        color:"#ffffff",
    },
    titlebox:{
        marginTop:Constants.statusBarHeight,
        flexDirection:"row",
        flex:0.08,
        alignItems: "center",
        justifyContent:"flex-start",
        backgroundColor:"#000000",
    },
    body:{
        flexDirection: "row",
        flex:0.92,
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
