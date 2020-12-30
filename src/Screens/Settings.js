import React , {useRef} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";



export default function Settings({navigation}) {
    return (
        <View style={styles.container}>

            <View style={styles.body}>
                <TouchableOpacity style={styles.profilecard} onPress={()=>navigation.navigate('Profile')}>
                    <Ionicons style={styles.img} name="person"/>
                    <View style={{flex: 0.7, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={styles.profiletext}>Profile</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profilecard} onPress={()=>navigation.navigate('About')}>
                    <Ionicons style={styles.img} type="Ionicons" name="information-circle-outline"/>
                    <View style={{flex: 0.7, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={styles.profiletext}>About</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profilecard} onPress={()=>navigation.navigate('License')}>
                    <Ionicons style={styles.img} name="newspaper"/>
                    <View style={{flex: 0.7, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={styles.profiletext}>License</Text>
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
        flex: 0.92,
        backgroundColor: "#fff",
    },
    profilecard: {
        flexDirection: "row",
        flex: 0.12,
        backgroundColor: "#fff",
        marginTop:10,
        borderBottomWidth:0.5,
        borderColor:"black",
    },
    img: {
        fontSize:60,
        flex: 0.15,
        backgroundColor: "#fff",
        color:'black',
        borderRadius: 100,
        marginLeft: 25,
    },
    profiletext: {
        alignSelf: 'center',
        fontSize: 35,
        color:'#000',
        fontWeight: 'bold',
    }
});
