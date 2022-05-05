import { View, Text, Picker, Button ,StyleSheet,TextInput, Alert} from 'react-native'
import React , {useState} from 'react'
import  {GoogleCharts}  from './GoogleCharts'

export default function CohesiveSoil() {
    console.reportErrorsAsExceptions = false;
    const [selectedValue, setSelectedValue] = useState({type:"choose",m:0 , ac : 0,Wl:35.5,ρs:2650,e:0.438});
    const [seeGraph,setSeeGraph] = useState('0');
    function myfunction(val){
        if(val=="a")
        {
            setSelectedValue({...selectedValue,m:0.769,ac:0.01,type:"Coarse, uniform and relatively dense sand"})
        }
        else if(val=="b"){
            setSelectedValue({...selectedValue,m:0.388,ac:0.01,type:"Fine and dense sand"})
        }
        else if(val=="c"){
            setSelectedValue({...selectedValue,m:0.102,ac:0.01,type:"Tailings Sigmaa (silty material, coarse and loose)"})
        }
        else if(val=="d"){
            setSelectedValue({...selectedValue,m:0.029,ac:0.01,type:"Tailings Sigma mixed with 10% bentonite"})
        }
        else if(val=="e"){
            setSelectedValue({...selectedValue,m:3e-5,ac:7e-4,type:"Guadalix Red silty clay"})
        }
        else if(val=="f"){
            setSelectedValue({...selectedValue,m:3e-5,ac:7e-4,type:"Till"})
        }
        else if(val=="g"){
            setSelectedValue({...selectedValue,m:3e-5,ac:7e-4,type:"Indian Head Till"})
        }
    };

    function notSeeGraph()
    {
        setSeeGraph('1');
    };

        return (
            <View>
                {(seeGraph=='0')?
                    <View>
                    <View style={styles.header}>
                        <Text style={styles.title}>Cohesive Soil</Text>
                    </View>  
                    <View>
                        <View style={styles.box}>
                            <Text style={styles.text}>Enter Liquid Limit(%)</Text>
                            <TextInput
                            style={styles.input}
                            keyboardType='numeric'
                            placeholder='e.g. 30 '
                            onChangeText={(val)=>setSelectedValue({...selectedValue,Wl:val})}
                            />
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.text}>Enter Solid grain density(Kg/m3)</Text>
                            <TextInput
                            style={styles.input}
                            keyboardType='numeric'
                            placeholder='e.g. 2700'
                            onChangeText={(val)=>setSelectedValue({...selectedValue,ρs:val})}
                            />
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.text}>Enter Void ratio</Text>
                            <TextInput
                            style={styles.input}
                            keyboardType='numeric'
                            placeholder='e.g. 0.6'
                            onChangeText={(val)=>setSelectedValue({...selectedValue,e:val})}
                            />
                        </View>
                        <Picker
                            selectedValue={selectedValue}
                            style ={styles.picker}
                            // style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => myfunction(itemValue)}
                        >
                            <Picker.Item label="{Choose}" value="z" />
                            <Picker.Item label="Coarse, uniform and relatively dense sand" value="a" />
                            <Picker.Item label="Fine and dense sand" value="b" />
                            <Picker.Item label="Tailings Sigmaa (silty material, coarse and loose)" value="c" />
                            <Picker.Item label="Tailings Sigma mixed with 10% bentonite" value="d" />
                            <Picker.Item label="Guadalix Red silty clay" value="e" />
                            <Picker.Item label="Till" value="f" />
                            <Picker.Item label="Indian Head Till " value="g" />
                        </Picker>
                    </View>
                    <Text style={styles.text}>Choosen Soil Type: {selectedValue.type} </Text>
                    <Text style={styles.text}>Given Soil sample have = Wl: {selectedValue.Wl}%,ρs: {selectedValue.ρs}kg/m3 and e: {selectedValue.e}  </Text>
                    <Text style={styles.text}>The value of m and ac is  : {selectedValue.m} and {selectedValue.ac} </Text>
                    <View style={styles.button}>
                    
                  </View>
                  <Button
                    title="Calculate"
                    onPress={()=> setSeeGraph('1')}
                   />
                   
                </View>
    
                :
                <View>
                    <GoogleCharts data={selectedValue}/>
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
        padding:10
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