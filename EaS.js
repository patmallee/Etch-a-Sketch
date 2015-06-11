
$(document).ready(function() {
	reset()
});

function reset() {
	var screenSize = prompt("How large would you like your new screen to be?", "###");
	$('#screen').empty();	
	
	var gridSize = screenSize * screenSize;
	if (screenSize != null) {
		for (i = 0; i < gridSize; i++) {
			$('#screen').append("<div class='pixel' opacity='1'></div>");
		}	
	}

	var pixelSize = (500 / screenSize) + 'px';
	$('.pixel').css('width', pixelSize);
	$('.pixel').css('height', pixelSize);

	$('.pixel').hover(function() {
		var currentOpacity = $(this).css('opacity');
		if(currentOpacity < 1) {
			$(this).css('opacity', currentOpacity + 0.1);
		}
	});
}