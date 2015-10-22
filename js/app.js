$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still, .ryu-throwing, .ryu-cool').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
			.animate(
				{'left': '1103'},
				500,
				function() {
					$(this).hide();
					$(this).css('left', '603px');
				}
			);
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});

	$('body')
		.keydown(function(e) {
			if(e.keyCode == 88) {
				$('.ryu-still, .ryu-ready, .ryu-throwing').hide();
				$('.ryu-cool').show();
			}
		})
	
		.keyup(function(e) {
			if(e.keyCode == 88) {
				$('.ryu-cool, .ryu-throwing, .ryu-ready').hide();
				$('.ryu-still').show();
			}
		})
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}