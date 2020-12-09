import React from 'react';
import { AppLoading } from 'expo';
import {TouchableOpacity,StyleSheet,View} from "react-native";
import { Icon,Button,Container, Text} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.titlebox}>
      <TouchableOpacity style={styles.btn}>
        <Button icon small dark rounded>
        <Icon name='menu' />
        </Button>
      </TouchableOpacity>
      <Text style={styles.title}>ConnectX</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodytext}>
          Chats appear here !
        </Text>

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
    fontSize:22,
    fontWeight:"bold",
    marginLeft:10,
    flex:7,
    color:"#ffffff",
  },
  titlebox:{
  flexDirection:"row",
   flex:0.05,
   justifyContent:"flex-start",
   backgroundColor:"#000000",
  },
  body:{
    flexDirection: "row",
   flex:0.95,
   backgroundColor:"#fff",
    alignItems: "center",
  },
  bodytext:{
    fontSize:22,
    fontWeight:"bold",
    marginLeft:10,
    flex:7,
    color:"#666666",
    textAlign: "center",
  },

});
