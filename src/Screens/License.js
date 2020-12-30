import React from "react";
import {ScrollView,Text,View,StyleSheet} from "react-native";
import Constants from "expo-constants";

export default function License(){
    return(
        <View style={styles.container}>
            <ScrollView style={styles.body}>
            <Text style={{color:'black',fontSize: 25,marginTop: 10,marginLeft:10,fontWeight:"bold",textAlign: "center"}}>
                MIT License
            </Text>
            <Text style={{color:'red',fontSize: 18,marginLeft:10,marginTop:30,}}>
                Copyright (c) 2020 Faseeh Ahmad
           </Text>
            <Text style={styles.text}>
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
            </Text>
            <Text style={styles.text}>
                --> The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.
            </Text>
            <Text style={styles.text}>
                --> the software is provided "as is", without warranty of any kind, express or implied
                , including but not limited to the warranties of merchantability, fitness for a
                particular purpose and non-infringement. in no event shall the authors or copyright
                holders be liable for any claim, damages or other liability, whether in an action of
                contract, tort or otherwise, arising from, out of or in connection with the software
                or the use or other dealings in the software.
            </Text>

        </ScrollView>
            </View>

    );

};

const styles = StyleSheet.create({
    container:{
        // marginTop: Constants.statusBarHeight,
        flex:1,
        backgroundColor:"#f5f5f5",
     } ,
    body:{
        flex:1,
        marginRight:10,
        marginLeft: 5,
        backgroundColor: '#f5f5f5',
    },
    text:{
        marginTop:15,
        color:"#000000",
        fontFamily:'serif',
        fontSize:17,
        fontWeight:"bold",
        marginHorizontal:10,
        textAlign:"justify",

    }



});