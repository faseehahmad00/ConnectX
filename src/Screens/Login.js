import React from "react";
import {Image,TouchableOpacity,StyleSheet, Text, View} from "react-native";
import {StatusBar} from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function Login ({navigation}) {
    return (
        <View style={styles.container}>
            <StatusBar style='dark' backgroundColor={'#fff'}/>
                <View style={styles.head}>
                    <Text style={styles.headtext}>ConnectX</Text>
                </View>
                <View style={styles.body}>
                    <View style={{flex:0.7,justifyContent:'center'}}>
                    <Image style={styles.img} source={require('../assets/undraw2.png')}/>
                    </View>
                    <View style={{flex:0.3}}>
                        <Text style={styles.welcometext}>WELCOME !</Text>
                        <Text style={styles.descriptiontext}>ConnectX is an interactive chatting app.</Text>
                        <Text style={styles.descriptiontext}>Please Signin to use Services</Text>

                    </View>
                    </View>
            <View style={styles.bottom}>
                <TouchableOpacity 
                activeOpacity={0.9}
                style={styles.btn} onPress={()=>navigation.navigate('LoginManager')}>
                    <Ionicons name='logo-google' style={{color:'#6C63FF',fontSize:30}} />
                    <Text style={{color:'white', marginLeft: 15}}>Sign in with Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent:'flex-start',
    },
    head:{
        justifyContent:"center",
        flex:0.2,
        backgroundColor:"#fff",
    },
    body:{
        flex:0.7,
        backgroundColor:'#fff',

    },
    bottom:{
        flex:0.1,
        flexDirection: 'row',
        backgroundColor:"#fff",
        alignItems:'center',
    },
    btn:{
        flexDirection:'row',
        backgroundColor: '#3f3d56',
        marginHorizontal:18,
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        height:50,
        borderRadius:100,
        borderColor:"#000",
        opacity:1,
    },
    headtext:{
        color: "#6C63FF",
        fontFamily:"sans-serif-medium",
        fontSize:40,
        fontWeight: "bold",
        opacity:1,
        textAlign: "center",
        marginBottom: 5,
    },
    welcometext:{
        color: "#3f3d56",
        fontFamily:"sans-serif-medium",
        fontSize:20,
        opacity:1,
        textAlign: "center",
        marginBottom:15,
    },
    descriptiontext:{
        color: "#3f3d56",
        fontFamily:"sans-serif-medium",
        fontSize:16,
        opacity:1,
        textAlign: "center",
    },
    img:{
        height:400,
        width:400,
        resizeMode:"contain",
    }
});
