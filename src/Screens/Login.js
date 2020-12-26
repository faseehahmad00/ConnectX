import React from "react";
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import {Button, Icon} from 'native-base';
import {StatusBar} from 'expo-status-bar';

const image = require('../assets/login.jpg')

export default function Login ({navigation}) {
    return (
        <View style={styles.container}>
            <StatusBar style='light'/>
            <ImageBackground source={image} style={styles.imageContainer}>
                <View style={styles.head}>
                    <Text style={styles.headtext}>Welcome To ConnectX</Text>
                    {/*<Text style={styles.headtext}>ConnectX</Text>*/}
                </View>
                <View style={styles.body}>
                    <Button style={styles.btn} icon block large dark onPress={()=>navigation.navigate('LoginManager')}>
                        <Icon name='logo-google' />
                        <Text style={{color:'white'}}>Sign in with Google</Text>
                    </Button>
                </View>

            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent:'flex-start',
    },
    imageContainer: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-start",
    },
    head:{
        justifyContent:"center",
        flex:0.3,
    },
    body:{
        flex:0.7,
        justifyContent: "flex-end",
        alignItems:"center",

    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000"
    },
    btn:{
        backgroundColor: '#000',
        marginBottom:20,
        marginHorizontal:5,
        alignItems:"center",
        flex:0.05,
        borderRadius:100,
    },
    headtext:{
        color: "#ff8c00",
        fontSize:32,
        fontWeight: "bold",
        marginLeft:8,
        opacity:1,
        textAlign: "center",
    }
});