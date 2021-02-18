/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

/**
 * The XYChart for transit schema
 */

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);
chart.padding(0, 0, 0, 0);

// Title
var title = chart.tooltipContainer.createChild(am4core.Label);
title.fill = am4core.color("#00254b");
title.fontSize = 25;
//title.width = am4core.percent(100);
//title.textAlign = "middle";
title.x = 10;
title.y = 10;

function createAxis(list) {
  var axis = list.push(new am4charts.ValueAxis());
  axis.min = 0;
  axis.max = 100;
  axis.strictMinMax = true;
  axis.renderer.grid.template.disabled = true;
  axis.renderer.labels.template.disabled = true;
  axis.renderer.baseGrid.disabled = true;
}

// Create axes
createAxis(chart.xAxes);
createAxis(chart.yAxes);

function createLine(name, color, data) {
  // Create series
  var series = chart.series.push(new am4charts.StepLineSeries());
  series.data = data;
  series.name = name;

  // Set up binding to data
  series.dataFields.valueX = "x";
  series.dataFields.valueY = "y";

  // Set up appearance
  series.stroke = color;
  series.strokeWidth = 4;
  series.connect = false;
  //series.tensionX = 0.5;
  //series.tensionY = 0.5;

  // Set up dash
  series.propertyFields.strokeDasharray = "dash";

  // Add bullets (stations)
  var bullet = series.bullets.push(new am4charts.CircleBullet());
  bullet.circle.radius = 6;
  bullet.circle.fill = am4core.color("#fff");
  bullet.circle.stroke = am4core.color("#000");
  bullet.circle.strokeWidth = 2;
  bullet.circle.tooltipText = "{station}";

}

function createConnector(data) {
  // Create series
  var series = chart.series.push(new am4charts.LineSeries());
  series.data = data;
  series.hiddenInLegend = true;

  // Set up binding to data
  series.dataFields.valueX = "x";
  series.dataFields.valueY = "y";

  // Set up appearance
  series.stroke = am4core.color("#999");
  series.strokeWidth = 12;
  series.connect = false;

  // Add bullets (stations)
  var bullet = series.bullets.push(new am4charts.CircleBullet());
  bullet.circle.radius = 6;
  bullet.circle.fill = am4core.color("#fff");
  bullet.circle.stroke = am4core.color("#000");
  bullet.circle.strokeWidth = 2;

  bullet.zIndex = -10;

}



createLine(
  "Erstellung des Produkts",
  am4core.color("#0075bf"),
  [{
    station: "Hyper Text Markup Language. \nMit HTML wird das Grundgerüst \neiner Website erstellt.",
    x: 69,
    y: 12
  }, 
  {
    station: "Cascading Style Sheets. \nCSS macht unser Grundgerüst schön. \nBeispielsweise mit Farben.",
    x: 53,
    y: 15
  }, {
    station: "JavaScipt sorgt für Interaktion \nauf der Website. Zum Beispiel mit klickbaren Buttons oder Formularen.",
    x: 40,
    y: 20
  },
  {
    station: "Admiralty",
    x: 42,
    y: 24
  },]
);

createLine(
  "Erfolgsmessung",
  am4core.color("#009e3d"),
  [{
    station: "Der Erfolg der 'gehosteten' Produkte \nkann nun gemessen werden.",
    x: 50,
    y: 52
  }, {
    station: "Ladezeiten. Absprungraten von Kunden. \nDeinstallationen von App-Nutzern. \nAll das und mehr wird gemessen, um besser zu werden.",
    x: 55,
    y: 56
  },{
    station: "Die Produkte können\num Schnittstellen (API) ergänzt \n oder deren Erfolg gemessen werden.",
    x: 69,
    y: 62
  },]
);

createLine(
  "Schnittstellen",
  am4core.color("#97401d"),
  [{
    station: "Die Produkte können\num Schnittstellen (API) ergänzt \n oder deren Erfolg gemessen werden.",
    x: 69,
    y: 64
  }, {
    station: "Die Produkte können\num Schnittstellen (API) ergänzt \n oder deren Erfolg gemessen werden.",
    x: 69,
    y: 83
  }, {
    station: "Schnittstellen oder API (Application Programming Interfaces) \nvon oder zu anderen Anbietern. Mit den PayPal oder Stripe-API z.B. \nkönnen wir in Minuten eine Zahlungsmöglichkeit für unser Produkt integrieren. \nUnd müssen es somit nicht selbst entwickeln.",
    x: 74,
    y: 88
  }, ]
);

createLine(
  "Vermarktung",
  am4core.color("#e30613"),
  [ {
    station: "Die Produkte können\num Schnittstellen (API) ergänzt \n oder deren Erfolg gemessen werden.",
    x: 69,
    y: 85
  }, {
    station: "U.a. mit Werbeanzeigen auf Google, Facebook oder Amazon. \nOder mit Anbietern von provisionsbasiertem Affiliate-Marketing wie Zanox oder Affilinet. \nOder 'organischer' Vertrieb auf den eigenen Social-Media-Kanälen. \nOder über Influencer.",
    x: 32,
    y: 78
  }, {
    station: "Die 'gehosteten' Produkte können nun \nvermarktet werden.",
    x: 35,
    y: 66
  },{
    station: "Der Erfolg der 'gehosteten' Produkte \nkann nun gemessen werden.",
    x: 50,
    y: 50
  }, {
    station: "Die erstellten Produkte müssen nun zugänglich gemacht werden.",
    x: 42,
    y: 24
  }]
);

createLine(
  "Hosting",
  am4core.color("#f49432"),
  [ {
    station: "Die 'gehosteten' Produkte können vermarktet werden.",
    x: 35,
    y: 64
  }, {
    station: "Content Delivery Networks. CDN-Anbieter wie Cloudflare oder Akamai \nbieten weltweite Server, auf denen Kopien der Websites liegen. \nDas macht sie ausfallsicherer.",
    x: 14,
    y: 38
  },{
    station: "Bei Hosting-Anbietern wie 1&1, DomainFactory oder AWS \nkönnen wir die HTML/CSS/JavaScript-Dateien hochladen. \nDort sind sie dann unter einer IP-Adresse oder meistens einer URL aufrufbar. \nAnbieter wie Github oder Netlify erlauben schnelles Hosting von Produktprototypen.",
    x: 38,
    y: 50
  },{
    station: "Die erstellten Produkte müssen nun zugänglich gemacht werden.",
    x: 43,
    y: 24
  }, ]
);


// Mong Kok
// createConnector(
//   [{
//    x: 52,
//    y: 53
//  }, {
//    x: 51,
//    y: 52
//  }]
// );


chart.legend = new am4charts.Legend();
chart.legend.position = "top";

/**
 * The map for background
 */

var bg = chart.plotContainer.createChild(am4core.Image);
bg.width = am4core.percent(100);
bg.height = am4core.percent(100);
bg.href = src="Map.png";