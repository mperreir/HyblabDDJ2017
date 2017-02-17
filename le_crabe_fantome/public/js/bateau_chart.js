
d3.json("data/bateau.json", function(dataset){
  dataset = dataset.bateau;
  var padding = { top: 50, right: 50, bottom: 50, left: 50 };

  var svg = d3.select('#chart_bateau1');
  var text = d3.select('#text_age_bateau').text('Age 00.00');

  var main = svg.append('g')
          .classed('main', true)
          .attr('transform', "translate(" + padding.top + ',' + padding.left + ')');

  var width = svg.node().getBoundingClientRect().width;
  var height = svg.node().getBoundingClientRect().height;
  var x = svg.node().getBoundingClientRect().x;
  var y = svg.node().getBoundingClientRect().y;

  // Créer  échelle linear d'axe X
  var xScale = d3.scale.linear()
          .domain(d3.extent(dataset, function(d) {return d.date;}))
          .range([0, width - padding.left - padding.right]);
  // Créer  échelle linear d'axe Y
  var yScale = d3.scale.linear()
          .domain([
            d3.min(dataset,function(d) {return d.amount;}),
            d3.max(dataset,function(d) {return d.amount;})
          ])
          .range([height - padding.top - padding.bottom, 0]);
  // Créer axe X
  var xAxis = d3.svg.axis()
          .scale(xScale)
          .orient('bottom')
          .ticks(10)
          .tickFormat(function(d){return d;});


  // Créer axe Y
  var ticks = [];
  dataset.forEach(function(e){ticks.push(e.amount);});

  /*
  var yAxis = d3.svg.axis()
          .scale(yScale)
          .orient('left')
          .tickSize(0)
          .tickValues(ticks);
  // Ajouter élément SVG de X
  /*
  main.append('g')
          .attr('class', 'axis')
          .attr('transform', 'translate(0,' + (height - padding.top - padding.bottom) + ')')
          .call(xAxis);*/
  // Ajouter élément SVG de Y
  /*
  main.append('g')
          .attr('class', 'axis')
          .call(yAxis);*/
  // Ajouter la ligne
  var line = d3.svg.line()
          .x(function(d) {
              return xScale(d.date)
          })
          .y(function(d) {
              return yScale(d.amount);
          });
          // type de la ligne
  // Ajouter path
  main.append('path')
          .attr('class', 'line')
          .attr('d', line(dataset));
  //Ajouter les pointes
  var circles = main.selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('cx', function(d) {return xScale(d.date);})
    .attr('cy', function(d) {return yScale(d.amount);})
    .attr('r', 30)
    .style('opacity', 0);

  var subCircles = main.selectAll('subCircles')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('cx', function(d) {return xScale(d.date);})
    .attr('cy', function(d) {return yScale(d.amount);})
    .attr('r', 5)
    .attr('fill', '#6a9dae');

  circles.on("mouseover", function(d,i){
    subCircles.transition().attr('r', function(d2,i2){
      if (i === i2) return 10;
      else return 5;
    })
    text.transition().text("Age "+d3.round(d.m_age,2));
    d3.select("#div_amount").text(d.amount)
      .transition()
      .style("top",(y + yScale(d.amount) + 10)+"px")
      .style("left",(x + xScale(d.date) + 50)+"px")
      .style('opacity', 1);
  });

  subCircles.on("mouseover", function(d,i){
    subCircles.transition().attr('r', function(d2,i2){
      if (i === i2) return 10;
      else return 5;
    })
    text.text('Age '+d3.round(d.m_age,2));
    d3.select("#div_amount").text(d.amount)
      .transition()
      .style("top",(y + yScale(d.amount) + 10)+"px")
      .style("left",(x + xScale(d.date) + 50)+"px")
      .style('opacity', 1);
  });

   circles.on("mouseout", function(d,i){
     subCircles.transition().attr('r', 5);
     text.text('Age 00.00');
     d3.select("#div_amount")
     .transition()
     .style('opacity', 0);
   })
 });
