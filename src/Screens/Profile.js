import React from "react";
import {Text,Image, StyleSheet, TextInput, View} from "react-native";


export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.imgcontainer}>
                <View style={styles.avtr}>
                    <Image style={styles.img} source={require("../assets/avtr2.png")}/>
                </View>
            </View>
            <View style={styles.details}>
                <Text style={{color:'goldenrod',textAlign:"center",fontSize:22,fontWeight:"bold"}}>
                    TEST USER
                </Text>
            </View>
        </View>

    )};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',

    },
    imgcontainer: {
        flex: 0.35,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    avtr: {
        flex: 0.3,
        backgroundColor: "grey",
        alignItems: "center",
        borderRadius: 100,
        borderColor: "grey",
    },
    img: {
        position: 'relative',
        paddingTop: 0,
        paddingBottom: 0,
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        height: 110,
        width: 100,
    },
    details: {
        flex: 0.1,
        backgroundColor: "#f5f5f5",

    },
    status:{
        backgroundColor:"black",
        flex:0.2,
      flexDirection: 'row',
        marginTop:20,
    },



});