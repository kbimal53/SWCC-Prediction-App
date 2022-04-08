import { View, Text, Picker, Button ,StyleSheet,TextInput} from 'react-native'
import React , {useState} from 'react'

export default function CohesiveSoil() {
    const [Wl,setWl] = useState(0);
    const [ξ,setξ] = useState(0);
    const [ρs,setρs] = useState(0);
    const [e,sete] = useState(0);
    const [selectedValue, setSelectedValue] = useState({type:"choose",m:0 , ac : 0});
    function myfunction(val){
        if(val=="a")
        {
            setSelectedValue({...selectedValue,m:1,type:"Coarse, uniform and relatively dense sand"})
        }
        else if(val=="b"){
            setSelectedValue({...selectedValue,m:2,ac:2,type:"Fine and dense sand"})
        }
        else if(val=="c"){
            setSelectedValue({...selectedValue,m:3,ac:3,type:"Tailings Sigmaa (silty material, coarse and loose)"})
        }
        else if(val=="d"){
            setSelectedValue({...selectedValue,m:4,ac:4,type:"Tailings Sigma mixed with 10% bentonite"})
        }
        else if(val=="e"){
            setSelectedValue({...selectedValue,m:5,ac:4,type:"Guadalix Red silty clay"})
        }
        else if(val=="f"){
            setSelectedValue({...selectedValue,m:6,ac:66,type:"Till"})
        }
        else if(val=="g"){
            setSelectedValue({...selectedValue,m:7,ac:12,type:"Indian Head Till"})
        }
    };

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
                <Text style={styles.text}>Choosen Soil Type: {selectedValue.type}</Text>
                <Text style={styles.text}>Given Soil sample have = Wl: {Wl}%,ρs: {ρs}kg/m3 and e: {e} and x = {parseInt(Wl*ρs)+parseInt(e)} </Text>
                <Text style={styles.text}>The value of m and ac is  : {selectedValue.m} and {selectedValue.ac} </Text>
                <View style={styles.button}>
                <Button
                  title="Calculate"
                />
              </View>
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