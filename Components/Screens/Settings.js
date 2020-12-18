import React from 'react';
import {Image,TouchableOpacity,StyleSheet,View} from "react-native";
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
                <TouchableOpacity style={styles.profilecard}>
                    <Image style={styles.img} source={require('../../assets/avtr.png')}/>
                    <View style={{flex:0.7,justifyContent:'center',alignItems: 'center',}}>
                    <Text style={styles.profiletext}>Profile</Text>
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
        flexDirection: "row",
        flex:0.15,
        margin:5,
        backgroundColor:"#888",
        borderRadius: 30,
    },
    img:{
        flex:0.3,
        backgroundColor:"#000",
        height:90,
        width:90,
        borderRadius:100,
        marginHorizontal:10,
        marginVertical:5,
    },
    profiletext:{
        alignSelf: 'center',
        fontSize: 35,
        fontWeight: 'bold',
    }



});
