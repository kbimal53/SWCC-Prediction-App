import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>SWCC Prediction app!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:50,
        paddingTop:14,
        backgroundColor:'coral'
    },
    title:{
        textAlign:'center',
        color:'black',
        fontSize:20,
        fontWeight:'bold'
    }
});