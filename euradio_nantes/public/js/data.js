window.onload = function () {
    creatFacebook();
    chartFacebook.render();
}

function showFacebook(){
    creatFacebook();
    chartFacebook.render();
}

function showTwitter(){
    creatTwitter();
    chartTwitter.render();
}

function creatFacebook(){
    $.ajaxSetup({
        async: false
    });
    $.getJSON('public/data/facebook.json', function(data) {
        chartFacebook = new CanvasJS.Chart("chartContainer", {
                title: {
                    text: "Facebook",
                    fontFamily: "Verdana",
                    fontColor: "Peru",
                    fontSize: 28

                },
                animationEnabled: true,
                axisY: {
                    tickThickness: 0,
                    lineThickness: 0,
                    valueFormatString: " ",
                    gridThickness: 0
                },
                axisX: {
                    tickThickness: 0,
                    lineThickness: 0,
                    labelFontSize: 18,
                    labelFontColor: "Peru"

                },
                data: [
                {
                    indexLabelFontSize: 26,
                    toolTipContent: "<span style='\"'color: {color};'\"'><strong>{indexLabel}</strong></span><span style='\"'font-size: 20px; color:peru '\"'><strong>{y}</strong></span>",

                    indexLabelPlacement: "inside",
                    indexLabelFontColor: "#FF6666",
                    indexLabelFontWeight: 600,
                    indexLabelFontFamily: "Verdana",
                    color: "#3b5998",
                    type: "bar",
                    dataPoints: data.provenancePaysPourcentage.reverse()
                }
                ]
            });
    });
    $.ajaxSetup({
        async: true
    });
}


function creatTwitter(){
    $.ajaxSetup({
        async: false
    });
    $.getJSON('public/data/twitter.json', function(data) {
        chartTwitter = new CanvasJS.Chart("chartContainer", {
                title: {
                    text: "Twitter",
                    fontFamily: "Verdana",
                    fontColor: "Peru",
                    fontSize: 28

                },
                animationEnabled: true,
                axisY: {
                    tickThickness: 0,
                    lineThickness: 0,
                    valueFormatString: " ",
                    gridThickness: 0
                },
                axisX: {
                    tickThickness: 0,
                    lineThickness: 0,
                    labelFontSize: 18,
                    labelFontColor: "Peru"

                },
                data: [
                {
                    indexLabelFontSize: 26,
                    toolTipContent: "<span style='\"'color: {color};'\"'><strong>{indexLabel}</strong></span><span style='\"'font-size: 20px; color:peru '\"'><strong>{y}</strong></span>",

                    indexLabelPlacement: "inside",
                    indexLabelFontColor: "#FF6666",
                    indexLabelFontWeight: 600,
                    indexLabelFontFamily: "Verdana",
                    color: "#00acee",
                    type: "bar",
                    dataPoints: data.reverse()
                }
                ]
            });
    });
    $.ajaxSetup({
        async: true
    });
}