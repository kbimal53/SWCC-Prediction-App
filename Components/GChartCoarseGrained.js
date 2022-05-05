import React from "react";
import { WebView } from 'react-native-webview';
import { View, Text, Dimensions,Button, StyleSheet} from 'react-native'



export function GChartCoarseGrained(props) {
    let e  = (parseFloat(props.data.Gs)-parseFloat(props.data.ρd))/parseFloat(props.data.ρd);
    let w = e/parseFloat(props.data.Gs);
    let Vb = 1/parseFloat(props.data.ρd);
    let θs = w*parseFloat(props.data.ρd);   //porosity
    let particleSize = [0.04,0.15,0.2,0.3,0.42,0.6,1];
    let percentFiner = [2,18,28,52,70,85,100]; //for testing only.
    let sizePS = particleSize.length;
    let Mi = [];
    for(let i=1;i<sizePS;i++){
      Mi.push((percentFiner[i]-percentFiner[i-1])/100);
    }
    let Vvi_Vb = [];
    for(let i=0;i<sizePS-1;i++){
      Vvi_Vb.push(Mi[i]*e/(Vb*parseFloat(props.data.Gs)));
    }
    let θ = [Vvi_Vb[0]];
    for(let i=1;i<sizePS-1;i++){
      θ.push(θ[i-1]+Vvi_Vb[i]);
    }
    let Ri = [];
    for(let i=1;i<sizePS;i++){
      Ri.push((particleSize[i]+particleSize[i-1])/4);
    }
    let ni = [];
    for(let i=0;i<sizePS-1;i++){
      ni.push(Math.ceil(3*Mi[i]/(4*Math.PI*Math.pow(Ri[i],3)*parseFloat(props.data.Gs))));
    }
    let ri = [];
    for(let i=0;i<sizePS-1;i++){
      ri.push(Ri[i]*Math.sqrt(4*e*Math.pow(ni[i],1-parseFloat(props.data.α))/6));
    }
    let ψ = [];
    for(let i=0;i<sizePS-1;i++){
      ψ.push((2*parseFloat(props.data.Ts)*1e-6)/(ri[i]*1e-3));
    }
    console.log(ψ,θ);
  
  let jsCode = `
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
   
    var data = google.visualization.arrayToDataTable([
      ["x", "${props.data.type}"],
      [${ψ[0]},  ${θ[0]}],
      [${ψ[1]},  ${θ[1]}],
      [${ψ[2]},  ${θ[2]}],
      [${ψ[3]},  ${θ[3]}],
      [${ψ[4]},  ${θ[4]}],
      [${ψ[5]},  ${θ[5]}],
    ]);

    var options = {
      title: 'SWCC ',
      curveType: 'function',
      legend: { position: 'bottom' },
      hAxis: {
        title: 'Suction',
        scaleType:'log'
      },
      vAxis: {
        title: 'Volumetric water Content',
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
