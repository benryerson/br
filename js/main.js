$(function(){
  $('.curtains').curtain({
    scrollSpeed: 400
  });
});
$('.indicator span').popover();


// Google Chart Stuff
google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Item', 'Count'],
          ['HTML5', 36],
          ['CSS3', 36],
          ['jQuery', 28]
        ]);

        var options = {
          backgroundColor: '#309292',
          fontName: 'Droid Serif',
          legend: { position: 'none' },
          title: 'CODE EXPERIENCE',
          titleTextStyle: { color: '#333', fontName: 'Oswald', fontSize: 20 },
          tooltip: { text: 'percentage' },
        };

        var chart = new google.visualization.PieChart(document.getElementById('code'));
        chart.draw(data, options);
      }