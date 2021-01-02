import React , {useRef} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";



export default function Settings({navigation}) {
    return (
        <View style={styles.container}>

            <View style={styles.body}>
                <TouchableOpacity style={styles.profilecard} onPress={()=>navigation.navigate('Profile')}>
                    <Ionicons style={[styles.img,{color:'blue'}]} name="person-outline"/>
                    <View style={{flex: 0.7, justifyContent: 'center', alignItems: 'flex-start',}}>
                        <Text style={styles.profiletext}>Profile</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profilecard} onPress={()=>navigation.navigate('About')}>
                    <Ionicons style={[styles.img,{color:'green'}]} type="Ionicons" name="information-circle-outline"/>
                    <View style={{flex: 0.7, justifyContent: 'center', alignItems: 'flex-start',}}>
                        <Text style={styles.profiletext}>About</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profilecard} onPress={()=>navigation.navigate('License')}>
                    <Ionicons style={[styles.img,{color:'black'}]} name="newspaper-outline"/>
                    <View style={{flex: 0.7, justifyContent: 'center', alignItems: 'flex-start',}}>
                        <Text style={styles.profiletext}>License</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profilecard} onPress={()=>navigation.navigate('Login')}>
                    <Ionicons style={[styles.img,{color:'red'}]} name="log-out-outline"/>
                    <View style={{flex: 0.7, justifyContent: 'center', alignItems: 'flex-start',}}>
                        <Text style={styles.profiletext}>Log Out</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    body: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    profilecard: {
        flexDirection: "row",
        flex: 0.08,
        marginHorizontal:2,
        backgroundColor: "#fff",
        borderBottomWidth:0.5,
        borderColor:"grey",
        alignItems:'center',
        borderRadius: 10,
    },
    img: {
        fontSize:32,
        flex: 0.15,
        backgroundColor: "#fff",
        borderRadius: 100,
        marginLeft: 25,
    },
    profiletext: {
        // alignSelf: 'center',
        fontSize: 26,
        color:'#000',
        fontWeight: 'bold',
    }
});
