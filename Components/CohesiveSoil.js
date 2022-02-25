import { View, Text ,StyleSheet,TextInput} from 'react-native'
import React , {useState} from 'react'

export default function CohesiveSoil() {
    const [Wl,setWl] = useState(0);
    const [ρs,setρs] = useState(0);
    const [e,sete] = useState(0);
  return (
    <View>
        <View style={styles.header}>
            <Text style={styles.title}>CohesiveSoil</Text>
        </View>  
        <View>
            <View style={styles.box}>
            <Text style={styles.text}>Enter Liquid Limit(%)</Text>
            <TextInput
            style={styles.input}
            keyboardType='numeric'
            placeholder='e.g. 30 '
            onChangeText={(val)=>setWl(val)}
            />
            </View>
            <View style={styles.box}>
            <Text style={styles.text}>Enter Solid grain density(Kg/m3)</Text>
            <TextInput
            style={styles.input}
            keyboardType='numeric'
            placeholder='e.g. 2700'
            onChangeText={(val)=>setρs(val)}
            />
            </View>
            <View style={styles.box}>
            <Text style={styles.text}>Enter Void ratio</Text>
            <TextInput
            style={styles.input}
            keyboardType='numeric'
            placeholder='e.g. 0.6'
            onChangeText={(val)=>sete(val)}
            />
            </View>
        </View>
        <Text style={styles.text}>Given Soil sample have => Wl: {Wl}%,ρs: {ρs}kg/m3 and e: {e} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    text:{
        paddingLeft:10
    },
    title:{
        fontWeight:'bold',
        color:'red'
    },
    header:{
        alignItems: 'center',
    },
    input:{
        borderWidth:1,
        borderColor:'black',
        padding:8,
        margin: 10,
    },
    box:{
        borderColor:'red'
    }
})