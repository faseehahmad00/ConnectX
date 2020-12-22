import React from "react";
import {TouchableOpacity,ScrollView,Text,View,StyleSheet,Image} from "react-native";

export default function About({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.textbody}>
                <Text style={styles.text}>
                  ConnectX is an interactive chatting application developed by:
                </Text>
                <Text style={styles.nametext}>
                    -> Faseeh Ahmad

                </Text>
                <Text style={styles.nametext}>
                    -> Abdul Wali
                </Text>
                <Text style={styles.text}>
                    and distributed under MIT License for public use.
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
        backgroundColor:"#000",
    } ,
    textbody:{
        justifyContent:"center",
        flex:0.4,
        backgroundColor: '#000',
        marginRight:10,
        marginLeft: 5,
    },
    text:{
        marginTop:10,
        color:"white",
        fontSize:20,
        marginLeft:10,
        textAlign:"justify",
    },
    nametext:{
        marginTop:10,
        color:"goldenrod",
        fontSize:20,
        marginLeft:10,
        textAlign:"justify",
    },
    btn:{
        backgroundColor:"black",
        alignSelf:"center",
    },
    bodycenter:{
        marginTop:50,
        flex:0.55,
        flexDirection:'column',
    },
    bodyend:{
        flex:0.05,
        backgroundColor:"#000",
    }

});