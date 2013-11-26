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
          fontName: 'Oxygen',
          legend: { position: 'none' },
          title: 'CODE EXPERIENCE',
          titleTextStyle: { color: '#333', fontName: 'Oxygen', fontSize: 20 },
          tooltip: { text: 'percentage' },
        };

        var chart = new google.visualization.PieChart(document.getElementById('code'));
        chart.draw(data, options);
      }

// Parallax Things
$(document).ready(function(){
   // cache the window object
   $window = $(window);
 
   $('section[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);
                     
      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards                            
        var yPos = -($window.scrollTop() / $scroll.data('speed'));
         
        // background position
        var coords = '50% '+ yPos + 'px';
 
        // move the background
        $scroll.css({ backgroundPosition: coords });   
      }); // end window scroll
   });  // end section function
}); // close out script

/* Create HTML5 element for IE */
document.createElement("section");