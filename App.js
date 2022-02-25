import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button, Alert,TextInput} from 'react-native';
import React,{useState,useEffect} from 'react';
import Header from './Components/header';
// import Graph from './Components/Graph';
import CohesiveSoil from './Components/CohesiveSoil';

export default function App() {
  const [count,setcount] =useState(0);
  
  return (
    <View style={styles.container}>
      <Header/>
      {/* <Graph/> */}
      <CohesiveSoil/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
