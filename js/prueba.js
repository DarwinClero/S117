//or with jQuery
$(document).ready(function(){
	$('.datepicker').datepicker();
});

$(document).ready(function(){
	$('select').formSelect();
});

$('#iniciar').click(function(){
	$('#p1').slideDown();
	$('#iniciar').hide();
});

$('#siguiente').click(function(){
	if ($("#p1").show()) {
		$("#p1").hide();
	}
	if ($("#p2").hide()) {
		$("#p2").show();
	}
	
});