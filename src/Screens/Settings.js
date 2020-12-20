import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {Button, Icon, Text} from 'native-base';
import Constants from "expo-constants";

export default function Settings({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.titlebox}>
                <TouchableOpacity style={styles.btn}>
                    <Button icon small dark rounded onPress={() => navigation.openDrawer()}>
                        <Icon name='menu'/>
                    </Button>
                </TouchableOpacity>
                <Text style={styles.title}>Settings</Text>
            </View>
            <View style={styles.body}>
                <TouchableOpacity style={styles.profilecard} onPress={()=>navigation.navigate('Profile')}>
                    <Icon style={styles.img} name="person"/>
                    <View style={{flex: 0.7, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={styles.profiletext}>Profile</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profilecard} onPress={()=>navigation.navigate('License')}>
                    <Icon style={styles.img} name="paper"/>
                    <View style={{flex: 0.7, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={styles.profiletext}>License</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profilecard} onPress={()=>navigation.navigate('About')}>
                    <Icon style={styles.img} type="Ionicons" name="information-circle-outline"/>
                    <View style={{flex: 0.7, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={styles.profiletext}>About</Text>
                    </View>
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
    btn: {
        flex: 1,
        margin: 2,
        backgroundColor: "#000000",
    },
    title: {
        paddingLeft: 5,
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
        flex: 7,
        color: "#ffffff",
    },
    titlebox: {
        marginTop: Constants.statusBarHeight,
        flexDirection: "row",
        flex: 0.08,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#000000",
    },
    body: {
        flex: 0.92,
        backgroundColor: "#666666",
    },
    profilecard: {
        flexDirection: "row",
        flex: 0.1,
        margin: 10,
        backgroundColor: "#888",
        borderRadius: 30,
    },
    img: {
        fontSize:60,
        flex: 0.15,
        backgroundColor: "#888",
        borderRadius: 100,
        marginLeft: 25,
    },
    profiletext: {
        alignSelf: 'center',
        fontSize: 35,
        fontWeight: 'bold',
    }


});
