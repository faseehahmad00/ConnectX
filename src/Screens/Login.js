import React from "react";
import {TouchableOpacity,ImageBackground, StyleSheet, Text, View} from "react-native";
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
                </View>
                <View style={styles.body}>
                    <View style={styles.bottom}>
                    <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('LoginManager')}>
                        <Icon name='logo-google' style={{color:'#ff8c00'}} />
                        <Text style={{color:'white',marginLeft: 10}}>Sign in with Google</Text>
                    </TouchableOpacity>
                    </View>
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
    bottom:{
      flex:0.08,
        flexDirection: 'row',
        marginBottom:20,

    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000"
    },
    btn:{
        flexDirection:'row',
        backgroundColor: '#000000',
        marginHorizontal:5,
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        height:50,
        borderRadius:100,
        borderColor:"#000",
        opacity:1,
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
