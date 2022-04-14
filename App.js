import { StyleSheet, Text, View ,Button, Alert,TextInput} from 'react-native';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CohesiveSoil from './Components/CohesiveSoil';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Header/> */}
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
      <Text>Granular function</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  // const [count,setcount] =useState(0);
  // const [selectedValue, setSelectedValue] = useState({type:"choose",m:0 , ac : 0,Wl:0,ξ:0,ρs:0,e:0});
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SWCC Prediction app!">
        <Stack.Screen name="SWCC Prediction app!" component={HomeScreen} />
        <Stack.Screen name="Cohesive" component={Cohesive} />
        <Stack.Screen name="Granular" component={Granular} />
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
  }
});
