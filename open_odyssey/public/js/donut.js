var myConfig = {
  "type":"ring",
  "background-color":"transparent",

  "title":{
    "text":"Bellevue",
    "font-color":"#e7857b",
    "font-size":"70%",
    "margin-top":"20%",
    "margin-right":"25%"
  },
  "subtitle":{
    "text":"Quartier prioritaire le plus<br/>peuplé de l’agglomération nantaise<br/><br/>Source : Insee, RP 2012",
    "font-color":"#fff",
    "font-weight":"normal",
    "font-size":"20%",
    "text-align":"left",
    "margin-top":"45%",
    "margin-left":"25%"
  },
  "plot":{
    "value-box":{
      "text":"%pie-total-value",
      "placement":"center",
      "font-color":"black",
      "font-size":"30%",
      "font-family":"Montserrat",
      "font-weight":"normal",
      "rules":[
        {
          "rule":"%p != 0",
          "visible":false
        }
      ]
    },
      "animation": {
      "delay": "80",
      "effect": "4",
      "method": "6",
      "sequence": "1"
    },
      "tooltip":{
      "text":"%t: %v (%npv%)",
      "font-color":"black",
      "font-family":"Montserrat",
      "text-alpha":1,
      "background-color":"white",
      "alpha":0.7,
      "border-width":1,
      "border-color":"#cccccc",
      "line-style":"dotted",
      "border-radius":"10px",
      "padding":"10%"
      },
    "slice":"60%",
    "border-width":1,
    "border-color":"#cccccc",
    "line-style":"solid"
  },
  "plotarea":{
    "margin-left":"50%",
    "margin-top":"20%"
  },
  "series":[
    {
      "values":[19424],
      "background-color":"#f64628",
      "text": "Bellevue Nantes St Herblain"
    },
    {
      "values":[4973],
      "background-color":"#1ed668",
      "text":"Dervaillières"
    },
    {
      "values":[3085],
      "background-color":"#9fd1fe",
      "text":"Malakoff"
    },
    {
      "values":[3932],
      "background-color":"#bc3c35",
      "text":"Breil Malville"
    },
    {
      "values":[11594],
      "background-color":"#62ed9d",
      "text":"Quartier Nord"
    },
    {
      "values":[2179],
      "background-color":"#666666",
      "text":"Port Boyer"
    },
    {
      "values":[5348],
      "background-color":"#49d5ca",
      "text":"Bottière pin sec"
    },
    {
      "values":[2498],
      "background-color":"#f1f1f1",
      "text":"Clos Toreau"
    },
    {
      "values":[4727],
      "background-color":"#edbf00",
      "text":"La Halveque"
    },
    {
      "values":[1843],
      "background-color":"#999999",
      "text":"Sillon de Bretagne"
    },
    {
      "values":[4035],
      "background-color":"#18857f",
      "text":"Château"
    },
    {
      "values":[2470],
      "background-color":"#cccccc",
      "text":"Plaisance"
    },
    {
      "values":[2664],
      "background-color":"#e7857b",
      "text":"Ranzay grand clos"
    }
  ]
};

zingchart.render({ 
  id : 'donut', 
  data : myConfig, 
  height: 400, 
  width: 1100 
});