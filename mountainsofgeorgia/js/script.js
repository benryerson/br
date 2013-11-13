/* Author:
	Ben Ryerson
*/
$(document).ready(function(){

	$("#main-content ul li").hover(
		function () {
			$(this).find(".title").fadeIn();
		},
		function() {
			$(this).find(".title").fadeOut();
		}
		);
});




