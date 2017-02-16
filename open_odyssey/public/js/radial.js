 /*//composés de personne seules à bas_revenu
var textjson = {"menages":
    [
      {
        "nom": "Bellevue Nantes St Herblain 1er",
        "valeur": 0.33
      },
      {
        "nom": "Nantes Métropole 1er",
        "valeur": 0.192
      }
    ]
};

var names = ['Bellevue Nantes Saint Herblain', 'Nantes métropole'];
//var datas = JSON.parse(textjson);
console.log(textjson.menage[0].nom);
//var names = [objet., 'Nantes métropole'];
//var data1 = $.getJSON("data/dummy.json", function(data){};
//console.log(data1["Personne isolé"][0].nom);
var data = [33, 19.3];
var dataSet = anychart.data.set(data);
var palette = anychart.palettes.distinctColors().colors(['#64b5f6', '#1976d2', '#ef6c00', '#ffd54f', '#455a64', '#96a6a6', '#dd2c00', '#00838f', '#00bfa5', '#ffa000']);

var makeBarWithBar = function(gauge, radius, i, width, without_stroke){
    var stroke = '1 #e5e4e4';
    if (without_stroke) {
stroke = null;
gauge.label(i)
.text(names[i] + ', <span style="">' + data[i] + '%</span>')// color: #7c868e
    .useHtml(true);
gauge.label(i)
    .hAlign('center')
    .vAlign('middle')
    .anchor('rightCenter')
    .padding(0, 10)
    .height(width/2 + '%')
    .offsetY(radius + '%')
    .offsetX(0);
    }

    gauge.bar(i).dataIndex(i).radius(radius).width(width).fill(palette.colorAt(i)).stroke(null).zIndex(5);
    gauge.bar(i + 100).dataIndex(5).radius(radius).width(width).fill('#F5F4F4').stroke(stroke).zIndex(4);
    return gauge.bar(i)
};


anychart.onDocumentReady(function() {
    gauge = anychart.circularGauge();
    gauge.data(dataSet);
    gauge.fill('#fff')
.stroke(null)
.padding(0)
.margin(100)
.startAngle(0)
.sweepAngle(270);
    var axis = gauge.axis().radius(100).width(1).fill(null);
    axis.scale()
.minimum(0)
.maximum(100)
.ticks({interval: 1})
.minorTicks({interval: 1});
    axis.labels().enabled(false);
    axis.ticks().enabled(false);
    axis.minorTicks().enabled(false);
    gauge.margin(50);
    makeBarWithBar(gauge, 100, 0, 17, true);
    makeBarWithBar(gauge, 80, 1, 17, true);
   // makeBarWithBar(gauge, 60, 2, 17, true);
    //makeBarWithBar(gauge, 40, 3, 17, true);
    //makeBarWithBar(gauge, 20, 4, 17, true);
    //makeBarWithBar(gauge, 10, 5, 17, true);

    gauge.title(true);
    gauge.title().text('Ménages composés de personnes seules à bas revenu' +
'<br/><span style="color:#929292; font-size: 12px;"></span>').useHtml(true);
    gauge.title()
.hAlign('center')
.padding(0)
.margin([0, 0, 20, 0]);

    gauge.container('container');
    gauge.draw();
});*/



    /*var myConfig = {
      "graphset":[
        
        {
          "type":"pie",
          "backgroundColor": "#62ed9d",
          "plotarea":{
            "margin":"40"
          },
          "scale":{
            "sizeFactor":1
          },
          "plot":{
            "valueBox":{
              "visible":false,
              "placement":"center"
            },
            "refAngle":270,
            "angleStart":270,
            "detach":false,
            "slice":"100%",
            "totals":[100],
            "animation":{
              "speed":1000,
              "effect":5,
              "method":6
            },
            "hoverState":{
              "visible":false
            }
          },
          "series":[
            {
              "size":"50%",
              "values":[33],
              "backgroundColor":"#1C7600",
              "borderWidth":46,
              "borderColor":"#B9121B",
              "text":"Bellevue Saint Herblain",
              "tooltip":{
                  "x":300,    
                  "y":243,
                  "width":120,
                  "fontSize":19,
                  "padding":30,
                  "anchor":"c",
                  "fontFamily":"Lucida Sans Unicode",
                  "text":"<span style='color:%color'>%plot-text</span><br><span style='font-size:31px;font-weight:bold;color:%color;'>%node-percent-value%</span>", 
                  "align":"left",
                  "borderWidth":0,
                  "backgroundColor":"none",
                }
            },
            {
              "size":"75%",
              "values":[19.2],
              "backgroundColor":"#1C7600",
              "borderWidth":46,
              "borderColor":"#1C7600",
              "text":"Nantes Métropole",
              "tooltip":{
                  "x":325,    
                  "y":243,
                  "width":120,
                  "fontSize":19,
                  "padding":30,
                  "anchor":"c",
                  "fontFamily":"Lucida Sans Unicode",
                  "text":"<span style='color:%color'>%plot-text</span><br><span style='font-size:31px;font-weight:bold;color:%color;'>%node-percent-value%</span>",
                  "align":"left",
                  "borderWidth":0,
                  "backgroundColor":"none",
                }
            },
            {
          "size":"50%",
          "values":[55],
          "backgroundColor":"#19ecd5",
          "borderWidth":46,
          "borderColor":"#19ecd5",
          "text":"Stand",
          "tooltip":{
              "x":365,    
              "y":243,
              "width":120,
              "fontSize":19,
              "padding":30,
              "anchor":"c",
              "fontFamily":"Lucida Sans Unicode",
              "text":"<span style='color:%color'>%plot-text</span><br><span style='font-size:31px;font-weight:bold;color:%color;'>%node-percent-value%</span>",
              "align":"left",
              "borderWidth":0,
              "backgroundColor":"none",
      },
            
          ],
          "shapes":[
          {
                "type":"pie",
              "flat":true,
              "x":362,
              "y":250,
              "backgroundColor":"#B5121B",
              "alpha":0.25,
              "size":234,
              "slice":187,
              "placement":"bottom"

          },
            {
              "type":"pie", //green done
              "flat":true,
              "x":362,
              "y":250,
              "backgroundColor":"#1C3600",
              "alpha":0.25,
              "size":182,
              "slice":134,
              "placement":"bottom"
            },
            {
              "type":"pie", //blue done
              "flat":true,
              "x":362,
              "y":250,
              "backgroundColor":"#0efbe1",
              "alpha":0.25,
              "size":129,
              "slice":82,
              "placement":"bottom"
            },
    
            {
              "type":"line",
              "lineWidth":3,
              "lineCap":"round",
              "lineColor":"#000",
              "points":[
                [0,0],
                [22,0],
                null,
                [10,-10],
                [22,0],
                [10,10]
              ],
              "offsetX":350,
              "offsetY":42
            },
            {
              "type":"line",
              "lineWidth":3,
              "lineCap":"round",
              "lineColor":"#000",
              "points":[
                [0,0],
                [22,0],
                null,
                [10,-10],
                [22,0],
                [10,10],
                null,
                [20,-10],
                [32,0],
                [20,10]
              ],
              "offsetX":350,
              "offsetY":95
            },
            {
              "type":"line",
              "lineWidth":3,
              "lineCap":"round",
              "lineColor":"#000",
              "points":[
                [0,0],
                [0,22],
                null,
                [-10,12],
                [0,0],
                [10,12]
              ],
              "offsetX":360,
              "offsetY":135
            }
          ]
        }
      ]
    };
     
    zingchart.render({ 
        id : 'myChart2', 
        data : myConfig, 
        height: 500, 
        width: 725 
    });*/

  var myConfig = {
  "graphset":[
    
    {
      "type":"pie",
      "backgroundColor": "#62ed9d",
      "plotarea":{
        "margin":"40"
      },
      "scale":{
        "sizeFactor":1
      },
      "plot":{
        "valueBox":{
          "visible":false
        },
        "refAngle":270,
        "angleStart":270,
        "detach":false,
        "slice":"100%",
        "totals":[100],
        "animation":{
          "speed":1000,
          "effect":5,
          "method":6
        },
        "hoverState":{
          "visible":false
        }
      },
      "series":[
        /*{
          "size":"100%",
          "values":[33],
          "backgroundColor":"#e7857b",
          "borderWidth":46,
          "borderColor":"#e7857b",
          "text":"Bellevue Saint Herblain",
          "tooltip":{
              "x":305,    
              "y":243,
              "width":120,
              "fontSize":19,
              "padding":30,
              "anchor":"c",
              "fontFamily":"Lucida Sans Unicode",
              "text":"<span style='color:%color'>%plot-text</span><br><span style='font-size:31px;font-weight:bold;color:%color;'>%node-percent-value%</span>", 
              "align":"left",
              "borderWidth":0,
              "backgroundColor":"none",
            }
        },*/
        {
          "size":"75%",
          "values":[33],
          "backgroundColor":"#0091ab",
          "borderWidth":46,
          "borderColor":"#0091ab",
          "text":"Bellevue",
          "tooltip":{
              "x":355,    
              "y":243,
              "width":120,
              "fontSize":25,
              "padding":30,
              "anchor":"c",
              "fontFamily":"Lucida Sans Unicode",
              "text":"<span style='color:%color'>%plot-text</span><br><span style='font-size:31px;font-weight:bold;color:%color;'>%node-percent-value%</span>",
              "align":"left",
              "borderWidth":0,
              "backgroundColor":"none",
            }
        },
        {
          "size":"50%",
          "values":[19.2],
          "backgroundColor":"#e7857b",
          "borderWidth":46,
          "borderColor":"#e7857b",
          "text":"Nantes",
          "tooltip":{
              "x":355,    
              "y":243,
              "width":120,
              "fontSize":25,
              "padding":30,
              "anchor":"c",
              "fontFamily":"Lucida Sans Unicode",
              "text":"<span style='color:%color'>%plot-text</span><br><span style='font-size:31px;font-weight:bold;color:%color;'>%node-percent-value%</span>",
              "align":"left",
              "borderWidth":0,
              "backgroundColor":"none",
        },
      }
      ],
      "shapes":[
        /*{
          "type":"pie",
          "flat":true,
          "x":362,
          "y":250,
          "backgroundColor":"#e7857b",//e7857b,d8615b
          "alpha":0.25,
          "size":234,
          "slice":187,
          "placement":"bottom"
        },*/
        {
          "type":"pie", //green done
          "flat":true,
          "x":362,
          "y":250,
          "backgroundColor":"#0091ab",//0091ab,4ad6cb
          "alpha":0.25,
          "size":182,
          "slice":134,
          "placement":"bottom"
        },
        {
          "type":"pie", //blue done
          "flat":true,
          "x":362,
          "y":250,
          "backgroundColor":"#e7857b",
          "alpha":0.25,
          "size":129,
          "slice":82,
          "placement":"bottom"
        },/*
        {
          "type":"line",
          "lineWidth":3,
          "lineCap":"round",
          "lineColor":"#fff",
          "points":[
            [0,0],
            [22,0],
            null,
            [10,-10],
            [22,0],
            [10,10]
          ],
          "offsetX":350,
          "offsetY":42
        },*/
        {
          "type":"line",
          "lineWidth":3,
          "lineCap":"round",
          "lineColor":"#fff",
          "points":[
            [0,0],
            [22,0],
            null,
            [10,-10],
            [22,0],
            [10,10],
            null,
            [20,-10],
            [32,0],
            [20,10]
          ],
          "offsetX":350,
          "offsetY":95
        },
        {
          "type":"line",
          "lineWidth":3,
          "lineCap":"round",
          "lineColor":"#fff",
          "points":[
            [0,0],
            [0,22],
            null,
            [-10,12],
            [0,0],
            [10,12]
          ],
          "offsetX":360,
          "offsetY":135
        }
      ]
    }
  ]
};
 
zingchart.render({ 
  id : 'myChart2', 
  data : myConfig, 
  height: 500, 
  width: 725 
});



