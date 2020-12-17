import React from 'react';
import {TouchableOpacity,StyleSheet,View} from "react-native";
import { Icon,Button,Text} from 'native-base';
import Constants from "expo-constants";

export default function Settings({navigation}) {
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
                <View style={styles.profilecard}/>
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
        flex:0.92,
        backgroundColor:"#666666",
    },
    profilecard:{
        flex:0.2,
        margin:3,
      backgroundColor:"#000",

    },


});
