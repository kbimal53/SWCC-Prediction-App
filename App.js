import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput} from 'react-native';

export default function App() {
  console.log(" executing");
  return (
    <View style={styles.container}>
      <Text>SWCC Prediction app!</Text>
      <TextInput  
          style={{height: 40,backgroundColor: 'azure', fontSize: 20}}  
          placeholder="State your name!"  
          
      />  
                
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
