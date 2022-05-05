import { View, Text, Picker, Button ,StyleSheet,TextInput, Alert} from 'react-native'
import React , {useState} from 'react'
import {GChartGranular} from './GChartGranular'

export default function GranularSoil() {
    
    const [selectedValue2, setSelectedValue2] = useState({type:"Granular soil",ac : 0.01,Cu:9.8,D10:0.0004,e:0.72,m:0.102});
    const [seeGraph,setSeeGraph] = useState('0');
    

    function notSeeGraph()
    {
        setSeeGraph('1');
    };

        return (
            <View>
                {(seeGraph=='0')?
                    <View>
                    <View style={styles.header}>
                        <Text style={styles.title}>Granular Soil</Text>
                    </View>  
                    <View>
                        <View style={styles.box}>
                            <Text style={styles.text}>Enter Coefficient of uniformity,Cu</Text>
                            <TextInput
                            style={styles.input}
                            keyboardType='numeric'
                            placeholder='e.g. 9.8 '
                            onChangeText={(val)=>setSelectedValue2({...selectedValue2,Cu:val,m:1/val})}
                            />
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.text}>Enter Dia. corresponding to 10% passing on the cumulative grain-size 
distribution curve (cm),D10</Text>
                            <TextInput
                            style={styles.input}
                            keyboardType='numeric'
                            placeholder='e.g. 0.0004'
                            onChangeText={(val)=>setSelectedValue2({...selectedValue2,D10:val})}
                            />
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.text}>Enter Void ratio</Text>
                            <TextInput
                            style={styles.input}
                            keyboardType='numeric'
                            placeholder='e.g. 0.72'
                            onChangeText={(val)=>setSelectedValue2({...selectedValue2,e:val})}
                            />
                        </View>
                    </View>

                    <Text style={styles.text}>Given Soil sample have = Cu: {selectedValue2.Cu}%,D10: {selectedValue2.D10}kg/m3 and e: {selectedValue2.e} </Text>
                    <Text style={styles.text}>The value of m and ac is  : {selectedValue2.m} and {selectedValue2.ac} </Text>
                    <View style={styles.button}>
                    
                  </View>
                  <Button
                    title="Calculate"
                    onPress={()=> setSeeGraph('1')}
                   />
                   
                </View>
    
                :
                <View> 
                    <GChartGranular data={selectedValue2}/>
                    <Button 
                    title='back'
                     onPress={()=> setSeeGraph('0')} 
                    />
                </View>    
                
                }
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
    picker:{
        borderWidth:1,
        borderColor:'black',
        padding:8,
        margin: 10,
        height: 50,
        width : 350
    },
    box:{
        borderColor:'red'
    }
});