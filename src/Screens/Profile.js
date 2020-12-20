import React from "react";
import {Text,View,StyleSheet} from "react-native";


export default function Profile(){
    return(
            <View style={styles.container}>
                <Text> this is profile screen</Text>
            </View>

    );

};

const styles = StyleSheet.create({
   container:{
      flex:1,
      backgroundColor:"#444",
       justifyContent:"center",
       alignItems:"center",
   } ,


});