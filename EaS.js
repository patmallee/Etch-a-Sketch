
$(document).ready(function() {
	reset();
});

/* everything working fine until we use the reset button */

function reset() {
	var screenSize = prompt("How large would you like your new screen to be?", "###");
	$('.screen').empty();	
	
	var gridSize = screenSize * screenSize;
	var pixelSize = (600 / screenSize) + 'px';

	for (i = 0; i < gridSize; i++) {
		$('.screen').append("<div class='pixel'></div>");
	}
	$('.screen').append("<div class='break'></div>");

	$('.pixel').css('width', pixelSize);
	$('.pixel').css('height', pixelSize);

	$('.pixel').mouseover(function() {
		var currentOpacity = $(this).css('opacity') * 10;
		if(currentOpacity < 10) {
			currentOpacity = (currentOpacity + 1) / 10
			$(this).css('opacity', currentOpacity);
		}
	});
}