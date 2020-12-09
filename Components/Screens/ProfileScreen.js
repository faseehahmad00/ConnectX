import React from 'react';
import {TouchableOpacity,StyleSheet,View} from "react-native";
import { Icon,Button,Container, Text} from 'native-base';

export default function ChatScreen({navigation}) {
    return (
        <View style={styles.container}>

            <View style={styles.titlebox}>
                <TouchableOpacity style={styles.btn}>
                    <Button icon small dark rounded onPress={()=>navigation.openDrawer()}>
                        <Icon name='menu' />
                    </Button>
                </TouchableOpacity>
                <Text style={styles.title}>Profile</Text>
            </View>
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
    title:{
        paddingLeft:5,
        fontSize:20,
        fontWeight: "bold",
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
        backgroundColor:"#fff",
        alignItems: "center",
    },
    bodytext:{
        fontSize:22,
        fontWeight:"bold",
        marginLeft:10,
        flex:7,
        color:"#666666",
        textAlign: "center",
    },

});
