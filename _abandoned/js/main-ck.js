function drawChart(){var e=google.visualization.arrayToDataTable([["Item","Count"],["HTML5",36],["CSS3",36],["jQuery",28]]),t={backgroundColor:"#309292",fontName:"Oxygen",legend:{position:"none"},title:"CODE EXPERIENCE",titleTextStyle:{color:"#333",fontName:"Oxygen",fontSize:20},tooltip:{text:"percentage"}},n=new google.visualization.PieChart(document.getElementById("code"));n.draw(e,t)}$(function(){$(".curtains").curtain({scrollSpeed:400})});$(".indicator span").popover();google.load("visualization","1",{packages:["corechart"]});google.setOnLoadCallback(drawChart);$(document).ready(function(){$window=$(window);$('section[data-type="background"]').each(function(){var e=$(this);$(window).scroll(function(){var t=-($window.scrollTop()/e.data("speed")),n="50% "+t+"px";e.css({backgroundPosition:n})})})});document.createElement("section");