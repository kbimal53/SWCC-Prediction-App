import React from "react";
import { renderToString } from 'react-dom/server'
import { WebView } from 'react-native-webview';
// import { Chart } from "react-google-charts";
import { View, Text, Dimensions,Button, StyleSheet} from 'react-native'

function myCalculation(x){
    let Sc = 1- Math.pow((Math.pow((hco/x),2)+1),props.data.m)*Math.exp(-(props.data.m)*Math.pow((hco/x),2));
    let Cψ = 1-Math.log10(1+x/ψres)/Math.log10(1+(1e7/ψres));
    let Sa = parseFloat(props.data.ac)*Cψ*Math.pow(hco,2/3)/(Math.exp(1/3)*Math.pow(x,1/6));
    let SaStar = (Sa>1)?1:Sa;
    let Sr = Sc+SaStar*(1-Sc);
    let Theta = Sr*n;
    return Theta;
  }

export function GoogleCharts(props) {
  const arr = [1,9.8,196,392,784,1176,1568,1960,2940,3920,4900,5880,7840,43120,372400,838880,1486660,2916480,10000000];
    let ξ = parseFloat(props.data.ρs)*0.15;
    let hco = (ξ/parseFloat(props.data.e))*Math.pow(parseFloat(props.data.Wl),1.45);
    let ψres = 0.83*Math.pow((ξ/parseFloat(props.data.e)),1.2)*Math.pow(parseFloat(props.data.Wl),1.74);
    let n =parseFloat(props.data.e)/(1+parseFloat(props.data.e)) ;
    const z = arr.map(myCalculation)
    function myCalculation(x){
      let Sc = 1- Math.pow((Math.pow((hco/x),2)+1),props.data.m)*Math.exp(-(props.data.m)*Math.pow((hco/x),2));
      let Cψ = 1-Math.log10(1+x/ψres)/Math.log10(1+(1e7/ψres));
      let Sa = parseFloat(props.data.ac)*Cψ*Math.pow(hco,2/3)/(Math.exp(1/3)*Math.pow(x,1/6));
      let SaStar = (Sa>1)?1:Sa;
      let Sr = Sc+SaStar*(1-Sc);
      let Theta = Sr*n;
      return Theta;
    }
  console.log(z);
  
  let jsCode = `
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
   
    var data = google.visualization.arrayToDataTable([
      ["x", "${props.data.type}"],
      [${arr[0]},  ${z[0]}],
      [${arr[1]},  ${z[1]}],
      [${arr[2]},  ${z[2]}],
      [${arr[3]},  ${z[3]}],
      [${arr[4]},  ${z[4]}],
      [${arr[5]},  ${z[5]}],
      [${arr[6]},  ${z[6]}],
      [${arr[7]},  ${z[7]}],
      [${arr[8]},  ${z[8]}],
      [${arr[9]},  ${z[9]}],
      [${arr[10]}, ${z[10]}],
      [${arr[11]}, ${z[11]}],
      [${arr[12]}, ${z[12]}],
      [${arr[13]}, ${z[13]}],
      [${arr[14]}, ${z[14]}],
      [${arr[15]}, ${z[15]}],
      [${arr[16]}, ${z[16]}],
      [${arr[17]}, ${z[17]}],
      [${arr[18]}, ${z[18]}]
    ]);

    var options = {
      title: 'SWCC ',
      curveType: 'function',
      legend: { position: 'bottom' },
      hAxis: {
        title: 'Suction(ψ)',
        scaleType:'log'
      },
      vAxis: {
        title: 'Volumetric water Content(θ)',
      }
    }; 

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);

  };
  `;
  const ExampleChart = 
  `<html>
  <head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    
  </head>
  <body>
  <div id="curve_chart" style="width: 900px; height: 500px"></div>
  </body>
</html>`;
  return (
    <View style={styles.container}>
      <WebView source={{html: (ExampleChart)}} style={styles.webStyle}
          injectedJavaScript={jsCode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
  },
  webStyle: {
      marginTop: 20,
      height: 500,
      width: 320,
      flex: 1,
  },
});
