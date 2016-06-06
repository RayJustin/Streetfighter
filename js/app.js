$(document).ready(function(){
// Ryu 
$('.ryu').mouseenter(function() {
	$('.ryu-still').hide();
	$('.ryu-ready').show();
})
.mouseleave(function() {
	$('.ryu-ready').hide();
	$('.ryu-still').show();
})
.mousedown(function(){
	playHadouken();
	$('.ryu-ready').hide();
	$('.ryu-throwing').show();
	$('.hadouken').finish().show().animate(
		{'left':'1020px'},
		500,
		function(){
			$(this).hide();
			$(this).css('left','520px');
		});
	})
.mouseup(function(){
	$('.ryu-throwing').hide();
	$('.ryu-ready').show();
});
$(document).on('keydown',function(key){
	if (key.keyCode === 88){
	$('.ryu-ready').hide();
	$('.ryu-still').hide();
	$('.ryu-cool').show();
}
})
.on('keyup',function(key){
	if (key.keyCode === 88){
	$('.ryu-ready').hide();
	$('.ryu-still').show();
	$('.ryu-cool').hide();
}
});
// Angry Ryu 
$('.ryu2').mouseenter(function() {
	$('.ryu-still2').hide();
	$('.ryu-ready2').show();
})
.mouseleave(function() {
	$('.ryu-ready2').hide();
	$('.ryu-still2').show();
})
.mousedown(function(){
	playHadouken();
	$('.ryu-ready2').hide();
	$('.ryu-throwing2').show();
	$('.hadouken2').finish().show().animate(
		{'left':'200px'},
		500,
		function(){
			$(this).hide();
			$(this).css('left','660px');
		});
	})
.mouseup(function(){
	$('.ryu-throwing2').hide();
	$('.ryu-ready2').show();
});
$(document).on('keydown',function(key){
	if (key.keyCode === 89){
	$('.ryu-ready2').hide();
	$('.ryu-still2').hide();
	$('.ryu-cool2').show();
}
})
.on('keyup',function(key){
	if (key.keyCode === 89){
	$('.ryu-ready2').hide();
	$('.ryu-still2').show();
	$('.ryu-cool2').hide();
}
});
});

function playHadouken() {
	$('#hadouken-sound')[0].volume = (0.5);
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}



$("p").text("<b> Some </b> new text")


