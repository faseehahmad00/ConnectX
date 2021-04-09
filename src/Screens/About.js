import React from "react";
import {TouchableOpacity,Text,View,StyleSheet,Image} from "react-native";

export default function About({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.textbody}>
                <Text style={styles.text}>
                  ConnectX is an interactive chatting application developed by:
                </Text>
                <Text style={styles.nametext}>
                    => Faseeh Ahmad
                </Text>
                <Text style={styles.text}>
                    Published and distributed under MIT License for public use.
                </Text>
            </View>
            <View style={styles.bodycenter}>
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('License')}>
                <Text style={{fontSize:22,color:'red'}}>
                    LICENSE
                </Text>
            </TouchableOpacity>
            </View>
            <View style={styles.bodyend}>
                <Text style={{color:'red',fontSize: 18,marginLeft:10,marginBottom:2,textAlign:"center"}}>
                    Copyright (c) 2020
                </Text>
                {/*<Text style={{color:'red',fontSize: 18,marginLeft:10,marginBottom:2,textAlign:"center"}}>*/}
                {/*    Faseeh Ahmad & Abdul Wali*/}
                {/*</Text>*/}
            </View>
        </View>

    );

};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f5f5f5",
    } ,
    textbody:{
        justifyContent:"flex-start",
        flex:0.4,
        backgroundColor: '#f5f5f5',
        marginRight:10,
        marginLeft: 5,
    },
    text:{
        marginTop:10,
        color:"black",
        fontSize:20,
        fontWeight:"bold",
        marginLeft:10,
        textAlign:"justify",
    },
    nametext:{
        marginTop:10,
        color:"goldenrod",
        fontSize:20,
        fontWeight: 'bold',
        marginLeft:10,
        textAlign:"justify",
    },
    btn:{
        alignSelf:"center",
    },
    bodycenter:{
        marginTop:50,
        flex:0.55,
        flexDirection:'column',
    },
    bodyend:{
        flex:0.05,
        backgroundColor:"#f5f5f5",
    }

});