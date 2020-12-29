import React , {useRef} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";



export default function Settings({navigation}) {
    return (
        <View style={styles.container}>

            <View style={styles.body}>
                <View style={{flex:0.002,backgroundColor:'#444',marginHorizontal:20,}}/>
                <TouchableOpacity style={styles.profilecard} onPress={()=>navigation.navigate('Profile')}>
                    <Ionicons style={styles.img} name="person"/>
                    <View style={{flex: 0.7, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={styles.profiletext}>Profile</Text>
                    </View>
                </TouchableOpacity>
                <View style={{flex:0.002,backgroundColor:'#444',marginHorizontal:20,}}/>
                <TouchableOpacity style={styles.profilecard} onPress={()=>navigation.navigate('About')}>
                    <Ionicons style={styles.img} type="Ionicons" name="information-circle-outline"/>
                    <View style={{flex: 0.7, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={styles.profiletext}>About</Text>
                    </View>
                </TouchableOpacity>
                <View style={{flex:0.002,backgroundColor:'#444',marginHorizontal:20,}}/>
                <TouchableOpacity style={styles.profilecard} onPress={()=>navigation.navigate('License')}>
                    <Ionicons style={styles.img} name="newspaper"/>
                    <View style={{flex: 0.7, justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={styles.profiletext}>License</Text>
                    </View>
                </TouchableOpacity>
                <View style={{flex:0.002,backgroundColor:'#444',marginHorizontal:20,}}/>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    body: {
        marginTop:30,
        flex: 0.92,
        backgroundColor: "#000",
    },
    profilecard: {
        flexDirection: "row",
        flex: 0.12,
        marginVertical:8,
        backgroundColor: "#000",
    },
    img: {
        fontSize:60,
        flex: 0.15,
        backgroundColor: "#000",
        color:'white',
        borderRadius: 100,
        marginLeft: 25,
    },
    profiletext: {
        alignSelf: 'center',
        fontSize: 35,
        color:'white',
        fontWeight: 'bold',
    }
});
