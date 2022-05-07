import { View, Text, Picker, Button ,StyleSheet,TextInput, Alert} from 'react-native'
import React , {useState} from 'react'
import {GChartGranular} from './GChartGranular'
import { GChartCoarseGrained } from './GChartCoarseGrained';

export default function CoarseGrainedSoil() {
    
    const [selectedValue, setSelectedValue] = useState({a:0,b:0,c:0,d:0,e:0,f:0,g:0,type:"Coarse Grained soil",α : 1.4,ρd:1.4,Gs:2.67,Ts:72.75});
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
                            style={styles.mydata}
                            keyboardType='numeric'
                            placeholder='e.g. 1.4'
                            onChangeText={(val)=>setSelectedValue({...selectedValue,ρd:val})}
                            />
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.text}>Enter Specific Gravity,Gs</Text>
                            <TextInput
                            style={styles.mydata}
                            keyboardType='numeric'
                            placeholder='e.g. 2.67'
                            onChangeText={(val)=>setSelectedValue({...selectedValue,Gs:val})}
                            />
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.text}>Enter Ts(milli Newton,mN)</Text>
                            <TextInput
                            style={styles.mydata}
                            keyboardType='numeric'
                            placeholder='e.g. 72.75'
                            onChangeText={(val)=>setSelectedValue({...selectedValue,Ts:val})}
                            />
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.text}>Enter α</Text>
                            <TextInput
                            style={styles.mydata}
                            keyboardType='numeric'
                            placeholder='e.g. 1.4'
                            onChangeText={(val)=>setSelectedValue({...selectedValue,α:val})}
                            />
                        </View>
                        <View >
                            <View style={styles.wrapper}>
                                <Text>Enter %finer corrosponding to particle size(mm):</Text>
                                <View style={{flexDirection:"row"}}>
                                    <View style={{flex:1}}>
                                        <Text>0.04</Text>
                                        <TextInput placeholder="15=15%" keyboardType='numeric' onChangeText={(val)=>setSelectedValue({...selectedValue,a:val})} style={{justifyContent: 'flex-start',height:40,borderWidth:1}} />
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text>0.15</Text>
                                        <TextInput placeholder="15=15%" keyboardType='numeric' onChangeText={(val)=>setSelectedValue({...selectedValue,b:val})} style={{justifyContent: 'flex-end',height:40,borderWidth:1}} />
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text>0.2</Text>
                                        <TextInput placeholder="15=15%" keyboardType='numeric' onChangeText={(val)=>setSelectedValue({...selectedValue,c:val})} style={{justifyContent: 'flex-start',height:40,borderWidth:1}} />
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text>0.3</Text>
                                        <TextInput placeholder="15=15%" keyboardType='numeric' onChangeText={(val)=>setSelectedValue({...selectedValue,d:val})} style={{justifyContent: 'flex-start',height:40,borderWidth:1}} />
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text>0.42</Text>
                                        <TextInput placeholder="15=15%" keyboardType='numeric' onChangeText={(val)=>setSelectedValue({...selectedValue,e:val})} style={{justifyContent: 'flex-start',height:40,borderWidth:1}} />
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text>0.6</Text>
                                        <TextInput placeholder="15=15%" keyboardType='numeric' onChangeText={(val)=>setSelectedValue({...selectedValue,f:val})} style={{justifyContent: 'flex-start',height:40,borderWidth:1}} />
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text>1</Text>
                                        <TextInput placeholder="15=15%" keyboardType='numeric' onChangeText={(val)=>setSelectedValue({...selectedValue,g:val})} style={{justifyContent: 'flex-start',height:40,borderWidth:1}} />
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>

                    <Text style={styles.text}>Given Soil sample have = α : {selectedValue.α}, ρd: {selectedValue.ρd}(g/cc), Ts: {selectedValue.Ts} and Gs: {selectedValue.Gs} </Text>
                    {/* <Text>a:{selectedValue.a}, b:{selectedValue.b}</Text> */}
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
    mydata:{
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
    wrapper: {
        padding: 10,
        backgroundColor: '#FFFFFF'
    },
    box:{
        borderColor:'red'
    }
});