import { View, Text, Picker, Button ,StyleSheet,TextInput, Alert} from 'react-native'
import React , {useState} from 'react'
import {GChartGranular} from './GChartGranular'
import { GChartCoarseGrained } from './GChartCoarseGrained';

export default function CoarseGrainedSoil() {
    
    const [selectedValue, setSelectedValue] = useState({type:"Coarse Grained soil",α : 1.4,ρd:1.4,Gs:2.67,Ts:72.75});
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
                        <Text style={styles.title}>Coarse Grained Soil</Text>
                    </View>  
                    <View>
                        <View style={styles.box}>
                            <Text style={styles.text}>Enter Solid grain density,ρd(g/cc)</Text>
                            <TextInput
                            style={styles.input}
                            keyboardType='numeric'
                            placeholder='e.g. 1.4'
                            onChangeText={(val)=>setSelectedValue({...selectedValue,ρd:val})}
                            />
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.text}>Enter Specific Gravity,Gs</Text>
                            <TextInput
                            style={styles.input}
                            keyboardType='numeric'
                            placeholder='e.g. 2.67'
                            onChangeText={(val)=>setSelectedValue({...selectedValue,Gs:val})}
                            />
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.text}>Enter Ts(milli Newton,mN)</Text>
                            <TextInput
                            style={styles.input}
                            keyboardType='numeric'
                            placeholder='e.g. 72.75'
                            onChangeText={(val)=>setSelectedValue({...selectedValue,Ts:val})}
                            />
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.text}>Enter α</Text>
                            <TextInput
                            style={styles.input}
                            keyboardType='numeric'
                            placeholder='e.g. 1.4'
                            onChangeText={(val)=>setSelectedValue({...selectedValue,α:val})}
                            />
                        </View>
                    </View>

                    <Text style={styles.text}>Given Soil sample have = α : {selectedValue.α},ρd: {selectedValue.ρd}(g/cc), Ts: {selectedValue.Ts} and Gs: {selectedValue.Gs} </Text>
                    <View style={styles.button}>
                    
                  </View>
                  <Button
                    title="Calculate"
                    onPress={()=> setSeeGraph('1')}
                   />
                   
                </View>
    
                :
                <View> 
                    <GChartCoarseGrained data={selectedValue}/>
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