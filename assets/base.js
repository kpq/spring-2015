var colors = d3.scale.category20c(),
     headline = d3.select("h1"),
     letters = headline.text().split("");

headline.text("");

var main = d3.select("header"),
  intro = d3.select(".intro h3");

var rainbowLetters = headline.selectAll("span")
    .data(letters)
  .enter().append("span")
    .text(function(d) { return d; })
    .style("position", "relative")

// d3.timer(function(t) {

  t = 5000*Math.random();

  rainbowLetters
      .style("color", function(d, i) { return colors(Math.floor(t / 50 + i)); })
      .style("top", function(d, i) { return Math.sin(i / 2 + t / 50) * 8 + "px"; })
      .style("left", function(d, i) { return Math.random() * 5 + "px"; })
// });

main
  .style("border-color", function(d, i) { return colors(Math.floor(t / 50 + i)); });

intro
  .style("border-color", function(d, i) { return colors(Math.floor(t / 50 + i)); });
