var debugMode = 0;

function Point(arr) {
    this.x = arr[0];
    this.y = arr[1];

    this.set = function (p) {
        this.x = p.x;
        this.y = p.y;
    };
}

function MyKey(p, duration) {
    this.p = p;
    this.duration = duration;

    this.p_x = function() {
        return p[0] + "px";
    };
    this.p_y = function() {
        return p[1] + "px";
    };
};

// Function
function startScene1() {
   carImg.reset();
   
   // Reset the car sym
   carImg.symX = -1.0;
 

   var key0 = scene1.key0;
   var key1 = scene1.key1;
   var key2 = scene1.key2;
   var key3 = scene1.key3;
   
   updateCar();
   // Create transition
    carImg.el.transition()
            .attr('x', key0.p_x())
            .attr('y', key0.p_y())
            .duration(0)
    .transition().delay(2000)
        .attr('x', key1.p_x())
        .attr('y', key1.p_y())
        .duration(key1.duration)
        .ease("linear")
        .each("end", function () { carImg.el.attr('x', key2.p_x())
            .attr('y', key2.p_y()); carImg.symX = 1.0; updateCar(); })
    .transition()
        .attr('x', key3.p_x())
        .attr('y', key3.p_y())
        .duration(key3.duration)
}

function startScene2() {
    carImg.reset();
    updateCar();

    var key0 = scene1.key3;
    var key1 = scene2.key0;
    var key2 = scene2.key1;
    var key3 = scene2.key2;

    carImg.el.transition()
            .attr('x', key0.p_x())
            .attr('y', key0.p_y())
            .duration(0)
    .transition().delay(2000)
        .attr('x', key1.p_x())
        .attr('y', key1.p_y())
        .duration(key1.duration)
        .ease("linear")
        .each("end", function () { carImg.el.attr('x', key2.p_x())
            .attr('y', key2.p_y()); carImg.symX = -1.0; updateCar(); })
    .transition()
        .attr('x', key3.p_x())
        .attr('y', key3.p_y())
        .duration(key3.duration);
}

function startScene3() {
    carImg.reset();
    carImg.symX = -1.0;

    updateCar();

    var key0 = scene2.key2;
    var key1 = scene3.key0;
    var key2 = scene3.key1;
    var key3 = scene3.key2;

    carImg.el.transition()
            .attr('x', key0.p_x())
            .attr('y', key0.p_y())
            .duration(0)
    .transition().delay(2000)
        .attr('x', key1.p_x())
        .attr('y', key1.p_y())
        .duration(key1.duration)
        .ease("linear")
        .each("end", function () { carImg.el.attr('x', key2.p_x())
            .attr('y', key2.p_y()); carImg.symX = 1.0; updateCar(); })
    .transition()
        .attr('x', key3.p_x())
        .attr('y', key3.p_y())
        .duration(key3.duration);
}

function enableCarScene() {
    carImg.enabled = 1;
    carImg.el.style('opacity', carImg.enabled);
}

function disableCarScene() {
    carImg.enabled = 0;
    carImg.el.style('opacity', carImg.enabled);
}

function updateCar() {
    carImg.el.style('opacity', carImg.enabled)
        .style('transform', 'matrix' + carImg.matrix()); 

        //.attr("transform", "scale("+ carImg.scale+ ", " +carImg.scale +")"
        //+ "translate(" + (-carImg.width/2) + ", " + (-carImg.height/2) + ")");
}

function clicked(e) {
    var e = e || window.event;
    if (e.which == 2) {
        carImg.symX = -1.0 * carImg.symX;
        updateCar();
    } else if (e.which == 1) {
        console.log(d3.mouse(this));
    }
}

function moveCar() {
    var coor = d3.mouse(this);
    carImg.el.attr('x', coor[0] + "px")
            .attr('y', coor[1] + "px");
}


// Object
var carImg = {
   enabled: 0,
   el: d3.select("#container1").select("#car"),
   scale: 1.0,
   translate: new Point([0, 0]),
   symX: 1.0,
   symY: 1.0,
   matrix: function () {
       //return "(" + this.scale ;
        var dx = (this.symX == -1.0) ? this.width : 0;
        var dy = (this.symY == -1.0) ? this.height : 0;
        return "(" + (this.scale * this.symX) + ", 0, 0, " 
        + (this.scale * this.symY) + ", "
        + (this.translate.x - this.center.x + dx) + ", " 
        + (this.translate.y - this.center.y + dy) + ")";   
   },
   reset : function () {
        this.scale = 1.0;
        this.translate.x = 0;
        this.translate.y = 0;
        this.symX = 1.0;
        this.symY = 1.0;    
   },
};

var scene1 = {
     key0: new MyKey([-281, 19], 0),
     key1: new MyKey([-1072, 470], 6000),
     key2: new MyKey([1078, 492], 0),
     key3: new MyKey([888, 602], 3000)

};

var scene2 = {
    key0: new MyKey([148, 1022], 6000),
    key1: new MyKey([-149, 1046], 0),
    key2: new MyKey([-467, 1230], 3000)
};

var scene3 = {
    key0: new MyKey([-1034, 1552], 6000),
    key1: new MyKey([1041, 1573], 0),
    key2: new MyKey([767, 1730], 3000)
};

// Init
// Add debug helper
if (debugMode == 1) {
    d3.select("#fullpage").on("mousemove", moveCar)
        .on('mousedown', clicked);
} else if (debugMode == 2) {
    d3.select("#scenario1")[0][0]
      .addEventListener("click", function() { console.log("start"); startScene1(); }, false);
    d3.select("#scenario2")[0][0]
      .addEventListener("click", function() { startScene2(); }, false);
    d3.select("#scenario3")[0][0]
      .addEventListener("click", function() { startScene3(); }, false);
}

var svgScene = d3.select("#carScene")
    .attr('width', "100%")
    .attr('height', "300%")
    /*.attr('width', "960")
    .attr('height', "500")
  .attr('viewBox',"0 0 960 500")*/
    .style('top', '0')
    .style('left', '0')
    .style('position', 'absolute')
    .style('z-index', '6');

scene1.g = svgScene.append("g");

// Ajout des images
/*var backG = scene1.g.append("g");
scene1.g.append("svg:image")
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', "100%")
    .attr('height', '34%')
    .attr("xlink:href", "img/map-base-01.svg");*/

var carG = scene1.g.append("g");
carImg.width = 170;
carImg.height = 110;

carImg.center = new Point([carImg.width/2, carImg.height/2]);
//carImg.center = new Point([carImg.el.node().getBoundingClientRect().width/2, carImg.el.node().getBoundingClientRect().height/2]);
carImg.el = carG.append("svg:image")
        .attr("id", "myCar")
        .attr('x', scene1.key0.p_x())
        .attr('y', scene1.key0.p_y())
        .attr('width', carImg.width + 'px')
        .attr('height', carImg.height + 'px')
        .attr("xlink:href", listesvgTransport[iterator]);

// init car position 
disableCarScene();

//startScene2();
updateCar();