import { StyleSheet, Text, View ,Button, Alert,TextInput} from 'react-native';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CohesiveSoil from './Components/CohesiveSoil';
import GranularSoil from './Components/GranularSoil';
import CoarseGrainedSoil from './Components/CoarseGrainedSoil';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.model}>
        <Text style={styles.title}>Modified Kovacs Model</Text>
        <View style={styles.button}>
          <Button
            title="Plastic/Cohesive Soil"
            onPress={() => navigation.navigate('Cohesive')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Granular Soil"
            onPress={() => navigation.navigate('Granular')}
          />
        </View>
      </View>
      
      <View style={styles.model}>
        <Text style={styles.title}>Arya-Paris Model</Text>
        <Button
            title="Coarse Grained Soil"
            onPress={() => navigation.navigate('Coarse')}
          />
      </View>
        
    </View>
  );
}

function Cohesive() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CohesiveSoil/>
    </View>
  );
}

function Granular() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <GranularSoil/>
    </View>
  );
}
function Coarse() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CoarseGrainedSoil/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  console.reportErrorsAsExceptions = false;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SWCC Prediction app!">
        <Stack.Screen name="SWCC Prediction app!" component={HomeScreen} />
        <Stack.Screen name="Cohesive" component={Cohesive} />
        <Stack.Screen name="Granular" component={Granular} />
        <Stack.Screen name="Coarse" component={Coarse} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
   
  },
  button:{
    margin:10
  },
  model:{
    margin:10
  },
  title:{
    padding:10,
    fontSize:25,
  }
});
