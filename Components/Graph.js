import { View, Text, Dimensions,Button} from 'react-native'
import React from 'react'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

  export default function Graph(props)
  {
    const mydata = [1,9.8,196,392,784,1176,1568,1960,2940,3920,4900,5880,7840,43120,372400,838880,1486660,2916480,10000000];
    const logdata = [0.1,1,10,1e2,1e3,1e4,1e5,1e6,1e7]
    let ξ = parseFloat(props.data.ρs)*0.15;
    let hco = (ξ/parseFloat(props.data.e))*Math.pow(parseFloat(props.data.Wl),1.45);
    let ψres = 0.83*Math.pow((ξ/parseFloat(props.data.e)),1.2)*Math.pow(parseFloat(props.data.Wl),1.74);
    let n =parseFloat(props.data.e)/(1+parseFloat(props.data.e)) ;
    const arr = mydata.map(myCalculation)
    function myCalculation(x){
      let Sc = 1- Math.pow((Math.pow((hco/x),2)+1),props.data.m)*Math.exp(-(props.data.m)*Math.pow((hco/x),2));
      let Cψ = 1-Math.log(1+x/ψres)/Math.log(1+(1e7/ψres));
      let Sa = parseFloat(props.data.ac)*Cψ*Math.pow(hco,2/3)/(Math.exp(1/3)*Math.pow(x,1/6));
      let SaStar = (Sa>1)?1:Sa;
      let Sr = Sc+SaStar*(1-Sc);
      let Theta = Sr*n;
      return Theta;
    }

      return(
        <View>
          <Text>ξ is :  {ξ} </Text>
          <Text>hco,p is : {hco} </Text>
          <Text>ψres is : {ψres} </Text>
          <Text>n is :  {n} </Text>
          <Text>array avlue are {arr[0]}</Text>
          <LineChart
            data={{
              labels: mydata,
              datasets: [
                {
                  data: arr
                }
              ]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            // yAxisLabel="$"
            // yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
              }
            }}
            // bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
          <Text>Hello</Text>
          
        </View>

      );
  }