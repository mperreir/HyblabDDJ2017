var myConfig = {
  type: "hbar",
  backgroundColor : "#ffd44a",
  title: {
    text: "Une grande précarité",
    fontColor: "#fff",
    fontSize: 30,
    //fontFamily: "Roboto",
    fontWeight: 'normal',
    offsetX: 10
  },
    subtitle: {
    offsetY: 15,
    text: "Comparaison des revenues entre Bellevue et Nantes",
    //fontFamily: "Roboto",
    fontSize: 16,
    fontColor: "#18857f",
    offsetX: 10
  },
  tooltip:{
    padding: 10,
    fontSize: 14,
    text: "%v€ ",
    backgroundColor: "#18857f",
    fontColor: "#18857f",
    borderRadius: "5px",
    borderColor: "#333",
    borderWidth: 1
  },
 
  legend: {
    backgroundColor: "transparent",
    borderWidth: "0px",
    highlightPlot: true,
    item: {
      fontSize: 18,
      fontColor: "#18857f",
      //fontFamily: "Roboto",
      
    },
    marker:{

      borderRadius: 10,
      borderWidth: "0px",
    },
    cursor: "hand"
  },
  plotarea:{//margin:'dynamic'
  margin: "100 130 70 100"
  
},
  plot:{
    borderRadius: "0 5 5 0",
    hightlightMarker: {
      backgroundColor:"red"
    },
    highlightState: {
      backgroundColor:"red"
    },
     animation:{
      effect: 4,
      method: 0,
      sequence: 1
    }
  },
  source: {
    text: "Source: Insee, RP 2012",
    fontColor: "#18857f",
    //fontFamily: 'Roboto'
  },
  scaleX: {
    labels: ['1er Décile','Médian'],
    item: {
      //fontFamily: "Roboto",
      fontSize: 14,
      fontColor: "#18857f",
      margin : "dynamic"
    },
    lineColor: "#DDD",
    tick:{
      visible: false
    }
  },
  scaleY: {
    label:{
      offsetY: 5,
      text: "Revenu (en €)",
      fontColor: "#fff",
      fontSize: 14,
      //fontFamily: "Roboto",
    },
    item: {
       fontColor: "#18857f",
      //fontFamily: "Roboto",
      fontSize: 14
    },
    lineWidth: 0,
    tick: {
      visible: false
    },
    guide:{
      lineStyle: "solid",
      lineColor: "#DDD"
    },
    values: "0:2000:200"
  },
  series : [
    {
      text: "Bellevue",
      // values: [4820, 8067, 12000, 12100, 12282, 12540],
      values: [163,1002],
      backgroundColor: "#43d67f",
      rules: [
        { rule: '%i==0', backgroundColor: '#43d67f'},
        { rule: '%i==1', backgroundColor: '#43d67f'},
     
      ]
    },
 
    {
      text: "Nantes",
      // values: [2670, 6041, 11400, 11500,9832, 9275],
      values: [679, 1769],
      backgroundColor: "#18857f",
      rules: [
        { rule: '%i==0', backgroundColor: '#18857f'},
        { rule: '%i==1', backgroundColor: '#18857f'},
        
      ]
    },
    
  ]
};
 
zingchart.render({ 
  id : 'revenu_median', 
  data : myConfig, 
  height: 350, 
  width: 700 
});